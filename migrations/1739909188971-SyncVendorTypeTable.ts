import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncVendorTypeTable1739909188971 implements MigrationInterface {
    name = 'SyncVendorTypeTable1739909188971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf"`);
        await queryRunner.query(`ALTER TABLE "vendor" RENAME COLUMN "vendortypeVendortypeid" TO "vendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" ALTER COLUMN "vendortypeid" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_429ce785051ddb983984fa64168" FOREIGN KEY ("vendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_429ce785051ddb983984fa64168"`);
        await queryRunner.query(`ALTER TABLE "vendor" ALTER COLUMN "vendortypeid" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" RENAME COLUMN "vendortypeid" TO "vendortypeVendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf" FOREIGN KEY ("vendortypeVendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
