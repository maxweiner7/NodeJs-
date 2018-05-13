import { PessoaModel, IPessoaModel } from '../modelos/pessoa';



export default class PessoaService {
    async adicionar(pessoa: IPessoaModel) {
        try {
            return await PessoaModel.create(pessoa);
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        } 
    }
}
 export const removeid = async (id: string) => {
   try { return await PessoaModel.remove(id);
   } catch(error){
       console.log('remover', error);
   }
 }
 export const atualizaid = async (id: string , pessoa:IPessoaModel) => {
    try { return await PessoaModel.findOneAndUpdate(id,pessoa);
    } catch(error){
        console.log('actualizar', error);
    }
  }
