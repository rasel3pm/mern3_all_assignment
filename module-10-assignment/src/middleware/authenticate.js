/**
 * Create an Express.js middleware function called authenticate that verifies the JWT token in the request headers using the
 * 'jsonwebtoken' library. If the token is valid, it should call the next middleware function. Otherwise,
 *  it should return a 401 Unauthorized error.
 */
const jwt = require("jsonwebtoken");
const authenticate = async (req, res, next) => {
  // The authorization header is a Bearer token that contains the user's JWT token.
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    //docoded token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = decoded;
    req.username = username;
    req.userId = userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Unauthorized" });
  }
};
module.exports = authenticate;
