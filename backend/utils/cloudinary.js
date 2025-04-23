import pkg from "cloudinary"; // Import the entire CommonJS module
import dotenv from "dotenv";

dotenv.config();

const { v2: cloudinary } = pkg; // Destructure the `v2` property, which contains the Cloudinary API

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary; // Export the configured instance
