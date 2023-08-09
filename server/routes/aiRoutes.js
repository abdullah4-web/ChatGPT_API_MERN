import express from "express";
import {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  ImageController,
} from "../controllers/AiController.js";

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post('/chatbot', chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/imagegenerator", ImageController);

export default router;
