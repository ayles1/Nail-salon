import express, { Express } from "express";
import cors from "cors";
import path from "path";
import { json } from "body-parser";
import { ReviewController } from "./controllers/Review/review.controller";
import { EnrollController } from "./controllers/Enroll/enroll.controller";
import { IDatabase } from "./db/database.interface";
import { Database } from "./db/database";
import { Bot } from "./telegram-bot/bot";
import { config } from "dotenv";

config();

export class App {
  private app: Express;
  private port: number;
  constructor(
    public ReviewController: ReviewController,
    public EnrollController: EnrollController,
    private Database: IDatabase
  ) {
    this.app = express();
    this.port = Number(process.env.port) || 3000;
  }

  private useRoutes(): void {
    this.app.use("/reviews", this.ReviewController.router);
    this.app.use("/enroll", this.EnrollController.router);
  }
  private useMiddleware(): void {
    this.app.use(cors());
    this.app.use(json());
  }
  private useStatic(): void {
    if (process.env.NODE_ENV === "development") {
      return;
    } else {
      this.app.use(express.static(path.join(__dirname, "../client/build")));
      this.app.get("*", (_, res) => {
        res.sendFile(
          path.join(__dirname, "../client/build/index.html"),
          (err) => {
            res.status(500).send(err);
          }
        );
      });
    }
  }
  public init(): void {
    this.useMiddleware();
    this.useRoutes();
    this.useStatic();
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
