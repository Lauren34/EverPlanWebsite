"use strict";
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
exports.VendorBookings = void 0;
const typeorm_1 = require("typeorm");
const Vendor_1 = require("./Vendor");
const VendorAvailability_1 = require("./VendorAvailability");
let VendorBookings = class VendorBookings {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VendorBookings.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vendor_1.Vendor, (vendor) => vendor.bookings, { onDelete: "CASCADE" }),
    __metadata("design:type", Vendor_1.Vendor)
], VendorBookings.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => VendorAvailability_1.VendorAvailability, { onDelete: "CASCADE" }),
    __metadata("design:type", VendorAvailability_1.VendorAvailability)
], VendorBookings.prototype, "availability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], VendorBookings.prototype, "customerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], VendorBookings.prototype, "eventDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 10,
        default: "Pending",
    }),
    __metadata("design:type", String)
], VendorBookings.prototype, "bookingStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], VendorBookings.prototype, "notes", void 0);
VendorBookings = __decorate([
    (0, typeorm_1.Entity)()
], VendorBookings);
exports.VendorBookings = VendorBookings;
