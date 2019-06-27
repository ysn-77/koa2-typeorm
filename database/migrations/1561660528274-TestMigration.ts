import {MigrationInterface, QueryRunner} from "typeorm";

export class TestMigration1561660528274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('select 1+1 as count');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('select 1+1 as count');
    }

}
