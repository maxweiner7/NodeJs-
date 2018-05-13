import { Schema, Document, model, SchemaType } from 'mongoose';

export interface IPessoaModel extends Document {
  nome: string;
  dataCriacao?: Date
  dataNascimento: Date;
  telefones: number;
  nif: number;
  id_usuario: Schema.Types.ObjectId; 
}

export const PessoaSchema = new Schema({
  nome: { type: String, required: [true, 'Nome é obrigatório.'] },
  dataCriacao: { type: Date, default: Date.now },
  dataNascimento: { type: Date,  required: [true, 'Data de nascimento é obrigatório.'] },
  telefones: { type: String, required: [true, 'Telefone é obrigatorio.'] },
  nif: { type: Number, required: [true, 'Nif é obrigatorio.']},
  id_usuario: { type: Schema.Types.ObjectId, required:[true,''], ref: 'Usuario'},

});

export const PessoaModel = model<IPessoaModel>('Pessoa', PessoaSchema);