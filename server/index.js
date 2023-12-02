const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/users");
const authroute = require("./routes/auth");
const postRoute = require("./routes/posts");
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
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authroute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server has started on the port ${process.env.PORT}`);
});
