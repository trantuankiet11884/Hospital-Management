import express from "express";
import {
  deleteAppointmentStatus,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";
import { isAdmin, isPatient } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatient, postAppointment);
router.get("/getall", isAdmin, getAllAppointments);
router.put("/update/:id", isAdmin, updateAppointmentStatus);
router.delete("/delete/:id", isAdmin, deleteAppointmentStatus);

export default router;
