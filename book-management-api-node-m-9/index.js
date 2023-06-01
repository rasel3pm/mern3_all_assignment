// Import the `dotenv` module to load environment variables from a file.
const dotenv = require("dotenv");
// Import the `colors` module to add color to console output.
require("colors");
// Load environment variables from a file called `.env`.
dotenv.config();
// Get the `app` object from the `./app` module.
const app = require("./app");
// Get the port number from the environment variable `PORT` or use the default value of 8080.
const port = process.env.PORT || 8080;
// Listen on the specified port and call the callback function when the server is ready.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgGreen);
});
