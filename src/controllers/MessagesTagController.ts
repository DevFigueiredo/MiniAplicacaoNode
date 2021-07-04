import { MessageService } from '@services/MessageService';
import {Request, Response} from 'express';

class MessagesTagController{


   async create(request: Request, response: Response): Promise<Response>{
        try{
      
        return response.status(201).json({})
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

    

}

export {MessagesTagController};