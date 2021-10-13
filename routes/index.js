const router = require('express').Router();
const path = require('path');

// Import and use routes from api.js
const apiRoutes = require('./api');
router.use("/api", apiRoutes);

// html endpoint routes
router.get('/:endpoint', (req,res) => {
    res.sendFile(path.join(__dirname, `../public/${req.params.endpoint}.html`))
});

module.exports = router;