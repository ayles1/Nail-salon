import { NextFunction, Request, Response } from "express";

export interface IReviewController{
    send: (req:Request, res:Response, next:NextFunction)=>void
}