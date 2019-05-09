const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

if (apiRoutes) {
  router.use("/api", apiRoutes);
} else {
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
// API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;