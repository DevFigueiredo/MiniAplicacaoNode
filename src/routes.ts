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
routes.post("/state/create", stateController.create);


export {routes};