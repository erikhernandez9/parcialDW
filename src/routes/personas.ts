import express from "express";
import * as PersonaService from "../services/personaService";
import { Persona } from "../interfaces/types";
import { verificarToken } from "../autenticacion/verificarToken";
const router = express.Router();

// Add the body-parser middleware

router.get("/", verificarToken, (req, res) => {
  const personas = PersonaService.getPersonas();
  res.status(200).send(personas);
});

router.get("/buscar/:nombre/:apellido", verificarToken, (req, res) => {
  const nombre = req.params.nombre?.toString();
  const apellido = req.params.apellido?.toString();

  if (nombre && apellido) {
    console.log(nombre, apellido);
    const persona = PersonaService.getPersonaByNombreApellido(nombre, apellido);
    if (persona) {
      res.status(200).json({ persona });
    }
  }
  res.status(404).json({ message: "La persona no existe" });
});

router.get("/:id", verificarToken, (req, res) => {
  const id = req.params.id;
  const persona = PersonaService.getPersona(id);
  if (persona) {
    res.status(200).send(persona);
  } else {
    res.status(404).json({ message: "La persona no existe" });
  }
});

router.post("/", verificarToken, (req, res) => {
  let newPersona: Persona = {
    id: (PersonaService.personas.length > 0 ? (parseInt(PersonaService.personas[PersonaService.personas.length - 1].id) + 1).toString() : "1"),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    idEmpresa: req.body.idEmpresa,
  };
  PersonaService.addPersona(newPersona);
  res.status(201).send(newPersona);
});

router.delete("/:id", verificarToken, (req, res) => {
  const id = req.params.id;
  const personaEliminada = PersonaService.deletePersona(id);
  if (personaEliminada) {
    res.status(200).send(personaEliminada);
  } else {
    res.status(404).json({ message: "La persona no existe" });
  }
});

router.put("/:id", verificarToken, (req, res) => {
  const id = req.params.id;
  const personaActualizada = PersonaService.updatePersona(id, req.body);
  if (personaActualizada) {
    res.status(200).send(personaActualizada);
  } else {
    res.status(404).json({ message: "La persona no existe" });
  }
});

export default router;
