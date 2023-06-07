const jwt = require("jsonwebtoken");
const generateToken = (userId, secret) => {
  // Create a JSON object with the user ID and expiration time
  const claims = {
    userId,
    expires: new Date().getTime() + 1000 * 60 * 60 * 24, // 1 day
  };
  // Sign the claims with the secret key
  const token = jwt.sign(claims, secret);
  // Return the token
  return token;
};

module.exports = generateToken;
