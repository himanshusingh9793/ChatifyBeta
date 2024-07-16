import express from "express";
import {
  allUsers,
  login,
  logout,
  signup,
}
  from "../Controller/User.controller.js";
import secureRoute from "../middleware/secureRoute.js";
// import secureRoute from "../middleware/secureRoute.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers",secureRoute, allUsers);

export default router;