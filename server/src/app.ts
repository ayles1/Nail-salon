import express, { Express,Request, Response } from "express";
import cors from "cors";
import { json } from 'body-parser'
import { IReviewRoutes } from "./routes/reviewRoutes.interface";
import { ReviewRoutes } from "./routes/reviewRoutes";


export class App {
  private app:Express
  private port:number
  constructor(private reviewRoutes:IReviewRoutes){
    this.app = express()
    this.port = 8000
  }

  private useRoutes():void{
    this.app.post("/test", (req:Request, res:Response) => {
    res.json(req.body)
  });
    this.app.get('/reviews', (req:Request, res:Response)=>{

    })
  }
  private useMiddleware():void{
    this.app.use(cors())
    this.app.use(json())
  }
  public init():void{
    this.useMiddleware()
    this.useRoutes()
    this.app.listen(this.port)
  console.log(`Приложение запущено на ${this.port} порте`);
    
  }
}

const app = new App(new ReviewRoutes())
app.init()