import {Request, Response} from 'express';
import { CustomerService, ICustomer } from '../services/CustomerService';

class CustomerController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name, gender, birth_date, city_id}: ICustomer = request.body;
        try{
         const customerService = new CustomerService();

         await customerService.create({name,gender,city_id, birth_date});


        return response.status(201).json({})
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {CustomerController};