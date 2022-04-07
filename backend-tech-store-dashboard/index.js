const express = require("express");
const cors = require("cors");
const multer = require("multer");
const config = require("./src/config/config");
const storage = require("./src/config/multer");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const app = express();
const { auth, products } = require("./src/routes");
const { loggerConsole } = require("./src/utils/loggers/settingsLogger");
const invalidRequest = require("./src/controllers/error.controllers");

if (!cluster.isWorker) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", () => {
    loggerConsole.info("Pid process has terminated:", process.pid);
  });
} else {
  app.use(cors());
  app.use(express.json());
  app.use(multer({ storage }).single("image"));

  app.use("/dashboard/api/products", products);
  app.use("/dashboard/api/auth", auth);
  app.use(invalidRequest);
  app.listen(config.port, () => {
    loggerConsole.info("Server running on PORT", config.port);
  });
}
