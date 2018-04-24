import * as Express from 'express';
import { PessoaModel, IPessoaModel } from '../modelos/pessoa';

export default class pessoa {
  constructor() {}

  public buscarTodos(req: Express.Request, res: Express.Response) {
    PessoaModel.find()
      .then(pessoas => {
        res.send(pessoas);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });
  }
  public buscarPorId(req: Express.Request, res: Express.Response) {
    PessoaModel.find({_id: req.params.id})
      .then(pessoas => {
        res.send(pessoas);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });
  }
  public cadastrar(req: Express.Request, res: Express.Response) {  
    
    PessoaModel.create(req.body)
      .then(pessoas => {
        res.send(pessoas);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });
  }
  
}

