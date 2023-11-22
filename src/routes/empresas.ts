import express from 'express'
import * as EmpresaService from '../services/empresaService';
import { Empresa } from '../interfaces/types';
import { verificarToken } from '../autenticacion/verificarToken';

const router = express.Router();

router.get('/', verificarToken, (req, res)=> {
    const empresas = EmpresaService.getEmpresas();
    res.status(200).send(empresas);
});

router.get('/:id', verificarToken, (req, res)=> {
    const empresas = EmpresaService.getEmpresas();
    const id = req.params.id;
    const empresa = empresas.find((empresa: { id: string; }) => empresa.id == id);
    if (empresa) {
        res.status(200).send(empresa);
    } else {
        res.status(404).send('Empresa not found');
    }
});
// Si se envia un id por parametro y esta id no esta vinculada a ninguna empresa, se crea una nueva empresa con ese id, si no avisa que no se pudo crear
router.post('/', verificarToken, (req, res)=> {
    const empresas = EmpresaService.getEmpresas();
    let newId: string;
    if (empresas.length > 0) {
        const lastEmpresa = empresas[empresas.length - 1];
        newId = (parseInt(lastEmpresa.id) + 1).toString();
    } else {
        newId = '1';
    }
    let newEmpresa : Empresa = {
        id: newId,
        nombre: req.body.nombre,
        personas: []
    }
    EmpresaService.addEmpresa(newEmpresa);
    res.status(201).send(newEmpresa);
});

router.delete('/:id', verificarToken, (req, res)=> {
    const id = req.params.id;
    const empresaEliminada = EmpresaService.deleteEmpresa(id);
    if (empresaEliminada) {
        res.status(200).send(empresaEliminada);
    } else {
        res.status(404).send('Empresa not found');
    }
});

export default router