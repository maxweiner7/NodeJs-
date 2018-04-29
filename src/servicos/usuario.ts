import { UsuarioModel, IUsuarioModel } from '../modelos/usuario';

export default class UsuarioService {
    async adicionar(usuario: IUsuarioModel) {
        try {
            return await usuario.save();
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        } 
    }
}