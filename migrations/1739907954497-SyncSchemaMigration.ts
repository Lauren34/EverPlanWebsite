import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncSchemaMigration1739907954497 implements MigrationInterface {
    name = 'SyncSchemaMigration1739907954497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf"`);
        await queryRunner.query(`ALTER TABLE "vendor" RENAME COLUMN "vendortypeVendortypeid" TO "vendortypeid"`);
        await queryRunner.query(`CREATE TABLE "vendor_type" ("vendortypeid" SERIAL NOT NULL, "vendortypename" character varying(50) NOT NULL, CONSTRAINT "UQ_15582c3225fdab9da2c0927dbb6" UNIQUE ("vendortypename"), CONSTRAINT "PK_673e61222c6fb3e674b064fbef6" PRIMARY KEY ("vendortypeid"))`);
        await queryRunner.query(`ALTER TABLE "vendor" ALTER COLUMN "vendortypeid" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_429ce785051ddb983984fa64168" FOREIGN KEY ("vendortypeid") REFERENCES "vendor_type"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_429ce785051ddb983984fa64168"`);
        await queryRunner.query(`ALTER TABLE "vendor" ALTER COLUMN "vendortypeid" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "vendor_type"`);
        await queryRunner.query(`ALTER TABLE "vendor" RENAME COLUMN "vendortypeid" TO "vendortypeVendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf" FOREIGN KEY ("vendortypeVendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
