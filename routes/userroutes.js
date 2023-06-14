import express from "express";
import { addproduct, register } from "../controllers/userControllers.js";
import { CheckPinRole } from "../middlewares/authmiddleware.js";

const router=express.Router();

router.post('/register',register);
router.post('/addproduct',CheckPinRole,addproduct)

export default router;