import { Schema, Document, model } from 'mongoose';

export interface IUsuarioModel extends Document {
  email: string;
  dataCriacao?: Date;
  senha: string;
}

export const UsuarioSchema = new Schema({
  email: { type: String, required: [true, 'Nome é obrigatório.'] },
  dataCriacao: { type: Date, default: Date.now },
  senha:{ type: String, required: [true, 'A senha é obrigatoria']},
});

export interface IUsuarioRequest {
  email: string;
  senha: string;
}

export const UsuarioModel = model<IUsuarioModel>('Usuario', UsuarioSchema);