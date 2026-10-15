import { Router, type RequestHandler } from "express";

const router = Router();

const postregister: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "Register a new user",
    status: "not_implemented",
  });
};
router.post("/register", postregister);

const postlogin: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "Login user and receive JWT",
    status: "not_implemented",
  });
};
router.post("/login", postlogin);

const postlogout: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Logout user (client-side token removal)",
    status: "not_implemented",
  });
};
router.post("/logout", postlogout);

export { router as authRouter };
