//Las interfaces deberian emprezar con la i

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