import { Repository, EntityRepository } from "typeorm";
import { State } from "../entities/State";


@EntityRepository(State)
export class StateRepository extends Repository<State>{}
