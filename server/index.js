// server.js
const http = require("http");
const environment = process.env.ENVIRONMENT || "prod";
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Définit les en-têtes CORS pour permettre à toutes les origines d'accéder à ton serveur
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Gère la requête préliminaire CORS
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/users") {
    const data = fs.readFileSync(
      process.env.DATABASE_URL || "./db.json",
      "utf8"
    );
    const jsonData = JSON.parse(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(jsonData));
  } else {
    // Répond avec une erreur 404 pour les autres routes
    res.writeHead(404);
    res.end();
  }
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(
    `Le serveur est démarré sur le port ${PORT} en environnement ${environment}`
  );
});
