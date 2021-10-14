
// importing the dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const {getIcebreakers} = require('./contentfull-api');

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/", async (req, res) => {
  // This API call will request a space with the specified ID
  const results = await getIcebreakers();
  res.send(results)
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
