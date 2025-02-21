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

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { VendorType } from "./VendorType";
import { VendorAvailability } from "./VendorAvailability";
import { VendorBookings } from "./VendorBookings";

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  vendorid!: number;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
  })
  vendorname!: string;

  @Column("varchar", { nullable: true })
  description?: string;

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  pricing?: number;

  @Column("varchar", { nullable: true })
  instagramlink?: string;

  @Column("varchar", { nullable: true })
  website?: string;

  @Column("varchar", { nullable: true })
  phone?: string;

  @Column("varchar", { nullable: true })
  email?: string;

  @OneToMany(() => VendorBookings, (booking) => booking.vendor, { cascade: true })
  bookings!: VendorBookings[];

  @OneToMany(() => VendorAvailability, (availability) => availability.vendorid, { cascade: true })
  availabilities!: VendorAvailability[];

  @ManyToOne(() => VendorType, (vendortype) => vendortype.vendors)
  @JoinColumn({ name: "vendortypeid" })  // Explicitly specify the new column name
  vendortype!: VendorType;
}




