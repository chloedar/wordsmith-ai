import { Router } from "express";
import { getHistory } from "../services/history";

const router = Router();

router.get("/", (req, res) => {
  res.json(getHistory());
});

export default router;
