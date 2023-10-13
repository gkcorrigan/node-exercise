import express from "express";
import productsRouter from "./products.route";
// TODO: import router from users.route

const router = express.Router();

// router.use("/users", userRouter);
router.use("/products", productsRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

export default router;
