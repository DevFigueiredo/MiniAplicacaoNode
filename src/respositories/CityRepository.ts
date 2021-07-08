import { Repository, EntityRepository } from 'typeorm';
import { City } from '../entities/City'

@EntityRepository(City)
export class CityRepository extends Repository<City> {}
