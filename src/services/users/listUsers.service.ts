import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { TUsersResponse } from "../../interfaces/users.interface"
import { usersSchemaResponse } from "../../schemas/users.schema"

const listUsersService = async (): Promise<TUsersResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return usersSchemaResponse.parse(users)
}

export { listUsersService }