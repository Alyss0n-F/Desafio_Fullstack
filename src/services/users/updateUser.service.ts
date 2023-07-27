import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/AppError"
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interface"
import { userSchema } from "../../schemas/users.schema"

const updateUserService = async (data: any, userId: string): Promise<any> => {
    const userRepository = AppDataSource.getRepository(User)
    const oldUser = await userRepository.findOneBy({id: userId})

    if(!oldUser){
        throw new AppError("Contact not found", 404)
    }

    const newUserData = userRepository.create({
        ...oldUser,
        ...data
    })

    await userRepository.save(newUserData)

    return userSchema.parse(newUserData)
}

export { updateUserService }