import {Request, Response} from 'express';
import { CustomerService, ICustomer } from '../services/CustomerService';

class CustomerController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name, gender, birth_date, city_id}: ICustomer = request.body;
        try{
         const customerService = new CustomerService();

        const customer = await customerService.create({name,birth_date,gender,city_id,});


        return response.status(201).json(customer)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



    async findByName(request: Request, response: Response): Promise<Response>{
        const {name} = request.query;
          
        try{
        const customerService = new CustomerService();
    
        if ( typeof name === "string" ) {
        const customer = await customerService.findByName(name);
        return response.status(200).json(customer)
        }else{
            return response.status(500).json({messageError:"Invalid Name"})
        }    
    
    }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }


    async findById(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        try{
         const customerService = new CustomerService();
         const customer = await customerService.findById(id)


        return response.status(200).json(customer)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    async update(request: Request, response: Response): Promise<Response>{
        const {name, gender, birth_date, city_id}: ICustomer = request.body;
        const { id } = request.params;
        console.log(id);
        try{
         const customerService = new CustomerService();

        const customer = await customerService.update({id,name,birth_date,gender,city_id,});


        return response.status(202).json(customer)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        try{
         const customerService = new CustomerService();
         const customer = await customerService.delete(id);
         return response.status(204).json(customer)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

}










export {CustomerController};