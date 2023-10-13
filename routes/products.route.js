import express from "express";
import ProductsController from "../controllers/products.controller.js";

//creating a sub route for our server to use
const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
console.log(data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProduct = req.body;
    //We should check that newProduct is an object that aligns with the
    //date we want, not just any object with any information
    const data = await db.add(newProduct);
    res.json(data);
    // TODO
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    //need the id so we know which resource to update
    const id = req.params.id;
    //need the req.body to know what to update the resource to be
    const updatedProduct = req.body;

    //actually updates the resource and returns data about how that went
    const data = await db.update(id, updatedProduct);
    //informing the requestor how that went
    res.json(data);
    // TODO
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    // TODO
    const data = await db.remove(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
