import { Empresa } from "../interfaces/types";

let empresas: Empresa[] = [
    { id: '1', nombre: 'Empresa 1', personas: ['1', '2'] }, 
    { id: '2', nombre: 'Empresa 2', personas: ['3'] }, 
    { id: '3', nombre: 'Empresa 3', personas: [] }
];

export const getEmpresas = () => {
    return empresas;
}

export const getEmpresa = (id: string) => {
    return empresas.find(empresa => empresa.id == id);
}

export const addEmpresa = (empresa: Empresa) => {    
    empresas.push(empresa);
    return empresa;
}

export const deleteEmpresa = (id: string) => {
    const index = empresas.findIndex(empresa => empresa.id === id);
    if (index !== -1 && empresas[index].personas.length === 0) {
        return empresas.splice(index, 1)[0];
    }
    return null;
}

export const updateEmpresa = (id: string, empresa: Empresa) => {
    const index = empresas.findIndex(empresa => empresa.id == id);
    empresas[index] = empresa;
    return empresa;
}