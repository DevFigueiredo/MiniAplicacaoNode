import { getCustomRepository, Like, Repository } from 'typeorm';
import { CityRepository } from '../respositories/CityRepository';
import { City } from '../entities/City';
import { StateService } from './StateService';

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
    
    const cityAlreadyExists = await this.cityRepository.findOne({name, state_id})

    if(cityAlreadyExists){
        throw new Error("City Already exists!");
    }


    await this.cityRepository.save(City);

    return City;
   }

   async findAll(){
    const cities = await this.cityRepository.find();
    
    return cities;

   }

   async findCityByState(state_name: string){
    const stateService = new StateService();
    const state = await stateService.findStateByName(state_name)   
    const cities = await this.cityRepository.find({ relations:["state"], where:{state} });
    
    return cities;

   }

   async findCityByName(city_name: string){
    const cities = await this.cityRepository.findOne({name: Like(`%${city_name}%`)})
    return cities;
   
}

async findCityByNameAndStateName(city_name: string, state_name: string){
    const stateService = new StateService();
    const state = await stateService.findStateByName(state_name);

    const cities = await this.cityRepository.findOne({name: city_name, state_id: state.id })
    return cities;
   
}
   




}

export {CityService};