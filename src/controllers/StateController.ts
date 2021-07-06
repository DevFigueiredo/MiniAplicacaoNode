import {Request, Response} from 'express';
import { IState } from '../services/StateService';

class StateController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name}: IState = request.body;
        try{
        return response.status(201).json({})
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {StateController};