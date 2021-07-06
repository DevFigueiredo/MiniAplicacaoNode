import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class City1625535437530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "City",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "state_id",
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
                name:"FKState",
                referencedTableName: "State",
                referencedColumnNames: ["id"],
                columnNames: ["state_id"],
                onUpdate: "SET NULL",
            }]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("City");

    }
}
