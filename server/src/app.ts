import express, { Express, Request, Response } from "express";
import cors from "cors";
import { json } from "body-parser";
import { ReviewController } from "./controllers/Review/review.controller";
import { EnrollController } from "./controllers/Enroll/enroll.controller";
import { IDatabase } from "./db/database.interface";
import { Database } from "./db/database";

import Review from "./db/schemas/Review";
import { Bot } from "./telegram-bot/bot";

export class App {
  private app: Express;
  private port: number;
  constructor(
    public ReviewController: ReviewController,
    public EnrollController: EnrollController,
    private Database: IDatabase
  ) {
    this.app = express();
    this.port = 8000;
  }

  private useRoutes(): void {
    this.app.use("/reviews", this.ReviewController.router);
    this.app.use("/enroll", this.EnrollController.router);
  }
  private useMiddleware(): void {
    this.app.use(cors());
    this.app.use(json());
  }
  public init(): void {
    this.useMiddleware();
    this.useRoutes();
    this.app.listen(this.port);
    this.Database.init();
    console.log(`Приложение запущено на ${this.port} порте`);
  }
}

const app = new App(
  new ReviewController(),
  new EnrollController(new Bot()),
  new Database()
);
app.init();
