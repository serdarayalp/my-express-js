const express = require("express");

// Router
const router = express.Router();

router.get("/", (request, response) => {
  response.render("projects", { layout: "./layouts/special" });
});

router.get("/neu", (request, response) => {
  response.render("projectNew", { layout: "./layouts/special" });
});

// TypeError: Cannot read properties of undefined (reading 'projectName')
router.post("/", (request, response) => {
  let name = request.body.projectName;
  console.log("Projekt " + name + " ist angelegt...");
  response.redirect("/projects");
});

/*
// Dynamische Paths immer ganz unten hinpacken
router.get("/:id", (request, response) => {
  let id = request.params.id;
  console.log("Projekt mit Id " + id + " wird bearbeitet...");
  response.render("project", { layout: "./layouts/special", projectId: id });
});

router.put("/:id", (request, response) => {
  let id = request.params.id;
  response.send("Projekt mit Id " + id + " ist aktualisiert...");
});

router.delete("/:id", (request, response) => {
  let id = request.params.id;
  response.send("Projekt mit Id " + id + " ist gelöscht...");
});
*/

router
  .route("/:id")
  .get((request, response) => {
    let id = request.params.id;
    console.log("Projekt mit Id " + id + " wird bearbeitet...");
    response.render("project", { layout: "./layouts/special", projectId: id });
  })
  .put((request, response) => {
    let id = request.params.id;
    response.send("Projekt mit Id " + id + " ist aktualisiert...");
  })
  .delete((request, response) => {
    let id = request.params.id;
    response.send("Projekt mit Id " + id + " ist gelöscht...");
  });

module.exports = router;
