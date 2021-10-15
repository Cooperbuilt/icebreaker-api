
// importing the dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const {getIcebreakers} = require('./contentfull-api');

// defining the Express app
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// adding a simple rate limiter to avoid bots
app.use(limiter)

// adding Helmet to enhance your API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return an icebreaker
app.get("/", async (req, res) => {
  const results = await getIcebreakers(req.query.teamName);
  res.send(results)
});

// starting the server
app.listen(process.env.PORT || 80, () => {
  console.log("listening on port 3001");
});
