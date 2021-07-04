import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {v4 as UUID} from 'uuid';
import { ContactUser } from './ContactUser';
import { Message } from './Message';

@Entity("ContactUserHistoryMessageSended")
class ContactUserHistoryMessageSended{
 @PrimaryGeneratedColumn('increment')
 id: number;

 @Column()
 contact_user_id: string;

 @Column()
 message_id: string;
 
 @Column()
 description: string

 @JoinColumn({name: "message_id"})
 @ManyToOne(()=>Message)
 message: Message;

 @JoinColumn({name: "contact_user_id"})
 @ManyToOne(()=>ContactUser)
 contact: ContactUser;
 
 @UpdateDateColumn()
 updated_at: Date;
 
 @CreateDateColumn()
 created_at: Date;


}

export {ContactUserHistoryMessageSended};