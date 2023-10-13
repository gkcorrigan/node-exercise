import express from "express";
import config from "./config";
import router from "./routes/index.js"
// TODO: import router from routes/

const app = express();

app.use(express.json());
app.use("/api", router);
// TODO: use the imported router to handle all requests

// app.use("/api", (req, res) => {
//   res.status(200);
//   res.send("Successful routing");
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
