import { getCustomRepository, Repository } from 'typeorm';
import { ContactUserTag } from '../entities/ContactUserTag';
import { ContactUserTagRepository } from '../respositories/ContactUserRepository';

export interface IContactUserTagCreate {
    description: string
}

class ContactUserTagsService{

    private contactUserTagRepository: Repository<ContactUserTag>;

    constructor (){
        this.contactUserTagRepository = getCustomRepository(ContactUserTagRepository);
    }
    
   async create({description}: IContactUserTagCreate){
    const Tag = this.contactUserTagRepository.create({description})
    const tagNameAlteradyExists = await this.contactUserTagRepository.findOne({
        description
    })

    if(tagNameAlteradyExists){
        throw new Error("Tag alerady exists!");
    }
    await this.contactUserTagRepository.save(Tag);

    return Tag;
   }




}

export {ContactUserTagsService};