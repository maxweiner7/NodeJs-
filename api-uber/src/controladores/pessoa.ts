import * as Express from 'express';
import { PessoaModel, IPessoaModel } from '../modelos/pessoa';
import {UsuarioModel, IUsuarioRequest, IUsuarioModel } from '../modelos/usuario';
import UsuarioService from '../servicos/usuario';
import PessoaService from '../servicos/pessoa';
import {removeid, atualizaid} from '../servicos/pessoa'
import pessoa from '../rotas/pessoa';
import * as servicos from '../servicos/pessoa';

export default class Pessoa {
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
    const pessoaService = new PessoaService();
    try{
      const usuario: IUsuarioRequest = {
        email: req.body.email,
        senha: req.body.senha,
      };

      const resultadoUsuario = await usuarioService.adicionar(usuario as IUsuarioModel);
      
      req.body.id_usuario = resultadoUsuario._id;
      const resultadoPessoa = await pessoaService.adicionar(req.body);
      res.send('Pessoa foi adicionado no BD');
      console.log('Pessoa foi adicionado no BD')
    } catch(error){
      res.status(500).send('ERROOOOO');
    }

  }
  public async delpessoa(req: Express.Request, res: Express.Response, next: Express.NextFunction) {  
    const id: any = {_id: req.params.id};
    try {
      const pessoa =  await PessoaModel.find(id);
      const utilizador= await UsuarioModel.findByIdAndRemove(pessoa[0].id_usuario);
      if(utilizador){
        const dels = await PessoaModel.findByIdAndRemove(pessoa[0]._id);
        if(dels){
          console.log('Deu certo');
          res.send('Deu Certo');
        }
        else{
          console.log('Deu Erro');
          res.send('Deu erro');
        }
      }
            //const resulta = await servicos.removeid(id);
            res.send('Pessoa foi removida no BD');
      console.log('Pessoa foi removida no BD')
    }catch(error) {
      res.status(500).send('ERROOOOO');
    }
    }
  public async tostasMistas(req: Express.Request, res: Express.Response){
    const objectoASalvar: IPessoaModel = <IPessoaModel>req.body;
    try{
      const resultadoDoUpdate = await atualizaid(objectoASalvar._id, objectoASalvar);
      if(resultadoDoUpdate){
        console.log('Deu certo');
        res.send('Deu Certo');
      }
      else{
        console.log('Deu Erro');
        res.send('Deu erro');
      }
        }catch(error) {
          res.status(500).send('Erroooooo');
        }
        {

    }

  }
  
}

