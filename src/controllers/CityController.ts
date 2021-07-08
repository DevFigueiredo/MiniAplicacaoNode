import {Request, Response} from 'express';
import { CityService, ICity } from '../services/CityService';

class CityController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name, state_id}: ICity = request.body;
        try{
        const cityService = new CityService();
        const city = await cityService.create({name,state_id})   
        
        return response.status(201).json(city)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    async find(request: Request, response: Response): Promise<Response>{
        const name = request.query?.name as string;
        const state_name = request.query?.state_name as string;
        try{
        const cityService = new CityService();
        const city = await cityService.find(name, state_name);
        return response.status(200).json(city)
    
    }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    



}

export {CityController};