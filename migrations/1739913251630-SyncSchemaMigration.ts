import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncSchemaMigration1739913251630 implements MigrationInterface {
    name = 'SyncSchemaMigration1739913251630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendoravailability" DROP CONSTRAINT "vendoravailability_vendorid_fkey"`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" DROP CONSTRAINT "FK_90b76428e3076eeb7f4fb593e2e"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf"`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" DROP COLUMN "vendorid"`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" ADD "vendorid" integer`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" ALTER COLUMN "isbooked" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendorname"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendorname" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "UQ_2e52e403780b5a0e62712a60654" UNIQUE ("vendorname")`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "pricing"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "pricing" numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" ADD CONSTRAINT "FK_c41d23f53f2637f93ab2e2f85b5" FOREIGN KEY ("vendorid") REFERENCES "vendor"("vendorid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" ADD CONSTRAINT "FK_90b76428e3076eeb7f4fb593e2e" FOREIGN KEY ("availabilityAvailabilityid") REFERENCES "vendoravailability"("availabilityid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_429ce785051ddb983984fa64168" FOREIGN KEY ("vendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_429ce785051ddb983984fa64168"`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" DROP CONSTRAINT "FK_90b76428e3076eeb7f4fb593e2e"`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" DROP CONSTRAINT "FK_c41d23f53f2637f93ab2e2f85b5"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "pricing"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "pricing" character varying`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "UQ_2e52e403780b5a0e62712a60654"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendorname"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendorname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" ALTER COLUMN "isbooked" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" DROP COLUMN "vendorid"`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" ADD "vendorid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf" FOREIGN KEY ("vendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" ADD CONSTRAINT "FK_90b76428e3076eeb7f4fb593e2e" FOREIGN KEY ("availabilityAvailabilityid") REFERENCES "vendoravailability"("availabilityid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendoravailability" ADD CONSTRAINT "vendoravailability_vendorid_fkey" FOREIGN KEY ("vendorid") REFERENCES "vendor"("vendorid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
