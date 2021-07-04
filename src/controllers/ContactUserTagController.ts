import {Request, Response} from 'express';
import { ContactUserTagsService, IContactUserTagCreate } from '../services/ContactUsersTagsService';

class ContactUserTagController{


   async create(request: Request, response: Response): Promise<Response>{
        const {description}:IContactUserTagCreate  = request.body;
        try{
        const contactUserTagsService = new ContactUserTagsService();
        const users = await contactUserTagsService.create({description})
        return response.status(201).json(users)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {ContactUserTagController};