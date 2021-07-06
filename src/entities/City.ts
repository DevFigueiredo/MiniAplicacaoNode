import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound, ManyToMany, ManyToOne, JoinColumn} from 'typeorm';
import {v4 as UUID} from 'uuid';
import { State } from './State';

@Entity("City")
class City{
 @PrimaryColumn()
 id: string;
 
 @Column()
 name: string;

 
 @Column()
 state_id: string;
 
 @UpdateDateColumn()
 updated_at: Date;
 
 @CreateDateColumn()
 created_at: Date;
 
 @JoinColumn({name: "state_id"})
 @ManyToOne(()=>State)
 state: State;

  constructor(){
      if(!this.id){
          this.id = UUID();
      }
  }

}

export {City};