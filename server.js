// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // serve HTML, CSS, JS files

// Dummy user for testing
const USER = { username: "admin", password: "1234" };

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// Serve welcome page
app.get("/welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "welcome.html"));
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
