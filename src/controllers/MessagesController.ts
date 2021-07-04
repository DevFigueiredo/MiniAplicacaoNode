import { MessagesService } from '@services/MessageService';
import {Request, Response} from 'express';

class MessagesController{


   async create(request: Request, response: Response): Promise<Response>{
        const {text_message, contact_user_tag_id, message_tag_id}  = request.body;
        try{
      
        return response.status(201).json({})
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    async sendMessages(request: Request, response: Response): Promise<Response>{
        try{
        const messagesService = new MessagesService()
         const messages = messagesService.sendMessages()
        return response.status(201).json(messages)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }


}

export {MessagesController};