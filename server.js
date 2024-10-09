const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001; // You can choose any port This should be in a .env file

// Serve the index.html file
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
