import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class ContactUserTagContactUser1625332490158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ContactUserTag_ContactUser",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "contact_user_id",
                        type: "varchar"
                    },
                    {
                        name: "contact_user_tag_id",
                        type: "varchar"
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
                name:"FKContactUserTag",
                referencedTableName: "ContactUserTag",
                referencedColumnNames: ["id"],
                columnNames: ["contact_user_tag_id"],
                onUpdate: "SET NULL",
            },
            {
                name:"FKContactUser",
                referencedTableName: "ContactUser",
                referencedColumnNames: ["id"],
                columnNames: ["contact_user_id"],
                onUpdate: "SET NULL",
            }]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ContactUserTag");

    }

}
