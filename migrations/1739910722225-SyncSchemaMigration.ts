import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncSchemaMigration1739910722225 implements MigrationInterface {
    name = 'SyncSchemaMigration1739910722225'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendortypeVendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendortypeid" integer`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendorname"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendorname" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "UQ_2e52e403780b5a0e62712a60654" UNIQUE ("vendorname")`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "pricing"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "pricing" numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_429ce785051ddb983984fa64168" FOREIGN KEY ("vendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_429ce785051ddb983984fa64168"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "pricing"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "pricing" character varying`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "UQ_2e52e403780b5a0e62712a60654"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendorname"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendorname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendortypeVendortypeid" integer`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf" FOREIGN KEY ("vendortypeVendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
