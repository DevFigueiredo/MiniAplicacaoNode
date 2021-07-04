import { Repository, EntityRepository } from "typeorm";
import { ContactUserTag_ContactUser } from "../entities/ContactUserTag_ContactUser";
import { ContactUser } from "../entities/ContactUser";
import { ContactUserTag } from "../entities/ContactUserTag";
import { ContactUserHistoryMessageSended } from "../entities/ContactUserHistoryMessageSended";


@EntityRepository(ContactUser)
export class ContactUserRepository extends Repository<ContactUser>{}

@EntityRepository(ContactUserTag_ContactUser)
export class ContactUserTag_ContactUserRepository extends Repository<ContactUserTag_ContactUser>{}

@EntityRepository(ContactUserTag)
export class ContactUserTagRepository extends Repository<ContactUserTag>{}

@EntityRepository(ContactUserHistoryMessageSended)
export class ContactUserHistoryMessageSendedRepository extends Repository<ContactUserHistoryMessageSended>{}