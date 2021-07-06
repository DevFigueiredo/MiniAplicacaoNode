import {Request, Response} from 'express';
import { ICustomer } from '../services/CustomerService';

class CustomerController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name, gender, birth_date}: ICustomer = request.body;
        try{


            
        return response.status(201).json({})
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {CustomerController};