import express from "express";
import { registration, login, logout } from "../controller/authControle.js";

const authRoutes = express.Router();

authRoutes.post("/registration", registration);
authRoutes.post("/login", login);
authRoutes.get("/logout", logout);

export default authRoutes;
