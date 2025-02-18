import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Vendor } from "./Vendor";

@Entity("vendortype")  // Explicitly specify the table name as lowercase
export class VendorType {
  @PrimaryGeneratedColumn()
  vendortypeid!: number;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
  })
  vendortypename!: string;

  @OneToMany(() => Vendor, (vendor) => vendor.vendortype)
  vendors!: Vendor[];
}

