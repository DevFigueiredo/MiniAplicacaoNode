import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound, ManyToMany, ManyToOne, JoinColumn} from 'typeorm';
import {v4 as UUID} from 'uuid';
import { City } from './City';

@Entity("Customer")
class Customer{
 @PrimaryColumn()
 id: string;
 
 @Column()
 name: string;
 
 @Column()
 birth_date: Date;

 @Column({length: 1})
 gender: string;

 @UpdateDateColumn()
 updated_at: Date;
 
 @CreateDateColumn()
 created_at: Date;

 
 @Column()
 city_id: string;

 @JoinColumn({name: "city_id"})
 @ManyToOne(()=>City)
 city: City;
 
  constructor(){
      if(!this.id){
          this.id = UUID();
      }
  }

}

export {Customer};