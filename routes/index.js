import express from "express";
import userRouter from "./users.route";
// TODO: import router from users.route

const router = express.Router();

router.use("/users", userRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

export default router;
