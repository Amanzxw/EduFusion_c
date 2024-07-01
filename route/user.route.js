import express from "express";
import { signup, login } from "../controller/user.controller.js";

const router = express.Router();

// Define the route for signup
router.post("/signup", signup);

// Define the route for login
router.post("/login", login);

export default router;
