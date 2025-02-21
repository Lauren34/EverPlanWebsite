// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
// import { Vendor } from "./Vendor";
//
// @Entity("vendoravailability")
// export class VendorAvailability {
//     @PrimaryGeneratedColumn()
//     availabilityid!: number;
//
//     @ManyToOne(() => Vendor, (vendor) => vendor.availabilities, {onDelete: "CASCADE"})
//     vendorid!: Vendor;
//
//     @Column({ type: "date" })
//     date!: string;
//
//     @Column({ default: false })
//     isbooked!: boolean;
// }
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Vendor } from "./Vendor";

@Entity("vendoravailability")
export class VendorAvailability {
  @PrimaryGeneratedColumn()
  availabilityid!: number;

  @ManyToOne(() => Vendor, (vendor) => vendor.availabilities, { onDelete: "CASCADE" })
  @JoinColumn({ name: "vendorid" })  // Explicitly setting column name
  vendorid!: Vendor;

  @Column({ type: "date" })
  date!: string;

  @Column({ default: false })
  isbooked!: boolean;
}
