import express,{json} from 'express';
import "reflect-metadata";
import {routes} from './routes';
import * as dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json'
import './database';
dotenv.config();


const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(json())
app.use("/v1",routes);




export {app};