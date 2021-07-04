import express,{json} from 'express';
import "reflect-metadata";
import './database'
import {routes} from './routes';
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();


app.use(json())
app.use(routes);




export {app};