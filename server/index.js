const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectToDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectToDB();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.use("api/user", userRoutes);
app.use("api/post", postRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`PORT running on ${port}`));
