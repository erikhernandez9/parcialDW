import express from 'express'
import * as PersonaService from '../services/personaService';
import { Persona } from '../interfaces/types';

const router = express.Router();

// Add the body-parser middleware

router.get('/', (req, res) => {
    const personas = PersonaService.getPersonas();
    res.send(personas);
});

router.get('/buscar', (req, res) => {
    const nombre = req.query.nombre?.toString();
    const apellido = req.query.apellido?.toString();

    if (nombre && apellido) {
        const persona = PersonaService.getPersonaByNombreApellido(nombre, apellido);
        res.send(persona);
    } else {
        const personas = PersonaService.getPersonas();
        res.send(personas);
    }
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const persona = PersonaService.getPersona(id);
    res.send(persona);
});

router.post('/', (req, res) => {
    let newPersona: Persona = {
        id: (PersonaService.personas.length + 1).toString(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        idEmpresa: req.body.idEmpresa
    }
    PersonaService.addPersona(newPersona);
    res.send(newPersona);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const personaEliminada = PersonaService.deletePersona(id);
    res.send(personaEliminada);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const personaActualizada = PersonaService.updatePersona(id, req.body);
    res.send(personaActualizada);
});

export default router