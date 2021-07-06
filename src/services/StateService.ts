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
    await this.stateRepository.save(State);

    return State;
   }





}

export {StateService};