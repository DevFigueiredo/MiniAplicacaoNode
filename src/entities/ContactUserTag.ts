import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound} from 'typeorm';
import {v4 as UUID} from 'uuid';

@Entity("ContactUserTag")
class ContactUserTag{
 @PrimaryColumn()
 id: string;
 
 @Column()
 description: string;
 
 
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

export {ContactUserTag};