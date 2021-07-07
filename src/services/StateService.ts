import { getCustomRepository, Repository } from 'typeorm';
import { StateRepository } from '../respositories/StateRepository';
import { State } from '../entities/State';

export interface IState {
    id?: string;
    name: string;
}

class StateService{

    private stateRepository: Repository<State>;

    constructor (){
        this.stateRepository = getCustomRepository(StateRepository);
    }
    
   async create({name}: IState){
    const State = this.stateRepository.create({name})
    const stateAlreadyExists = await this.stateRepository.findOne({name})

    if(stateAlreadyExists){
        throw new Error("State Already exists!");
    }

    await this.stateRepository.save(State);

    return State;
   }

   async find({name}){
    const params = {name}
    if(!params.name) delete params.name;
    const State = await this.stateRepository.find({where:params})
    return State;
   }




}

export {StateService};