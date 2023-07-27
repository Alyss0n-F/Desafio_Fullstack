import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.get("", listUsersController)

export { userRoutes }