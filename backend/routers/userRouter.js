import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controllers/userController.js";
import { isAdmin, isPatient } from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdmin, addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdmin, getUserDetails);
router.get("/patient/me", isPatient, getUserDetails);
router.get("/admin/logout", isAdmin, logoutAdmin);
router.get("/patient/logout", isPatient, logoutPatient);
router.post("/doctor/addnew", isAdmin, addNewDoctor);

export default router;
