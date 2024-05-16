const express = require("express")

const router = express.Router();

router.post("/login", authUser)
router.post("/register", registerUser)
router.get("/", allUser)