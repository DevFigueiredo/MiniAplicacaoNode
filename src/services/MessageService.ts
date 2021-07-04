import { Message } from "src/entities/Message";
import { MessageRepository } from "src/respositories/MessageRepository";
import { getCustomRepository, Repository } from "typeorm";



export interface IMessageCreate {
   name: string,
   text_message: string
   message_tag_id: string
}

class MessageService{
    
   
   private messageRepository: Repository<Message>;

   constructor (){
       this.messageRepository = getCustomRepository(MessageRepository);
   }

   async create({name, text_message, message_tag_id}: IMessageCreate){
     const messageRepository = this.messageRepository.create({name, message_tag_id, text_message})
     await this.messageRepository.save(messageRepository)
     return messageRepository;
   }

   


}

export {MessageService};