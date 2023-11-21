export interface Empresa {
    id: string,
    nombre: string,
    personas: String[]
}

export interface Persona {
    id: string,
    nombre: string,
    apellido: string,
    idEmpresa: string
}