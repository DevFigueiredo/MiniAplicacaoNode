import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class SendMessageToContactUser1625430571267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "SendMessageToContactUser",
                columns: [
                    {
                        name: "id",
                        type: "number",
                        isPrimary: true
                    },
                    {
                        name: "contact_user_id",
                        type: "varchar",
                    },
                    {
                        name: "message_id",
                        type: "varchar",
                    },
                    {
                        name: "sended",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "sended_at",
                        type: "datetime",
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
                name:"FkContactUser",
                referencedTableName: "ContactUser",
                referencedColumnNames: ["id"],
                columnNames: ["contact_user_id"],
                onUpdate: "SET NULL",
            },
            {
                name:"FkMessage",
                referencedTableName: "Message",
                referencedColumnNames: ["id"],
                columnNames: ["message_id"],
                onUpdate: "SET NULL",
            }
        ]
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("SendMessageToContactUser");

    }

}
