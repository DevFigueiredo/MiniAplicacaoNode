import { ContactUserTag_ContactUser } from 'src/entities/ContactUserTag_ContactUser';
import { getCustomRepository, Repository } from 'typeorm';
import { ContactUserTag_ContactUserRepository } from '../respositories/ContactUserRepository';

export interface IContactUserTag_ContactUserServiceCreate {
    contact_user_id: string,
    contact_user_tag_id: string
}

class ContactUserTag_ContactUserService{

    private contactUserTag_ContactUserRepository: Repository<ContactUserTag_ContactUser>;

    constructor (){
        this.contactUserTag_ContactUserRepository = getCustomRepository(ContactUserTag_ContactUserRepository);
    }
    
   async create({contact_user_id, contact_user_tag_id}: IContactUserTag_ContactUserServiceCreate){
    const ContactUserTagContactUser = this.contactUserTag_ContactUserRepository.create({contact_user_id, contact_user_tag_id})
    await this.contactUserTag_ContactUserRepository.save(ContactUserTagContactUser);

    return ContactUserTagContactUser;
   }

   async index(){
   return await this.contactUserTag_ContactUserRepository.find()
   }



}

export {ContactUserTag_ContactUserService};