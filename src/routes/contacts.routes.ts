import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schema";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactRoutes = Router()

contactRoutes.post("", ensureAuthMiddleware, ensureDataIsValid(contactSchemaRequest), createContactController)
contactRoutes.get("", ensureAuthMiddleware, listContactController)
contactRoutes.patch("/:id", ensureAuthMiddleware, ensureIsOwnerMiddleware, ensureDataIsValid(contactSchemaUpdate), updateContactController)
contactRoutes.delete("/:id", ensureAuthMiddleware, ensureIsOwnerMiddleware, deleteContactController)

export { contactRoutes }