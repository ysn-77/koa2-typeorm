import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class UserIdInHeroes1565429315370 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn('heroes', new TableColumn({
      name: 'createdByUserId',
      type: 'int'
    }));

    await queryRunner.createForeignKey('heroes', new TableForeignKey({
      columnNames: ['createdByUserId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable('heroes');
    if (!table) { return; }
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('createdByUserId') !== -1);
    if (!foreignKey) { return; }
    await queryRunner.dropForeignKey('heroes', foreignKey);
    await queryRunner.dropColumn('heroes', 'createdByUserId');
  }

}
