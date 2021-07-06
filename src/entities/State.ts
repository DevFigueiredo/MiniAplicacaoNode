import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm';
import {v4 as UUID} from 'uuid';

@Entity("State")
class State{
 @PrimaryColumn()
 id: string;
 
 @Column()
 name: string;
 
 
 @UpdateDateColumn()
 updated_at: Date;
 
 @CreateDateColumn()
 created_at: Date;


 
  constructor(){
      if(!this.id){
          this.id = UUID();
      }
  }

}

export {State};