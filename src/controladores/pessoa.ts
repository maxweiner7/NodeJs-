import * as Express from 'express';
import { PessoaModel, IPessoaModel } from '../modelos/pessoa';
import { IUsuarioRequest, IUsuarioModel } from '../modelos/usuario';
import UsuarioService from '../servicos/usuario';

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
  public async cadastrar(req: Express.Request, res: Express.Response) {  
    const usuarioService = new UsuarioService();

    try{
      const usuario: IUsuarioRequest = {
        email: req.body.email,
        senha: req.body.senha
      };

      const resultadoUsuario = await usuarioService.adicionar(usuario as IUsuarioModel);
      resultadoUsuario._id

    } catch(error){
      res.status(500).send('ERROOOOO');
    }
    
  }
  
}

