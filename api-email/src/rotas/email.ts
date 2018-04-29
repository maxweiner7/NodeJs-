import * as Express from "express";
import EmailControlador from '../controladores/email';

export default function (server: Express.Application) {
  const emailControlador: EmailControlador = new EmailControlador();
  server.post('/enviarEmail', emailControlador.enviarEmail);
}