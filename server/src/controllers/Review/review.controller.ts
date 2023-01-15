import { Request, Response } from "express";
import Review from "../../db/schemas/Review";
import { BaseController } from "../base.controller";
import { ReviewSendDto } from "./dataTransferObject/review-send-dto";
import { IReviewController } from "./review.controller.interface";

export class ReviewController extends BaseController implements IReviewController{
   constructor(){
      super()
      this.bindRoutes([
         {
            path:'/send',
            method:'post',
            func: this.send
         }
      ])
   }
   public async send(req:Request<{}, {},ReviewSendDto>,  res:Response){
      try {
         const doc = new Review({
            rating:req.body.rating,
            text:req.body.text,
            date:req.body.date
         })
         const post = await doc.save()
         res.json(post)
      } catch (error) {
         if(error instanceof Error){
            console.error(error)
         }
      }
   }
}

