import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinColumn, ManyToOne} from 'typeorm';
import {v4 as UUID} from 'uuid';
import { MessageTag } from './MessageTag';

@Entity("Message")
class Message{
 @PrimaryColumn()
 id: string;
 
 @Column()
 name: string;

 @Column()
 text_message: string;
 
 @Column()
 message_tag_id: string;

  
 @JoinColumn({name: "message_tag_id"})
 @ManyToOne(()=>MessageTag)
 message_tag: MessageTag;

 
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

export {Message};