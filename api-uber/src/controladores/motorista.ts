/*import * as Express from 'express';
import { IUsuarioRequest, IUsuarioModel } from '../modelos/usuario';
import { MotoristaModel, IMotoristaModel } from '../modelos/motorista';
import MotoristaService from '../servicos/motorista';
import UsuarioService from '../servicos/usuario';

export default class Motorista {
    constructor(){}
    public async cadastrar( req: Express.Request, res: Express.Response){
    const motoristaService = new MotoristaService();
    const usuarioService = new UsuarioService();
    try{
        const usuario: IUsuarioRequest = {
            email: req.body.email,
            senha: req.body.senha,
        };
        const resultadoUsuario = await usuarioService.adicionar(usuario as IUsuarioModel);
   req.body.id_usuario = resultadoUsuario._id;
   const resultadoMotorista = await motoristaService.adicionar(req.body);
    res.send(' Motorista foi adicionado do Banco de dados.');
    console.log(' Motorista foi adicionado no Banco de dados');
        } catch(error){
            res.status(500).send(' Erroooo');
        }
    }
}*/
