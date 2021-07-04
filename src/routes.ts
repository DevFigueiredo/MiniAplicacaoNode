import {Router} from 'express';
import { ContactUserController } from './controllers/ContactUserController';
import { ContactUserTagController } from './controllers/ContactUserTagController';
import { ContactUserTag_ContactUserController } from './controllers/ContactUserTag_ContactUserController ';
const routes = Router();

const contactUserController = new ContactUserController();
const contactUserTagController = new ContactUserTagController();
const contactUserTagContactUserController = new ContactUserTag_ContactUserController();

routes.post("/user_contact/create", contactUserController.ImportContacts);
routes.post("/user_contact_tag/create", contactUserTagController.create);
routes.post("/user_contact_tag_contact/create", contactUserTagContactUserController.create);
routes.get("/user_contact_tag_contact/index", contactUserTagContactUserController.index);


export {routes};