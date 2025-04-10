const express = require("express");
const cors = require("cors"); // This is new
const app = express();
app.use(cors()); // This is new
require("dotenv").config();
const port = process.env.PORT;

require("./config/mongoose.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const AllMyUserRoutes = require("./routes/user.routes");

AllMyUserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
