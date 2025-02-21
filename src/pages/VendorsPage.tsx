import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VendorsPage: React.FC = () => {
  const [vendorData, setVendorData] = useState({
    vendorName: "",
    vendorType: "",
    description: "",
    pricing: "",
    instagramLink: "",
    website: "",
    phone: "",
    email: "",
    availableDates: [] as string[], // Store dates as strings
  });

  const [editingVendorId, setEditingVendorId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    // If editingVendorId is set, fetch the vendor data to pre-fill the form
    if (editingVendorId) {
      const fetchVendorData = async () => {
        const response = await fetch(`http://localhost:5000/vendors/${editingVendorId}`);
        if (response.ok) {
          const vendor = await response.json();
          setVendorData({
            vendorName: vendor.vendorName,
            vendorType: vendor.vendortype.vendortypename, // Assuming vendorType is an object with 'name'
            description: vendor.description,
            pricing: vendor.pricing,
            instagramLink: vendor.instagramLink,
            website: vendor.website,
            phone: vendor.phone,
            email: vendor.email,
            availableDates: vendor.availableDates,
          });
        } else {
          setError("Error fetching vendor data.");
        }
      };
      fetchVendorData();
    }
  }, [editingVendorId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setVendorData({ ...vendorData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date | null) => {
  if (!date) return;

  setVendorData((prevData) => {
    const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    const updatedDates = prevData.availableDates.includes(formattedDate)
      ? prevData.availableDates.filter((d) => d !== formattedDate) // Remove if already selected
      : [...prevData.availableDates, formattedDate]; // Add new date

    return { ...prevData, availableDates: updatedDates };
  });
};

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSuccessMessage(null);

  // Log the availableDates to ensure it's populated correctly
  console.log("Available Dates:", vendorData.availableDates);

  try {
    const url = editingVendorId
      ? `http://localhost:5000/vendors/${editingVendorId}` // PUT for updating vendor
      : "http://localhost:5000/vendors"; // POST for new vendor

    const method = editingVendorId ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vendorData),
    });

    if (response.ok) {
      setSuccessMessage(editingVendorId ? "Vendor updated successfully!" : "Vendor added successfully!");
      setVendorData({
        vendorName: "",
        vendorType: "",
        description: "",
        pricing: "",
        instagramLink: "",
        website: "",
        phone: "",
        email: "",
        availableDates: [], // Reset after submission
      });
      setEditingVendorId(null);
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Operation failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    setError("An error occurred.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <h2>{editingVendorId ? "Update Vendor" : "Vendor Registration"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="vendorName"
          placeholder="Vendor Name"
          value={vendorData.vendorName}
          onChange={handleChange}
          required
        />

        <select
          name="vendorType"
          value={vendorData.vendorType}
          onChange={handleChange}
          required
        >
          <option value="">Select Vendor Type</option>
          <option value="Venue">Venue</option>
          <option value="Caterer">Caterer</option>
          <option value="Hair">Hair</option>
          <option value="Makeup">Makeup</option>
          <option value="Photography">Photography</option>
          <option value="Music">Music</option>
          <option value="Florist">Florist</option>
          <option value="Dresser">Dresser</option>
          <option value="Planner">Planner</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={vendorData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pricing"
          placeholder="Pricing"
          value={vendorData.pricing}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instagramLink"
          placeholder="Instagram Link"
          value={vendorData.instagramLink}
          onChange={handleChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={vendorData.website}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={vendorData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={vendorData.email}
          onChange={handleChange}
          required
        />

        <label>Select Available Dates:</label>
        <DatePicker
          selected={null} // Avoid pre-selecting any date
          onChange={handleDateChange}
          isClearable
          placeholderText="Select Dates"
          dateFormat="MM/dd/yyyy"
        />

        <div>
          <h4>Selected Dates:</h4>
          <ul>
            {vendorData.availableDates.map((date) => (
              <li key={date}>{date}</li>
            ))}
          </ul>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : editingVendorId ? "Update Vendor" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default VendorsPage;


// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//
// const VendorsPage: React.FC = () => {
//   const [vendorData, setVendorData] = useState({
//     vendorName: "",
//     vendorType: "",
//     description: "",
//     pricing: "",
//     instagramLink: "",
//     website: "",
//     phone: "",
//     email: "",
//     availableDates: [] as string[], // Store dates as strings
//   });
//
//   const [editingVendorId, setEditingVendorId] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//
//   useEffect(() => {
//     // If editingVendorId is set, fetch the vendor data to pre-fill the form
//     if (editingVendorId) {
//       const fetchVendorData = async () => {
//         const response = await fetch(`http://localhost:5000/vendors/${editingVendorId}`);
//         if (response.ok) {
//           const vendor = await response.json();
//           setVendorData({
//             vendorName: vendor.vendorName,
//             vendorType: vendor.vendorType.name, // Assuming vendorType is an object with 'name'
//             description: vendor.description,
//             pricing: vendor.pricing,
//             instagramLink: vendor.instagramLink,
//             website: vendor.website,
//             phone: vendor.phone,
//             email: vendor.email,
//             availableDates: vendor.availableDates,
//           });
//         } else {
//           setError("Error fetching vendor data.");
//         }
//       };
//       fetchVendorData();
//     }
//   }, [editingVendorId]);
//
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setVendorData({ ...vendorData, [e.target.name]: e.target.value });
//   };
//
//   const handleDateChange = (date: Date | null) => {
//     if (!date) return;
//
//     setVendorData((prevData) => {
//       const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
//       const updatedDates = prevData.availableDates.includes(formattedDate)
//         ? prevData.availableDates.filter((d) => d !== formattedDate) // Remove if already selected
//         : [...prevData.availableDates, formattedDate]; // Add new date
//
//       return { ...prevData, availableDates: updatedDates };
//     });
//   };
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccessMessage(null);
//
//     try {
//       const url = editingVendorId
//         ? `http://localhost:5000/vendors/${editingVendorId}` // PUT for updating vendor
//         : "http://localhost:5000/vendors"; // POST for new vendor
//
//       const method = editingVendorId ? "PUT" : "POST";
//
//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(vendorData),
//       });
//
//       if (response.ok) {
//         setSuccessMessage(editingVendorId ? "Vendor updated successfully!" : "Vendor added successfully!");
//         setVendorData({
//           vendorName: "",
//           vendorType: "",
//           description: "",
//           pricing: "",
//           instagramLink: "",
//           website: "",
//           phone: "",
//           email: "",
//           availableDates: [],
//         });
//         setEditingVendorId(null);
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || "Operation failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <div>
//       <h2>{editingVendorId ? "Update Vendor" : "Vendor Registration"}</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="vendorName"
//           placeholder="Vendor Name"
//           value={vendorData.vendorName}
//           onChange={handleChange}
//           required
//         />
//
//         <select
//           name="vendorType"
//           value={vendorData.vendorType}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Vendor Type</option>
//           <option value="Venue">Venue</option>
//           <option value="Caterer">Caterer</option>
//           <option value="Hair">Hair</option>
//           <option value="Makeup">Makeup</option>
//           <option value="Photography">Photography</option>
//           <option value="Music">Music</option>
//           <option value="Florist">Florist</option>
//           <option value="Dresser">Dresser</option>
//           <option value="Planner">Planner</option>
//         </select>
//
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={vendorData.description}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="pricing"
//           placeholder="Pricing"
//           value={vendorData.pricing}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="instagramLink"
//           placeholder="Instagram Link"
//           value={vendorData.instagramLink}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="website"
//           placeholder="Website"
//           value={vendorData.website}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={vendorData.phone}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={vendorData.email}
//           onChange={handleChange}
//           required
//         />
//
//         <label>Select Available Dates:</label>
//         <DatePicker
//           selected={null} // Avoid pre-selecting any date
//           onChange={handleDateChange}
//           isClearable
//           placeholderText="Select Dates"
//           dateFormat="MM/dd/yyyy"
//         />
//
//         <div>
//           <h4>Selected Dates:</h4>
//           <ul>
//             {vendorData.availableDates.map((date) => (
//               <li key={date}>{date}</li>
//             ))}
//           </ul>
//         </div>
//
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : editingVendorId ? "Update Vendor" : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };
//
// export default VendorsPage;
//

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//
// const VendorsPage: React.FC = () => {
//   const [vendorData, setVendorData] = useState({
//     vendorName: "",
//     vendorType: "",
//     description: "",
//     pricing: "",
//     instagramLink: "",
//     website: "",
//     phone: "",
//     email: "",
//     availableDates: [] as string[], // Store dates as strings
//   });
//
//   const [editingVendorId, setEditingVendorId] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setVendorData({ ...vendorData, [e.target.name]: e.target.value });
//   };
//
//   const handleDateChange = (date: Date | null) => {
//     if (!date) return;
//
//     setVendorData((prevData) => {
//       const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
//       const updatedDates = prevData.availableDates.includes(formattedDate)
//         ? prevData.availableDates.filter((d) => d !== formattedDate) // Remove if already selected
//         : [...prevData.availableDates, formattedDate]; // Add new date
//
//       return { ...prevData, availableDates: updatedDates };
//     });
//   };
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccessMessage(null);
//
//     try {
//       const url = editingVendorId
//         ? `http://localhost:5000/vendors/${editingVendorId}` // PUT for updating vendor
//         : "http://localhost:5000/vendors"; // POST for new vendor
//
//       const method = editingVendorId ? "PUT" : "POST";
//
//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(vendorData),
//       });
//
//       if (response.ok) {
//         setSuccessMessage(editingVendorId ? "Vendor updated successfully!" : "Vendor added successfully!");
//         setVendorData({
//           vendorName: "",
//           vendorType: "",
//           description: "",
//           pricing: "",
//           instagramLink: "",
//           website: "",
//           phone: "",
//           email: "",
//           availableDates: [],
//         });
//         setEditingVendorId(null);
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || "Operation failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <div>
//       <h2>{editingVendorId ? "Update Vendor" : "Vendor Registration"}</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="vendorName" placeholder="Vendor Name" value={vendorData.vendorName} onChange={handleChange} required />
//
//         <select name="vendorType" value={vendorData.vendorType} onChange={handleChange} required>
//           <option value="">Select Vendor Type</option>
//           <option value="Venue">Venue</option>
//           <option value="Caterer">Caterer</option>
//           <option value="Hair">Hair</option>
//           <option value="Makeup">Makeup</option>
//           <option value="Photography">Photography</option>
//           <option value="Music">Music</option>
//           <option value="Florist">Florist</option>
//           <option value="Dresser">Dresser</option>
//           <option value="Planner">Planner</option>
//         </select>
//
//         <textarea name="description" placeholder="Description" value={vendorData.description} onChange={handleChange} />
//         <input type="text" name="pricing" placeholder="Pricing" value={vendorData.pricing} onChange={handleChange} />
//         <input type="text" name="instagramLink" placeholder="Instagram Link" value={vendorData.instagramLink} onChange={handleChange} />
//         <input type="text" name="website" placeholder="Website" value={vendorData.website} onChange={handleChange} />
//         <input type="text" name="phone" placeholder="Phone" value={vendorData.phone} onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" value={vendorData.email} onChange={handleChange} required />
//
//         <label>Select Available Dates:</label>
//         <DatePicker
//           selected={null} // Avoid pre-selecting any date
//           onChange={handleDateChange}
//           isClearable
//           placeholderText="Select Dates"
//           dateFormat="MM/dd/yyyy"
//         />
//
//         <div>
//           <h4>Selected Dates:</h4>
//           <ul>
//             {vendorData.availableDates.map((date) => (
//               <li key={date}>{date}</li>
//             ))}
//           </ul>
//         </div>
//
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : editingVendorId ? "Update Vendor" : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };
//
// export default VendorsPage;
//

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // Import the DatePicker styles
//
// const VendorsPage: React.FC = () => {
//   const [vendorData, setVendorData] = useState({
//     vendorName: "",
//     vendorType: "",
//     description: "",
//     pricing: "",
//     instagramLink: "",
//     website: "",
//     phone: "",
//     email: "",
//     availableDates: [], // Initialize with an empty array
//   });
//
//   const [editingVendorId, setEditingVendorId] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setVendorData({ ...vendorData, [e.target.name]: e.target.value });
//   };
//
//   const handleDateChange = (dates: Date[]) => {
//     setVendorData((prevData) => ({
//       ...prevData,
//       availableDates: dates || [],
//     }));
//   };
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccessMessage(null);
//
//     try {
//       const url = editingVendorId
//         ? `http://localhost:5000/${editingVendorId}` // PUT request when editing
//         : "http://localhost:5000/"; // POST request when adding new vendor
//
//       const method = editingVendorId ? "PUT" : "POST";
//
//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(vendorData),
//       });
//
//       if (response.ok) {
//         setSuccessMessage(editingVendorId ? "Vendor updated successfully!" : "Vendor added successfully!");
//         setVendorData({
//           vendorName: "",
//           vendorType: "",
//           description: "",
//           pricing: "",
//           instagramLink: "",
//           website: "",
//           phone: "",
//           email: "",
//           availableDates: [],
//         });
//         setEditingVendorId(null); // Reset editing mode
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || "Operation failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <div>
//       <h2>{editingVendorId ? "Update Vendor" : "Vendor Registration"}</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="vendorName"
//           placeholder="Vendor Name"
//           value={vendorData.vendorName}
//           onChange={handleChange}
//           required
//         />
//         <select
//           name="vendorType"
//           value={vendorData.vendorType}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Vendor Type</option>
//           <option value="Venue">Venue</option>
//           <option value="Caterer">Caterer</option>
//           <option value="Hair">Hair</option>
//           <option value="Makeup">Makeup</option>
//           <option value="Photography">Photography</option>
//           <option value="Music">Music</option>
//           <option value="Florist">Florist</option>
//           <option value="Dresser">Dresser</option>
//           <option value="Planner">Planner</option>
//         </select>
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={vendorData.description}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="pricing"
//           placeholder="Pricing"
//           value={vendorData.pricing}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="instagramLink"
//           placeholder="Instagram Link"
//           value={vendorData.instagramLink}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="website"
//           placeholder="Website"
//           value={vendorData.website}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={vendorData.phone}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={vendorData.email}
//           onChange={handleChange}
//           required
//         />
//         <label>Select Available Dates:</label>
//         <DatePicker
//           selected={vendorData.availableDates[0] || null} // Only show the first date as selected
//           onChange={handleDateChange}
//           isClearable
//           multiple
//           placeholderText="Select Dates"
//           dateFormat="MM/dd/yyyy" // Display the dates in MM/DD/YYYY format
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : editingVendorId ? "Update Vendor" : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };
//
// export default VendorsPage;


// import React, { useState } from "react";
//
// const VendorsPage: React.FC = () => {
//   const [vendorData, setVendorData] = useState({
//     vendorName: "",
//     vendorType: "",
//     description: "",
//     pricing: "",
//     instagramLink: "",
//     website: "",
//     phone: "",
//     email: "",
//   });
//
//   const [editingVendorId, setEditingVendorId] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setVendorData({ ...vendorData, [e.target.name]: e.target.value });
//   };
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccessMessage(null);
//
//     try {
//       const url = editingVendorId
//         ? `http://localhost:5000/vendors/${editingVendorId}` // PUT request when editing
//         : "http://localhost:5000/vendors"; // POST request when adding new vendor
//
//       const method = editingVendorId ? "PUT" : "POST";
//
//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(vendorData),
//       });
//
//       if (response.ok) {
//         setSuccessMessage(editingVendorId ? "Vendor updated successfully!" : "Vendor added successfully!");
//         setVendorData({
//           vendorName: "",
//           vendorType: "",
//           description: "",
//           pricing: "",
//           instagramLink: "",
//           website: "",
//           phone: "",
//           email: "",
//         });
//         setEditingVendorId(null); // Reset editing mode
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || "Operation failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <div>
//       <h2>{editingVendorId ? "Update Vendor" : "Vendor Registration"}</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="vendorName" placeholder="Vendor Name" value={vendorData.vendorName} onChange={handleChange} required />
//         <select name="vendorType" value={vendorData.vendorType} onChange={handleChange} required>
//           <option value="">Select Vendor Type</option>
//           <option value="Venue">Venue</option>
//           <option value="Caterer">Caterer</option>
//           <option value="Hair">Hair</option>
//           <option value="Makeup">Makeup</option>
//           <option value="Photography">Photography</option>
//           <option value="Music">Music</option>
//           <option value="Florist">Florist</option>
//           <option value="Dresser">Dresser</option>
//           <option value="Planner">Planner</option>
//         </select>
//         <textarea name="description" placeholder="Description" value={vendorData.description} onChange={handleChange} />
//         <input type="text" name="pricing" placeholder="Pricing" value={vendorData.pricing} onChange={handleChange} />
//         <input type="text" name="instagramLink" placeholder="Instagram Link" value={vendorData.instagramLink} onChange={handleChange} />
//         <input type="text" name="website" placeholder="Website" value={vendorData.website} onChange={handleChange} />
//         <input type="text" name="phone" placeholder="Phone" value={vendorData.phone} onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" value={vendorData.email} onChange={handleChange} required />
//
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : editingVendorId ? "Update Vendor" : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };
//
// export default VendorsPage;
