import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound, ManyToMany} from 'typeorm';
import {v4 as UUID} from 'uuid';
import { ContactUserTag_ContactUser } from './ContactUserTag_ContactUser';

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


 
 @ManyToMany(()=>ContactUserTag_ContactUser)
 contact_user_tag: ContactUserTag_ContactUser;

  constructor(){
      if(!this.id){
          this.id = UUID();
      }
  }

}

export {ContactUser};