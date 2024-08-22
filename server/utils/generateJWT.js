import crypto from "crypto";

// Function to generate a secure JWT secret key
const generateJwtSecret = () => {
  return crypto.randomBytes(64).toString("hex");
};

// usage
const jwtSecret = generateJwtSecret();
console.log(`Generated JWT Secret: ${jwtSecret}`);
