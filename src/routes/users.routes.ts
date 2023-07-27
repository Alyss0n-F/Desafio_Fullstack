import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.get("", ensureAuthMiddleware, listUsersController)
userRoutes.patch("/:id", ensureAuthMiddleware, ensureDataIsValid(userSchemaUpdate), updateUserController)
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController)


export { userRoutes }