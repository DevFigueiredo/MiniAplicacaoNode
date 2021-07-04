import {Request, Response} from 'express';
import { IMessageTagCreate, MessageTagService } from '@services/MessageTagService';

class MessagesTagController{


   async create(request: Request, response: Response): Promise<Response>{
        try{
            const {description}: IMessageTagCreate = request.body;

            const messageTagService = new MessageTagService();
            const messageTag = await messageTagService.create({description})
        return response.status(201).json(messageTag)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    

}

export {MessagesTagController};