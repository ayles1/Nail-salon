import { Request, Response, NextFunction } from "express";

export interface IEnrollController {
  sendEnroll: (req: Request, res: Response, next: NextFunction) => void;
}
