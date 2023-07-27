import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interface";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
    const { name, email, password, phone_number } = data
    const userRepository = AppDataSource.getRepository(User)
    const foundUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if (foundUser) {
        throw new AppError("User already exists", 409)
    }

    const hashedPassword = await hash(password, 10)
    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        phone_number
    })

    await userRepository.save(user)
    return userSchemaResponse.parse(user)
}

export { createUserService }