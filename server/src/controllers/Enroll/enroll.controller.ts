import { NextFunction, Response, Request } from "express";
import Enroll from "../../db/schemas/Enroll";
import { BaseController } from "../base.controller";
import { EnrollSendDto } from "./dataTransferObject/enroll-send-dto";
import { IEnrollController } from "./enroll.controller.interface";
import { Bot } from "../../telegram-bot/bot";
import { IBot } from "../../telegram-bot/bot.interface";
export class EnrollController
  extends BaseController
  implements IEnrollController
{
  constructor(private Bot: IBot) {
    super();
    this.bindRoutes([
      {
        path: "/send",
        method: "post",
        func: this.sendEnroll,
      },
    ]);
  }

  async sendEnroll(
    req: Request<{}, {}, EnrollSendDto>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const doc = new Enroll({
        meetingDate: req.body.meetingDate,
        phoneNumber: req.body.phoneNumber,
        servicesList: req.body.servicesList,
        userSurname: req.body.userSurname,
        username: req.body.username,
        specialRequests: req.body.requests,
      });
      const post = await doc.save();

      res.json(post);
      this.Bot.sendEnroll(post);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        res.status(400).send(error);
      }
    }
  }
}

// export class EnrollSendDto {
//   meetingDate: Date;
//   phoneNumber: string;
//   servicesList: Array<service>;
//   username: string;
//   userSurname?: string;
//   specialRequests?: string;
// }
