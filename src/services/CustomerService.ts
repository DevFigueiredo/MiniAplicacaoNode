import { CustomerRepository } from '../respositories/CustomerRepository';
import { getCustomRepository, Repository } from 'typeorm';
import { Customer } from '../entities/Customer';

export interface ICustomer {
    id?: string;
    name: string;
    gender: string; 
    birth_date: string;
    city_id: string;
}

class CustomerService{

    private customerRepository: Repository<Customer>;

    constructor (){
        this.customerRepository = getCustomRepository(CustomerRepository);
    }
    
   async create({name, birth_date, gender}: ICustomer){
    const Customer = this.customerRepository.create({name, birth_date, gender})
    await this.customerRepository.save(Customer);

    return Customer;
   }





}

export {CustomerService};