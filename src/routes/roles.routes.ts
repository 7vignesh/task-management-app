import { Router, type RequestHandler } from "express";

const router = Router();

const get: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List all roles",
    status: "not_implemented",
  });
};
router.get("/", get);

const post: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Create a new role",
    status: "not_implemented",
  });
};
router.post("/", post);

const getid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get role by ID",
    status: "not_implemented",
  });
};
router.get("/:id", getid);

const putid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Update role",
    status: "not_implemented",
  });
};
router.put("/:id", putid);

const deleteid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Delete role",
    status: "not_implemented",
  });
};
router.delete("/:id", deleteid);

export { router as rolesRouter };
