import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound} from 'typeorm';
import {v4 as UUID} from 'uuid';

@Entity("ContactUser")
class ContactUser{
 @PrimaryColumn()
 id: string;
 
 @Column()
 email: string;

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

export {ContactUser};