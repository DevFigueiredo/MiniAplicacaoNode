import { ContactUserTag_ContactUser } from 'src/entities/ContactUserTag_ContactUser';
import { getCustomRepository, Repository } from 'typeorm';
import { ContactUser } from '../entities/ContactUser';
import { ContactUserRepository } from '../respositories/ContactUserRepository';

export interface IUserCreate {
    email: string,
    name: string
}

class ContactUsersService{

    private contactUserRepository: Repository<ContactUser>;

    constructor (){
        this.contactUserRepository = getCustomRepository(ContactUserRepository);
    }
    
   async create({email, name}: IUserCreate){
    const User = this.contactUserRepository.create({name, email})
    await this.contactUserRepository.save(User);

    return User;
   }


   async showAll({user_tag_id, name, email}){
    
    return await this.contactUserRepository.find({
        relations:["contact_user_tag"]
    })
    

   }


   async index(){
       return await this.contactUserRepository.find();
   }



}

export {ContactUsersService};