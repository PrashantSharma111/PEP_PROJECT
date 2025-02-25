import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  getUsersOnSidebar,
  getMessage,
  sendMessage,
} from "../controllers/message.controllers.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersOnSidebar);
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
