import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Vendor } from "./Vendor";

@Entity()
export class VendorAvailability {
    @PrimaryGeneratedColumn()
    availabilityid!: number;

    @ManyToOne(() => Vendor, (vendor) => vendor.availabilities, {onDelete: "CASCADE"})
    vendorid!: Vendor;

    @Column({ type: "date" })
    date!: string;

    @Column({ default: false })
    isBooked!: boolean;
}
