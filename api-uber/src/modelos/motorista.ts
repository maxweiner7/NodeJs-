import { Schema, Document, model, SchemaType } from 'mongoose';


export interface IMotoristaModel extends Document {
  nome: string;
  dataCriacao?: Date;
  dataNascimento: Date;
  cnh: number;
  telefones: number;
    id_usuario: Schema.Types.ObjectId;
  veiculo: {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    placa: string;
    status: string;
}
  endereco:{
    rua: string;
    numero: number;
    complemento: string;
    estado: string;
    cidade: string;
    pais: string;
   };

  export const MotoristaSchema = new Schema({
  nome: { type: String, required: [true, 'Nome é obrigatorio.'] },
  dataCriacao: { type: Date, default: Date.now },
  dataNascimento: { type: Date, required: [true, 'Data de nascimento é obrigatoria.'] },
  cnh: { type: Number, required: [true, 'O numero de CNH é obrigatorio.'] },
  telefones: { type: Number, required: [true, 'O numero de telefone é obrigatorio.'] },
  veiculo: { type: String, required: [true, 'O modelo do carro é obrigatorio.'] },
  id_usuario: { type: Schema.Types.ObjectId, required: [true,''], ref: 'Usuario'},
  endereco: {
    rua: {type: String, required: [true, 'Rua é obrigatorio']},
    numero: {type: String, required: [true, 'Numero é obrigatorio']},
    complemento: {type: String},
    estado: {type: String, required: [true, 'Estado é obrigatorio']},
    cidade: {type: String, required: [true, 'Cidade é obrigatorio']},
    pais: {type: String, required: [true, 'Pais é obrigatorio']}
  }
} );

export interface ICarro extends Document{

}
export const MotoristaModel = model<IMotoristaModel>('Motorista', MotoristaSchema);
