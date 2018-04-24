import * as Express from 'express';
import UsuarioRota from './rotas/usuario';
import PessoaRota from './rotas/pessoa';

export function init(server: Express.Application) {
  // INICIAR ROTAS
  UsuarioRota(server);
  PessoaRota(server);
}
