import {Request, Response} from 'express';
import { IUserCreate, ContactUsersService } from '../services/ContactUsersService';

class ContactUserController{


   async ImportContacts(request: Request, response: Response): Promise<Response>{
        const {name, email}: IUserCreate = request.body;
        try{
        const contactUserService = new ContactUsersService();
        const users = await contactUserService.create({email, name})
        return response.status(201).json(users)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {ContactUserController};