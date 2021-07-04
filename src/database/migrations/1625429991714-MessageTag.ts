import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class MessageTag1625429991714 implements MigrationInterface {

   
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "MessageTag",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    
            ]
            })
        )
   
   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("MessageTag");

    }
}
