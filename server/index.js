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
const multer = require("multer");
const path = require("path");

dotenv.config();

try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to DB.");
} catch (err) {
  console.error(err);
}

app.use("/images", express.static(path.join(__dirname, "public/images")));

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("file uploaded successfully.");
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authroute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server has started on the port ${process.env.PORT}`);
});
