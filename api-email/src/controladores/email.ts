import { Request, Response } from 'express';
import * as Nodemailer from 'nodemailer';

export default class Email {
  constructor() {}

  public enviarEmail(req: Request, res: Response) {  
    const email = req.body.email;

    const transporter = Nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
          user: "maxweiner9@gmail.com",
          pass: "xamweiner7"
      }
  });
  
  const mailOptions = {
      from: '"Max Weiner" <maxweiner9@gmail.com>',
      to: email,
      subject: "Thomas TurbadU ✔✔",
      text: "Thomas TurbadU ✔✔"
  }
  
  transporter.sendMail(mailOptions, function(err, info){
      if(err){
          console.log(err);
      }else{
        res.send('Mensagem enviada com sucesso');
          console.log("Mensagem enviada com sucesso");
      }
  });
    
  }
  
}

