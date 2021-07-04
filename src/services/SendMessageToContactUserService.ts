import { SendMessageToContactUser } from "src/entities/SendMessageToContactUser";
import { SendMessageToContactUserRepository } from "src/respositories/MessageRepository";
import { getCustomRepository, Repository } from "typeorm";



export interface ISendMessageToContactUser {
    contact_user_id: string,
    message_id: string
 }

class SendMessageToContactUserService{
     
   private sendMessageToContactRepository: Repository<SendMessageToContactUser>;

   constructor (){
       this.sendMessageToContactRepository = getCustomRepository(SendMessageToContactUserRepository);
   }

   async create({contact_user_id, message_id}: ISendMessageToContactUser){
    const sendMessageToContactRepository =  this.sendMessageToContactRepository.create({contact_user_id, message_id})
    await this.sendMessageToContactRepository.save(sendMessageToContactRepository)
    return sendMessageToContactRepository;
   }



}

export {SendMessageToContactUserService};