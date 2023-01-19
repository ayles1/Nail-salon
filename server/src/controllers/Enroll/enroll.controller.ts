import { NextFunction, Response, Request } from "express";
import { BaseController } from "../base.controller";
import { IEnrollController } from "./enroll.controller.interface";
export class EnrollController
  extends BaseController
  implements IEnrollController
{
  constructor() {
    super();
    this.bindRoutes([
      {
        path: "/send",
        method: "post",
        func: this.sendEnroll,
      },
    ]);
  }

  sendEnroll(req: Request, res: Response, next: NextFunction) {
    res.send(req.body);
  }
}
