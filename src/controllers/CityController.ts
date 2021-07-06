import {Request, Response} from 'express';
import { CityService, ICity } from '../services/CityService';

class CityController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name, state_id}: ICity = request.body;
        try{
        const cityService = new CityService();
        await cityService.create({name,state_id})   
        
        return response.status(201).json({})
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {CityController};