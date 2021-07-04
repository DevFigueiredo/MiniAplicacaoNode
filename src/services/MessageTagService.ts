import { MessageTag } from "src/entities/MessageTag";
import { MessageTagRepository } from "src/respositories/MessageRepository";
import { getCustomRepository, Repository } from "typeorm";


export interface IMessageCreate {
    description: string,
 }

class MessageTagService{
     
   private messageTagRepository: Repository<MessageTag>;

   constructor (){
       this.messageTagRepository = getCustomRepository(MessageTagRepository);
   }

   async create({description}: IMessageCreate){

   const messageTagRepository =  this.messageTagRepository.create({description})
   await this.messageTagRepository.save(messageTagRepository);
   return messageTagRepository;
   }

  



}

export {MessageTagService};