import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";

const createUserController = async (req: Request, res: Response) => {
    const createdUser = await createUserService(req.body)

    return res.status(201).json(createdUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()

    return res.json(users)
}

// const updateUserController = async (req: Request, res: Response) => {
//     const updatedContact = await updateContactService(req.body, req.params.id)
//     return res.json(updatedContact)
// }

// const deleteUserController = async (req: Request, res: Response) => {
//     await deleteContactService(req.params.id)
//     return res.status(204).send()
// }

export { createUserController, listUsersController }