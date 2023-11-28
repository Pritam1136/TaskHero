const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authroute = require("./routes/auth");
const app = express();

dotenv.config();

try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to DB.");
} catch (err) {
  console.error(err);
}

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authroute);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(process.env.PORT, () => {
  console.log(`Server has started on the port ${process.env.PORT}`);
});
