const router = require("express").Router();

// Import and use routes from api.js
const apiRoutes = require("./api");
router.use("/api", apiRoutes);