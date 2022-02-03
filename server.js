const express = require("express");

// Layouts
const expressLayouts = require("express-ejs-layouts");

// reuestLogger einbinden, was ein Middleware ist.
const requestLogger = require("./middlewares/requestLogger");

const server = express();

// wo sind die statische Dateien zu finden
server.use(express.static("./public"));

// Layouts für Views
server.use(expressLayouts);
server.set("layout", "./layouts/main");

// ..... Middlewares
// body entschlüssel
server.use(express.urlencoded({ extended: true }));
server.use(requestLogger);

// Template Engine
server.set("view engine", "ejs");

server.get("/", (request, response) => {
  // response.send("Hallo Welt...");
  // response.sendStatus(500);
  // response.status(500).send("Fehler auf dem Server...");
  // response.json({"message":"Hallo Welt"});
  // response.download("./download.txt");

  response.render("index", { message: "Max Mustermann" });
});

// Routes mit Präfix "/projects" einbinden
const projectRouter = require("./routes/projects");
// Präfix hier als erster Parameter definieren
server.use("/projects", projectRouter);

server.listen("3000", () =>
  console.log("Server ist unter dem Port 3000 gestartet...")
);
