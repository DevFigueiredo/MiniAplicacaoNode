import express,{json} from 'express';
import "reflect-metadata";
import {routes} from './routes';
import * as dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';


dotenv.config();


const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup())

app.use(json())
app.use(routes);




export {app};