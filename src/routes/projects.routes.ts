import { Router, type RequestHandler } from "express";

const router = Router();

const getid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get project by ID",
    status: "not_implemented",
  });
};
router.get("/:id", getid);

const putid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Update project",
    status: "not_implemented",
  });
};
router.put("/:id", putid);

const deleteid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Delete project",
    status: "not_implemented",
  });
};
router.delete("/:id", deleteid);

const getprojectIdtasks: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List tasks for a project",
    status: "not_implemented",
  });
};
router.get("/:projectId/tasks", getprojectIdtasks);

const postprojectIdtasks: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Create a task in a project",
    status: "not_implemented",
  });
};
router.post("/:projectId/tasks", postprojectIdtasks);

const getprojectIdmembers: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List members of a project",
    status: "not_implemented",
  });
};
router.get("/:projectId/members", getprojectIdmembers);

const postprojectIdmembers: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Add a user to a project",
    status: "not_implemented",
  });
};
router.post("/:projectId/members", postprojectIdmembers);

const deleteprojectIdmembersuserId: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Remove a user from a project",
    status: "not_implemented",
  });
};
router.delete("/:projectId/members/:userId", deleteprojectIdmembersuserId);

export { router as projectsRouter };
