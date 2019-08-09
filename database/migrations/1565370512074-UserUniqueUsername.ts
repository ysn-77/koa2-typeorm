import {MigrationInterface, QueryRunner, TableIndex} from 'typeorm';

export class UserUniqueUsername1565370512074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const index = new TableIndex({ columnNames: ['userName'], isUnique: true, name: 'IDX_unique_userName' });
        await queryRunner.createIndex('users', index);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `users` DROP INDEX `IDX_unique_userName`');
    }

}
