import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Message1625430154397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Message",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "message_tag_id",
                        type: "varchar",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "text_message",
                        type: "text",
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
                    
            ],
            foreignKeys:[{
                name:"FkMessageTag",
                referencedTableName: "MessageTag",
                referencedColumnNames: ["id"],
                columnNames: ["message_tag_id"],
                onUpdate: "SET NULL",
            }]
            })
        )
   
   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Message");

    }
}
