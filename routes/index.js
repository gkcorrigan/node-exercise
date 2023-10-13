import express from "express";
import productRouter from "./products.route";
// TODO: import router from users.route

const router = express.Router();

router.use("/products", productRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

export default router;
