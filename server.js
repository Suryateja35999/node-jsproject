const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("🚀 Node.js app deployed with Jenkins, Docker, and Minikube!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

