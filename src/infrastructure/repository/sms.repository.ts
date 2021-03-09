import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '@domain/entities/User';
import { ENV_DATA, USER_MODEL_PROVIDER } from '@constants';
import { InformationModel } from '@infrastructure/models/information.model';
import { EmailRepository } from './email.repository';

const nowDate = InformationModel.prototype.dateFormat(new Date());
const request = require("request");

// Se inyecta el repo en el servicio
@Injectable()
export class SmsRepository {

  constructor(@Inject(USER_MODEL_PROVIDER) private readonly model: User) {}

  async sendSMS ( phone, name, email, message){
    let url_twilio =
    ENV_DATA.company.api_twilio +
      "/2010-04-01/Accounts/" +
      `${ENV_DATA.company.accountSid}` +
      "/Messages.json";
    var settings = {
      auth: {
        user: ENV_DATA.company.accountSid,
        pass: ENV_DATA.company.authToken,
        sendImmediately: true,
      },
      body: {
        To: InformationModel.prototype.validatePhone(phone),
        From: ENV_DATA.company.phone,
        Body:
          "Hola " +
          name +
          ", recibimos tu mensaje, pronto nos comunicaremos contigo",
      },
    };
    return new Promise(function (resolve, reject) {
      request(
        {
          method: "post",
          url: url_twilio,
          auth: settings.auth,
          form: settings.body,
        },
        function (err, httpResponse, body) {
          if (body) {
            try {
                body = JSON.parse(body);
                resolve(body);
            } catch (e) {
                console.log("Error RequestApi with body=" + body, e);
                reject(0);
            }
          }
        }
      );
    });
  };
}