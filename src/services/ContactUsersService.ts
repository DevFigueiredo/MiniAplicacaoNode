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




}

export {ContactUsersService};