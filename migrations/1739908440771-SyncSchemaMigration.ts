import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncSchemaMigration1739908440771 implements MigrationInterface {
    name = 'SyncSchemaMigration1739908440771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor_availability" DROP CONSTRAINT "FK_e1d8a3d4acc566620563cc55ca4"`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" DROP CONSTRAINT "FK_abf63abf84c9b81618421801329"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf"`);
        await queryRunner.query(`ALTER TABLE "vendor_availability" RENAME COLUMN "vendorid" TO "vendorid"`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" RENAME COLUMN "vendorVendorid" TO "vendorId"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP CONSTRAINT "vendortype_pkey"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP COLUMN "vendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP CONSTRAINT "UQ_abc27a75dcb41dcf3db57f20b13"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP COLUMN "vendortypename"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "vendor_pkey"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendorid"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendortypeVendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendorname"`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD CONSTRAINT "PK_9076a29059f5036db29b27761f1" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD "name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD CONSTRAINT "UQ_99e94d1f6b108e0bfde80b08ab4" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "typeid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendortypeid" integer`);
        await queryRunner.query(`ALTER TABLE "vendor_availability" ADD CONSTRAINT "FK_6037662b3522fffd18a7c7a082a" FOREIGN KEY ("vendorid") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" ADD CONSTRAINT "FK_0ccf910dd6c0df701e3efc6510b" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_429ce785051ddb983984fa64168" FOREIGN KEY ("vendortypeid") REFERENCES "vendortype"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_429ce785051ddb983984fa64168"`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" DROP CONSTRAINT "FK_0ccf910dd6c0df701e3efc6510b"`);
        await queryRunner.query(`ALTER TABLE "vendor_availability" DROP CONSTRAINT "FK_6037662b3522fffd18a7c7a082a"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "vendortypeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "typeid"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "PK_931a23f6231a57604f5a0e32780"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP CONSTRAINT "UQ_99e94d1f6b108e0bfde80b08ab4"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP CONSTRAINT "PK_9076a29059f5036db29b27761f1"`);
        await queryRunner.query(`ALTER TABLE "vendortype" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendorname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendortypeVendortypeid" integer`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "vendorid" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "vendor_pkey" PRIMARY KEY ("vendorid")`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD "vendortypename" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD CONSTRAINT "UQ_abc27a75dcb41dcf3db57f20b13" UNIQUE ("vendortypename")`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD "vendortypeid" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendortype" ADD CONSTRAINT "vendortype_pkey" PRIMARY KEY ("vendortypeid")`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" RENAME COLUMN "vendorId" TO "vendorVendorid"`);
        await queryRunner.query(`ALTER TABLE "vendor_availability" RENAME COLUMN "vendorid" TO "vendorid"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_9c3a3dc589444b68a41514b7aaf" FOREIGN KEY ("vendortypeVendortypeid") REFERENCES "vendortype"("vendortypeid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_bookings" ADD CONSTRAINT "FK_abf63abf84c9b81618421801329" FOREIGN KEY ("vendorVendorid") REFERENCES "vendor"("vendorid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_availability" ADD CONSTRAINT "FK_e1d8a3d4acc566620563cc55ca4" FOREIGN KEY ("vendorid") REFERENCES "vendor"("vendorid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
