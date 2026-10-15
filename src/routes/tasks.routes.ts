import { Router, type RequestHandler } from "express";

const router = Router();

const getid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get task by ID",
    status: "not_implemented",
  });
};
router.get("/:id", getid);

const putid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Update task",
    status: "not_implemented",
  });
};
router.put("/:id", putid);

const deleteid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Delete task",
    status: "not_implemented",
  });
};
router.delete("/:id", deleteid);

export { router as tasksRouter };
