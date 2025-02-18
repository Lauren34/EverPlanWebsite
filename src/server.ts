import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { Vendor } from "./entities/Vendor";
import { VendorAvailability } from "./entities/VendorAvailability";
import { VendorType } from "./entities/VendorType";

const app = express();
app.use(cors());
app.use(express.json());

// Get all vendors
app.get('/api/available-venues', async (req, res) => {
    const { date } = req.query;

    try {
        // Query for vendor availability based on the selected date
        const availableVenues = await AppDataSource
            .getRepository(VendorAvailability)
            .createQueryBuilder("va")
            .leftJoinAndSelect("va.vendoridVendorid", "vendor") // Join with vendor table using correct field name 'vendorid'
            .leftJoinAndSelect("vendor.vendortype", "vendortype") // Join vendor type for subtitle
            .where("va.date = :date", { date })
            .andWhere("va.isBooked = false") // Only show available vendors
            .getMany();

        // Map available vendor details to the format you need
        const venues = availableVenues.map((availability) => ({
            title: availability.vendorid.vendorname,  // Correct field to display the vendor's name
            subtitle: availability.vendorid.vendortype.vendortypename, // Correct reference to vendor type
            description: availability.vendorid.description || "No description available", // Default description
            vendorId: availability.vendorid.vendorid, // Correct reference to vendor ID
        }));

        res.json(venues);
    } catch (error) {
        console.error("Error fetching available venues:", error);
        res.status(500).json({ message: "Error fetching venues" });
    }
});

// Post endpoint for creating vendors
app.post("/vendors", async (req, res) => {
  try {
    // Log the request body
    console.log("Request body:", req.body);

    // Get the vendor data from the request body
    const {
      vendorName,
      vendortype,  // Expecting vendorType as string like 'Venue'
      description,
      pricing,
      instagramlink,
      website,
      phone,
      email,
      availableDates, // New field for available dates
    } = req.body;

    // Check if vendorType exists by name
    const vendorTypeRepository = AppDataSource.getRepository(VendorType);
    const vendorTypeEntity = await vendorTypeRepository.findOne({ where: { vendortypename: vendortype } });

    if (!vendorTypeEntity) {
      return res.status(400).json({ message: "Vendor Type not found" });
    }

    // Create a new Vendor instance
    const newVendor = new Vendor();
    newVendor.vendorname = vendorName;
    newVendor.vendortype = vendorTypeEntity;  // Use the found VendorType entity
    newVendor.description = description;
    newVendor.pricing = pricing;
    newVendor.instagramlink = instagramlink;
    newVendor.website = website;
    newVendor.phone = phone;
    newVendor.email = email;

    // Save the new vendor to the database
    const vendorRepository = AppDataSource.getRepository(Vendor);
    const savedVendor = await vendorRepository.save(newVendor);

    // Save the availability dates if provided
    if (availableDates && availableDates.length > 0) {
      const vendorAvailabilityRepository = AppDataSource.getRepository(VendorAvailability);

      const availabilityPromises = availableDates.map(async (date: string) => {
        const availability = new VendorAvailability();
        availability.vendorid = savedVendor; // Associate with the newly saved vendor
        availability.date = date; // Store date as string or Date object
        console.log("Saving availability:", availability); // Log availability data being saved
        await vendorAvailabilityRepository.save(availability); // Save the availability
      });

      // Wait for all availability records to be saved
      await Promise.all(availabilityPromises);
    }

    // Respond with the created vendor and success message
    res.status(201).json({ message: "Vendor created successfully", vendor: savedVendor });
  } catch (error: unknown) {
    console.error("Error adding vendor:", error instanceof Error ? error.stack : error);
    res.status(500).json({ message: "Error adding vendor", error: error instanceof Error ? error.message : "Unknown error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});


//
// import express from "express";
// import cors from "cors";
// import { AppDataSource } from "./data-source";
// import { Vendor } from "./entities/Vendor";
// import { VendorAvailability } from "./entities/VendorAvailability";
// import { VendorType } from "./entities/VendorType";
//
// const app = express();
// app.use(cors());
// app.use(express.json());
//
// // Get all vendors
//
// app.get('/api/available-venues', async (req, res) => {
//     const {date} = req.query;
//
//     try {
//         // Query for vendor availability based on the selected date
//         const availableVenues = await AppDataSource
//             .getRepository(VendorAvailability)
//             .createQueryBuilder("va")
//             .leftJoinAndSelect("va.vendor", "vendor")
//             .where("va.date = :date", {date})
//             .andWhere("va.isBooked = false") // Only show available vendors
//             .getMany();
//
//         // Map available vendor details to the format you need
//         const venues = availableVenues.map((availability) => ({
//             title: availability.vendorid,
//             subtitle: availability.vendorid, // Or use any other relevant field
//             description: "Some venue description here", // You can add a description field in the database if necessary
//             vendorId: availability.vendorid,
//         }));
//
//         res.json(venues);
//     } catch (error) {
//         console.error("Error fetching available venues:", error);
//         res.status(500).json({message: "Error fetching venues"});
//     }
// });
//
// app.post("/vendors", async (req, res) => {
//   try {
//     // Log the request body
//     console.log("Request body:", req.body);
//
//     // Get the vendor data from the request body
//     const {
//       vendorName,
//       vendortype,  // Expecting vendorType as string like 'Venue'
//       description,
//       pricing,
//       instagramlink,
//       website,
//       phone,
//       email,
//       availableDates, // New field for available dates
//     } = req.body;
//
//     // Check if vendorType exists by name
//     const vendorTypeRepository = AppDataSource.getRepository(VendorType);
//     const vendorTypeEntity = await vendorTypeRepository.findOne({ where: { vendortypename: vendortype } });
//
//     if (!vendorTypeEntity) {
//       return res.status(400).json({ message: "Vendor Type not found" });
//     }
//
//     // Create a new Vendor instance
//     const newVendor = new Vendor();
//     newVendor.vendorname = vendorName;
//     newVendor.vendortype = vendorTypeEntity;  // Use the found VendorType entity
//     newVendor.description = description;
//     newVendor.pricing = pricing;
//     newVendor.instagramlink = instagramlink;
//     newVendor.website = website;
//     newVendor.phone = phone;
//     newVendor.email = email;
//
//     // Save the new vendor to the database
//     const vendorRepository = AppDataSource.getRepository(Vendor);
//     const savedVendor = await vendorRepository.save(newVendor);
//
//     if (availableDates && availableDates.length > 0) {
//   const vendorAvailabilityRepository = AppDataSource.getRepository(VendorAvailability);
//
//   const availabilityPromises = availableDates.map(async (date: string) => {
//     const availability = new VendorAvailability();
//     availability.vendorid = savedVendor; // Associate with the newly saved vendor
//     availability.date = date; // Store date as string or Date object
//     console.log("Saving availability:", availability); // Log availability data being saved
//     await vendorAvailabilityRepository.save(availability); // Save the availability
//   });
//
//   // Wait for all availability records to be saved
//   await Promise.all(availabilityPromises);
// }
//
//
//     // Respond with the created vendor and success message
//     res.status(201).json({ message: "Vendor created successfully", vendor: savedVendor });
//   } catch (error: unknown) {
//     console.error("Error adding vendor:", error instanceof Error ? error.stack : error);
//     res.status(500).json({ message: "Error adding vendor", error: error instanceof Error ? error.message : "Unknown error" });
//   }
// });
//
// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Backend running on port ${PORT}`);
// });
