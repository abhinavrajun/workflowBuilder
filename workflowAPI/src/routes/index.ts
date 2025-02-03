
import { Router } from "express";
import exampleController from "../controllers/example.controller";

const router = Router();

router.get("/", (req, res) => {
	res.send("API is working!");
});

router.get("/example", exampleController.getExampleData);

export default router;
