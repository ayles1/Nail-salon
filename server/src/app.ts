import express, { Express,Request, Response } from "express";
import cors from "cors";
import { json } from 'body-parser'


export class App {
  private app:Express
  private port:number
  constructor(){
    this.app = express()
    this.port = 8000
  }
  private useRoutes():void{
    this.app.post("/test", (req:Request, res:Response) => {
    res.json(req.body)
});
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

const app = new App()
app.init()