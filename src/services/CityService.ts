import { getCustomRepository, Repository } from 'typeorm';
import { CityRepository } from '../respositories/CityRepository';
import { City } from '../entities/City';

export interface ICity {
    id?: string;
    name: string;
    state_id: string;
}

class CityService{

    private cityRepository: Repository<City>;

    constructor (){
        this.cityRepository = getCustomRepository(CityRepository);
    }
    
   async create({name, state_id}: ICity){
    const City = this.cityRepository.create({name, state_id})
    await this.cityRepository.save(City);

    return City;
   }





}

export {CityService};