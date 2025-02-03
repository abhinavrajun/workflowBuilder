
import { Request, Response } from "express";

const getExampleData = (req: Request, res: Response) => {
	res.json({ message: "Hello from the API!" });
};

export default { getExampleData };
