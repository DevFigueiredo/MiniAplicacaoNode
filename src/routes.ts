import {Router} from 'express';
import { CityController } from './controllers/CityController';
const routes = Router();

const cityController = new CityController();

routes.post("/city/create", cityController.create);


export {routes};