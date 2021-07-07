import { CustomerRepository } from '../respositories/CustomerRepository';
import { getCustomRepository, ILike, Like, Repository } from 'typeorm';
import { Customer } from '../entities/Customer';

export interface ICustomer {
    id?: string;
    name: string;
    gender: string; 
    birth_date: Date;
    city_id: string;
}

class CustomerService{

    private customerRepository: Repository<Customer>;

    constructor (){
        this.customerRepository = getCustomRepository(CustomerRepository);
    }
    
   async create({name, birth_date, gender, city_id}: ICustomer){
    const customer = this.customerRepository.create({name, birth_date, gender, city_id})
    await this.customerRepository.save(customer);

    return customer;
   }


   async findByName(name: string){
    const customer = await this.customerRepository.find({
        relations:["city"],
        where:{
        name: Like(`%${name}%`),
    }
}) 
    return customer;

   }

   async findById(id: string){
    const customer = await this.customerRepository.find({relations:["city"], where: {id}}) 
   return customer;

   }

   async delete(id: string){
    const customer = await this.customerRepository.delete({id}) 
   return customer;
   }

   
   async update({id, name, gender, birth_date, city_id}: ICustomer){
   const customer = await this.customerRepository.findOne({where: {id}}) 
   const customerUpdated= await this.customerRepository.save({...customer, name, gender, birth_date, city_id})
   return customerUpdated;

   }



}

export {CustomerService};