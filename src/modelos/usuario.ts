import { Schema, Document, model } from 'mongoose';

export interface IUsuarioModel extends Document {
  nome: string;
  dataCriacao?: Date;
  senha: string;
  token?:{type: String}
}

export const UsuarioSchema = new Schema({
  nome: { type: String, required: [true, 'Nome é obrigatório.'] },
  dataCriacao: { type: Date, default: Date.now },
  senha:{ type: String, required: [true, 'A senha é obrigatoria']},
  token:{ type: String }
});

export const UsuarioModel = model<IUsuarioModel>('Usuario', UsuarioSchema);