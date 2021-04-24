import { Router } from "express";
import { MessagesController } from "./controllers/MessagesControlle";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesControlle = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesControlle.create);
routes.get("/messages/:id", messagesControlle.listByUser);

export { routes };