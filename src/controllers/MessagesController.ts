import { IMessageCreate, MessageService } from '@services/MessageService';
import {Request, Response} from 'express';

class MessagesController{


   async create(request: Request, response: Response): Promise<Response>{
    const {name,text_message, message_tag_id}: IMessageCreate  = request.body;
        try{
           const messagesService = new MessageService()
           const message = await messagesService.create({name, text_message, message_tag_id})

        return response.status(201).json(message)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    async sendMessages(request: Request, response: Response): Promise<Response>{
        try{
        const messagesService = new MessageService()
        return response.status(201).json({})
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }


}

export {MessagesController};