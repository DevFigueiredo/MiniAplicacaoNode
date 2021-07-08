import {Router} from 'express';
import { CityController } from './controllers/CityController';
import { CustomerController } from './controllers/CustomerController';
import { StateController } from './controllers/StateController';
const routes = Router();

const cityController = new CityController();
const customerController = new CustomerController();
const stateController = new StateController();

routes.post("/city/create", cityController.create);
routes.post("/customer/create", customerController.create);
routes.get("/customer/find/:id", customerController.findById);
routes.get("/customer/find", customerController.findByName);
routes.get("/city/find", cityController.find);
routes.get("/state/find", stateController.find);
routes.post("/customer/create", customerController.create);
routes.put("/customer/update/:id", customerController.update);
routes.delete("/customer/delete/:id", customerController.delete);
routes.post("/state/create", stateController.create);


export {routes};