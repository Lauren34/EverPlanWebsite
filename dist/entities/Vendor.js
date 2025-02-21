"use strict";
// import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
// import { VendorAvailability } from "./VendorAvailability";
// import { VendorBookings } from "./VendorBookings";
// import { VendorType } from "./VendorType";
//
// @Entity()
// export class Vendor {
//   @PrimaryGeneratedColumn()
//   vendorId!: number;
//
//   @Column()
//   vendorName!: string;
//
//   @ManyToOne(() => VendorType)
//   vendorType!: VendorType;
//
//   @Column()
//   description!: string;
//
//   @Column()
//   pricing!: string;
//
//   @Column()
//   instagramLink!: string;
//
//   @Column()
//   website!: string;
//
//   @Column()
//   phone!: string;
//
//   @Column()
//   email!: string;
//
//   // Fix: Add One-to-Many relation for availability
//   @OneToMany(() => VendorAvailability, (availability) => availability.vendor)
//   availabilities!: VendorAvailability[];
//
//   // Fix: Add One-to-Many relation for bookings
//   @OneToMany(() => VendorBookings, (booking) => booking.vendor)
//   bookings!: VendorBookings[];
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendor = void 0;
// import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
// import { VendorType } from "./VendorType";
// import { VendorAvailability } from "./VendorAvailability";
// import { VendorBookings } from "./VendorBookings";
//
// @Entity()
// export class Vendor {
//   @PrimaryGeneratedColumn()
//   vendorid!: number;
//
//   @Column()
//   vendorname!: string;
//
//   @ManyToOne(() => VendorType, (vendorType) => vendorType.vendors)
//   vendortype!: VendorType;
//
//   @Column({ nullable: true })
//   description?: string;
//
//   @Column({ nullable: true })
//   pricing?: string;
//
//   @Column({ nullable: true })
//   instagramlink?: string;
//
//   @Column({ nullable: true })
//   website?: string;
//
//   @Column({ nullable: true })
//   phone?: string;
//
//   @Column({ nullable: true })
//   email?: string;
//
//   // Fix: Add relationship to VendorAvailability
//   @OneToMany(() => VendorAvailability, (availability) => availability.vendorid, { cascade: true })
//   availabilities!: VendorAvailability[];
//
//
//   // Fix: Add relationship to VendorBookings
//   @OneToMany(() => VendorBookings, (booking) => booking.vendor, { cascade: true })
//   bookings!: VendorBookings[];
// }
const typeorm_1 = require("typeorm");
const VendorType_1 = require("./VendorType");
const VendorAvailability_1 = require("./VendorAvailability");
const VendorBookings_1 = require("./VendorBookings");
let Vendor = class Vendor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vendor.prototype, "vendorid", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 50,
        unique: true,
    }),
    __metadata("design:type", String)
], Vendor.prototype, "vendorname", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Vendor.prototype, "pricing", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "instagramlink", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => VendorBookings_1.VendorBookings, (booking) => booking.vendor, { cascade: true }),
    __metadata("design:type", Array)
], Vendor.prototype, "bookings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => VendorAvailability_1.VendorAvailability, (availability) => availability.vendorid, { cascade: true }),
    __metadata("design:type", Array)
], Vendor.prototype, "availabilities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => VendorType_1.VendorType, (vendortype) => vendortype.vendors),
    (0, typeorm_1.JoinColumn)({ name: "vendortypeid" }) // Explicitly specify the new column name
    ,
    __metadata("design:type", VendorType_1.VendorType)
], Vendor.prototype, "vendortype", void 0);
Vendor = __decorate([
    (0, typeorm_1.Entity)()
], Vendor);
exports.Vendor = Vendor;
