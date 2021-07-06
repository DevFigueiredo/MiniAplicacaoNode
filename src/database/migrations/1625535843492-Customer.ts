import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Customer1625535843492 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Customer",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "gender",
                        type: "varchar"
                    },
                    {
                        name: "birth_date",
                        type: "datetime"
                    },
                    {
                        name: "city_id",
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
                name:"FKCity",
                referencedTableName: "City",
                referencedColumnNames: ["id"],
                columnNames: ["city_id"],
                onUpdate: "SET NULL",
            }]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Customer");

    }

}
