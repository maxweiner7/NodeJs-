import * as Express from "express";
import PessoasControlador from '../controladores/pessoa';
import pessoa from "../controladores/pessoa";

export default function (server: Express.Application) {
  const pessoasControlador: PessoasControlador = new PessoasControlador();
  server.post('/savePessoas', pessoasControlador.cadastrar);
  server.get('/pessoas', pessoasControlador.buscarTodos);
  server.get('/usuario/:id', pessoasControlador.buscarPorId);
}