import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound, JoinColumn, ManyToOne} from 'typeorm';
import {v4 as UUID} from 'uuid';
import { ContactUser } from './ContactUser';
import { ContactUserTag } from './ContactUserTag';

@Entity("ContactUserTag_ContactUser")
class ContactUserTag_ContactUser{
 @PrimaryColumn()
 id: string;

 @Column()
 contact_user_id: string;
 @Column()
 contact_user_tag_id: string;
 
 @JoinColumn({name: "contact_user_id"})
 @ManyToOne(()=>ContactUser)
 contact_user: ContactUser;



 @JoinColumn({name: "contact_user_tag_id"})
 @ManyToOne(()=>ContactUserTag)
 contact_user_tag: ContactUserTag;
 
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

export {ContactUserTag_ContactUser};