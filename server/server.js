const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("api/post", postRoutes)

const PORT = 5001;
app.listen(PORT, console.log(`server started on ${PORT}`));
