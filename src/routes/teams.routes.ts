import { Router, type RequestHandler } from "express";

const router = Router();

const get: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List teams for the authenticated user",
    status: "not_implemented",
  });
};
router.get("/", get);

const post: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Create a new team",
    status: "not_implemented",
  });
};
router.post("/", post);

const getid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get team by ID",
    status: "not_implemented",
  });
};
router.get("/:id", getid);

const putid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Update team details",
    status: "not_implemented",
  });
};
router.put("/:id", putid);

const deleteid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Delete team",
    status: "not_implemented",
  });
};
router.delete("/:id", deleteid);

const getteamIdprojects: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List projects in a team",
    status: "not_implemented",
  });
};
router.get("/:teamId/projects", getteamIdprojects);

const postteamIdprojects: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Create a project within a team",
    status: "not_implemented",
  });
};
router.post("/:teamId/projects", postteamIdprojects);

const getteamIdmembers: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List members of a team",
    status: "not_implemented",
  });
};
router.get("/:teamId/members", getteamIdmembers);

const postteamIdmembers: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Add a user to a team",
    status: "not_implemented",
  });
};
router.post("/:teamId/members", postteamIdmembers);

const deleteteamIdmembersuserId: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Remove a user from a team",
    status: "not_implemented",
  });
};
router.delete("/:teamId/members/:userId", deleteteamIdmembersuserId);

export { router as teamsRouter };
