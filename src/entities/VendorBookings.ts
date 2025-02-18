import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Vendor } from "./Vendor";
import { VendorAvailability } from "./VendorAvailability";

@Entity()
export class VendorBookings {
    @PrimaryGeneratedColumn()
    bookingId!: number;

    @ManyToOne(() => Vendor, (vendor) => vendor.bookings, { onDelete: "CASCADE" })
    vendor!: Vendor;

    @ManyToOne(() => VendorAvailability, { onDelete: "CASCADE" })
    availability!: VendorAvailability;

    @Column({ type: "varchar", length: 255 })
    customerName!: string;

    @Column({ type: "date" })
    eventDate!: string;

    @Column({
        type: "varchar",
        length: 10,
        default: "Pending",
    })
    bookingStatus!: "Pending" | "Confirmed" | "Cancelled";

    @Column({ type: "text", nullable: true })
    notes!: string;
}
