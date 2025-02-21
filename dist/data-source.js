"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
// Define DataSource with entities, migrations, and subscribers
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Everplan03!",
    database: "Everplan",
    logging: false,
    // Make sure entities and migrations are pointing to the right files based on environment
    entities: [__dirname + "/entities/*.ts"],
    migrations: [__dirname + "/../migrations/*.ts"],
    subscribers: [],
});
// Initialize the DataSource connection
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((error) => {
    console.error("Error during Data Source initialization:", error);
});
