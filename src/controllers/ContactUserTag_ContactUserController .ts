import {Request, Response} from 'express';
import { ContactUserTag_ContactUserService, IContactUserTag_ContactUserServiceCreate } from '../services/ContactUserTag_ContactUserService';

class ContactUserTag_ContactUserController {


   async create(request: Request, response: Response): Promise<Response>{
        const {contact_user_id, contact_user_tag_id}:IContactUserTag_ContactUserServiceCreate  = request.body;
        try{
        const contactUserTagsService = new ContactUserTag_ContactUserService();
        const users = await contactUserTagsService.create({contact_user_id,contact_user_tag_id})
        return response.status(201).json(users)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    async index(request: Request, response: Response): Promise<Response>{
        try{
        const contactUserTagsService = new ContactUserTag_ContactUserService();
        const contacts = await contactUserTagsService.index()
        return response.status(200).json(contacts)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {ContactUserTag_ContactUserController};