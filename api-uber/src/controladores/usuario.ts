import * as Express from 'express';
import { UsuarioModel, IUsuarioModel } from '../modelos/usuario';
import usuario from '../rotas/usuario';

export default class Usuario {
  constructor() {}

  public buscarTodos(req: Express.Request, res: Express.Response) {
    UsuarioModel.find()
      .then(usuarios => {
        res.send(usuarios);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });
  }
  
  public buscarPorId(req: Express.Request, res: Express.Response) {
    UsuarioModel.find({_id: req.params.id})
      .then(usuario => {
        res.send(usuario);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });}
  
  public cadastrar(req: Express.Request, res: Express.Response) {  
    
    UsuarioModel.create(req.body)
      .then(usuarios => {
        res.send(usuarios);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });
  }
  public async atualizar(req: Express.Request, res: Express.Response) {
    try {
      const example: IExampleRequest = {
        description: req.body.description
      };
      const result = await this.exampleDatabase.update(
        req.params.id,
        example as IExampleDocument
      );
      res.send({ example: result });
    } catch (error) {
      res.status(ErrorUtil.generateHttpCode(error)).send(error.errors);
    }
  }
 }


