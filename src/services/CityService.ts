import { getCustomRepository, Like, Repository } from 'typeorm';
import { CityRepository } from '../respositories/CityRepository';
import { City } from '../entities/City';
import { State } from '../entities/State';
import { StateRepository } from '../respositories/StateRepository';

export interface ICity {
    id?: string;
    name: string;
    state_id: string;
}

class CityService{

    private cityRepository: Repository<City>;
    private stateRepository: Repository<State>;

    constructor (){
        this.cityRepository = getCustomRepository(CityRepository);
        this.stateRepository = getCustomRepository(StateRepository);
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

   async find(name?: string, state_name?: string){

    const state = await this.stateRepository.findOne({name:Like(`%${state_name}%`)})
    const params = {state, name: Like(`%${name}%`)}
    
    if(!params.state) delete params.state;
    if(!params.name) delete params.name;

    const customer = await this.cityRepository.find({ relations:["state"], where:params });
    
    return customer;

   }
   




}

export {CityService};