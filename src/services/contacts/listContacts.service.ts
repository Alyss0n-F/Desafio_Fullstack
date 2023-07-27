import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactsResponse } from "../../interfaces/contacts.interface";
import { contactsSchemaResponse } from "../../schemas/contacts.schema";



const listContactsService = async (userId: string): Promise<TContactsResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const contacts = await contactRepository.find({
        where: {
            user: {
                id: userId
            }
        }
    })

    return contactsSchemaResponse.parse(contacts)
}

export { listContactsService }