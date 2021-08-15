const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// read environment variables
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
app.set("port", port);

// Database connection
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection successful");
});

// Routes
const upload = require("./routes/upload.route");
app.use("/uploadCSV", upload);

const data = require("./routes/data.route");
app.use("/data", data);

// Listening For Request
app.listen(port, function () {
  console.log(`Server up and running on port ${port}`);
});
