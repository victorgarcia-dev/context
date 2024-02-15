import {usuarios} from '../util/jeisongnc';

export const filtrarPatente = (patente) => {
    
    const patenteUsuario = usuarios.filter( usuario => patente == usuario.Dominio);
    return patenteUsuario[0];
}