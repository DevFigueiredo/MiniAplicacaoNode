import {Request, Response} from 'express';
import { IState, StateService } from '../services/StateService';

class StateController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name}: IState = request.body;
        try{   
        const stateService = new StateService()
        const state = await stateService.create({name})

        return response.status(201).json(state)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



    async find(request: Request, response: Response): Promise<Response>{
        const name = request.query.name as string;
        try{
        const stateService = new StateService()
        if(name){
            const state = await stateService.findStateByName(name)  
            return response.status(200).json(state)
        }else{
            const states = await stateService.findAll()  
            return response.status(200).json(states)
        }
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    


}

export {StateController};