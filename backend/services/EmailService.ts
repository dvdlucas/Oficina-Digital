import nodemailer from 'nodemailer';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'oficina.digital123.com',
        pass: '123456789*OD',
      },
    });
  }

  public async sendRegistrationEmail(to: string, name: string): Promise<void> {
    const mailOptions = {
      from: '"De Oficina Digital" <oficina.digital123.com>',
      to,
      subject: 'Bem vindo(a) à Oficina Digital!',
      text: `Olá ${name},\n\nObrigado por realizar o cadastro em nossa plataforma!`,
      html: `<p>Olá ${name},</p><p>Obrigado por realizar o cadastro em nossa plataforma!</p>`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}