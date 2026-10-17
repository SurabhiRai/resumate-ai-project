
import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  enhanceJobDescription,
  enhanceProfessionalSummary,
  uploadResume,
} from "../controllers/aiController.js";

const aiRouter = express.Router();

// Temporary diagnostic route — remove after testing
aiRouter.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI route is working",
  });
});

// Enhance professional summary
aiRouter.post(
  "/enhance-pro-sum",
  protect,
  enhanceProfessionalSummary
);

// Enhance job description
aiRouter.post(
  "/enhance-job-desc",
  protect,
  enhanceJobDescription
);

// Upload and process an existing resume
aiRouter.post(
  "/upload-resume",
  protect,
  uploadResume
);

export default aiRouter;
