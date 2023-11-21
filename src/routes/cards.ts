import express from 'express'
import * as EmpresaService from '../services/empresaService';
import { Empresa } from '../interfaces/types';

const router = express.Router();

router.get('/', (req, res)=> {
    const empresas = EmpresaService.getEmpresas();
    res.send(empresas);
});

router.get('/:id', (req, res)=> {
    const empresas = EmpresaService.getEmpresas();
    const id = req.params.id;
    const empresa = empresas.find((empresa: { id: string; }) => empresa.id == id);
    res.send(empresa);
});

router.post('/', (req, res)=> {
    const empresas = EmpresaService.getEmpresas();
    let newEmpresa : Empresa = {
        id: (empresas.length + 1).toString(),
        nombre: req.body.nombre,
        personas: []
    }
    EmpresaService.addEmpresa(newEmpresa);
    res.send(newEmpresa);
});

router.delete('/:id', (req, res)=> {
    const id = req.params.id;
    console.log('id');
    const empresaEliminada = EmpresaService.deleteEmpresa(id);
    res.send(empresaEliminada);
});

export default router