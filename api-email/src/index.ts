import * as Express from 'express';
import EmailRota from './rotas/email';

export function init(server: Express.Application) {
  // EMAIL ROTAS
  EmailRota(server);

}
