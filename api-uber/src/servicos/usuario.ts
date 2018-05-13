import { UsuarioModel, IUsuarioModel } from '../modelos/usuario';

export default class UsuarioService {
    async adicionar(usuario: IUsuarioModel) {
        try {
            return await UsuarioModel.create(usuario);
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        } 
    }
}
export const removeid = async (id: string) => {
  try { return await UsuarioModel.remove(id);
  } catch(error){
      console.log('remover', error);
  }
}