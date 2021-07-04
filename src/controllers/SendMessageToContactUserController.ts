import { ISendMessageToContactUser,SendMessageToContactUserService } from '@services/SendMessageToContactUserService';
import {Request, Response} from 'express';

class SendMessageToContactUserController{

   async create(request: Request, response: Response): Promise<Response>{
        const {contact_user_id, message_id}: ISendMessageToContactUser  = request.body;
        try{
            const sendMessageToContactUserService = new SendMessageToContactUserService()
           const sendMessageToContactUser = await sendMessageToContactUserService.create({contact_user_id,message_id})
        return response.status(201).json(sendMessageToContactUser)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {SendMessageToContactUserController};