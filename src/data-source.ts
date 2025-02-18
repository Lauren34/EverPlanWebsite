import { DataSource } from "typeorm";
import { Vendor } from "./entities/Vendor";
import { VendorType } from "./entities/VendorType";
import { VendorAvailability } from "./entities/VendorAvailability";
import { VendorBookings } from "./entities/VendorBookings";

// Define DataSource with entities, migrations, and subscribers
export const AppDataSource = new DataSource({
  type: "postgres",  // your database type
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "Everplan",
  synchronize: true,
  logging: true,
  // Make sure entities and migrations are pointing to the right files based on environment
  entities: [Vendor, VendorType, VendorAvailability, VendorBookings],  // Pointing to TypeScript files during dev
  migrations: [__dirname + "/migrations/*.ts"],  // Pointing to TypeScript migrations during dev
  subscribers: [],
});

// Initialize the DataSource connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
