import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableUsers1564521236184 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'userName',
          type: 'character varying',
          isNullable: false,
          length: '100',
        },
        {
          name: 'password',
          type: 'character varying',
          isNullable: false,
          length: '255',
        }
      ]
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('heroes');
  }

}
