// import { DataSource } from "typeorm";
//
// // Define DataSource with entities, migrations, and subscribers
// export const AppDataSource = new DataSource({
//   type: "postgres",  // your database type
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "Everplan03!",
//   database: "Everplan",
//   logging: false,
//   // Make sure entities and migrations are pointing to the right files based on environment
//   entities: ["/src/entities/*.ts"],  // Pointing to TypeScript files during dev
//   migrations: ["/../migrations/*.ts"],  // Pointing to TypeScript migrations during dev
//   subscribers: [],
// });
//
// // Initialize the DataSource connection
// AppDataSource.initialize()
//   .then(() => {
//     console.log("Data Source has been initialized!");
//   })
//   .catch((error) => {
//     console.error("Error during Data Source initialization:", error);
//   });

import { DataSource } from "typeorm";
import { Vendor } from "./entities/Vendor";
import { VendorType } from "./entities/VendorType";
import { VendorAvailability } from "./entities/VendorAvailability";
import { VendorBookings } from "./entities/VendorBookings";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Everplan03!",
  database: "Everplan",
  logging: false,
  entities: [Vendor, VendorType, VendorAvailability, VendorBookings], // Directly import entities
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
