import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '@domain/entities/User';
import { ENV_DATA, USER_MODEL_PROVIDER } from '@constants';
import { InformationModel } from '@infrastructure/models/information.model';

const nowDate = InformationModel.prototype.dateFormat(new Date());
const nodemailer = require("nodemailer");



// Se inyecta el repo en el servicio
@Injectable()
export class EmailRepository {

  constructor(@Inject(USER_MODEL_PROVIDER) private readonly model: User) {}

  async sendEmail (email, phone, name, message) {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: ENV_DATA.company.email,
          pass: ENV_DATA.company.password,
        },
      });
      let info = await transporter.sendMail({
        from: '"' + ENV_DATA.company.friendlyname + '" <' + ENV_DATA.company.email + ">",
        to: InformationModel.prototype.validateEmail(email),
        subject: "Hola " + name,
        text: message,
        html: await InformationModel.prototype.ResponseLanding(email, phone, name, message),
      });
      return info;
    } catch (err) {
      console.log("env.company", ENV_DATA.company);
      console.log("err=>", err);
      return err;
    }
  };

  async contactUS(email, name, phone, message, time, asSoonAsPossible) {
    let ifTime = (time)?time:nowDate;
    let timeToSend = (asSoonAsPossible)? "Comunicate urgentemente": ifTime;
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: ENV_DATA.company.email,
          pass: ENV_DATA.company.password,
        },
      });
      let info = await transporter.sendMail({
        from: '"' + ENV_DATA.company.friendlyname + '" <' + ENV_DATA.company.email + ">",
        to: ENV_DATA.company.emailTo,
        subject:
          "Hola " + ENV_DATA.company.nameTo + " Nuevo contacto para información",
        text: message,
        html: await InformationModel.prototype.ContactUs(email, name, phone, timeToSend, message),
      });
      return info;
    } catch (err) {
      console.log("env.company", ENV_DATA.company);
      console.log("err=>", err);
      return err;
    }
  };

  async sendNewsletters (emails, subject, html) {
    emails.forEach(async email => {
      try {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: ENV_DATA.company.email,
            pass: ENV_DATA.company.password,
          },
        });
        let info = await transporter.sendMail({
          from: '"' + ENV_DATA.company.friendlyname + '" <' + ENV_DATA.company.email + ">",
          to: InformationModel.prototype.validateEmail(email),
          subject: subject,
          html: html,
        });
        return info;
      } catch (err) {
        console.log("env.company", ENV_DATA.company);
        console.log("err=>", err);
        return err;
      }
      
    });
  };
}
