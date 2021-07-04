import { Repository, EntityRepository } from "typeorm";
import { Message } from "../entities/Message";
import { MessageTag } from "../entities/MessageTag";
import { SendMessageToContactUser } from "../entities/SendMessageToContactUser";

@EntityRepository(Message)
export class MessageRepository extends Repository<Message>{}


@EntityRepository(MessageTag)
export class MessageTagRepository extends Repository<MessageTag>{}



@EntityRepository(SendMessageToContactUser)
export class SendMessageToContactUserRepository extends Repository<SendMessageToContactUser>{}