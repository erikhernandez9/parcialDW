import { Persona } from '../interfaces/types';

export let personas: Persona[] = [
    { id: '1', nombre: 'Juan', apellido: 'Perez', idEmpresa: '1'}, 
    { id: '2', nombre: 'Pedro', apellido: 'Gomez', idEmpresa: '2' }, 
    { id: '3', nombre: 'Maria', apellido: 'Gonzalez', idEmpresa: '3' }
];


export const getPersonas = () => {
    return personas;
}

export const getPersona = (id: string) => {
    return personas.find(persona => persona.id == id);
}

export const getPersonaByNombreApellido = (nombre: string, apellido: string) => {
    return personas.find(persona => persona.nombre == nombre && persona.apellido == apellido);
}

export const addPersona = (persona: Persona) => {
    personas.push(persona);
    return persona;
}

export const deletePersona = (id: string) => {  
    const deletedPersona = personas.find(persona => persona.id === id);
    personas = personas.filter(persona => persona.id !== id);
    return deletedPersona;
}

export const updatePersona = (id: string, persona: Persona) => {
    const index = personas.findIndex(persona => persona.id == id);
    personas[index] = persona;
    return persona;
}