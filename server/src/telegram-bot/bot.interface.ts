import TelegramBot from "node-telegram-bot-api";
import { IEnroll } from "../db/schemas/Enroll";

export interface IBot {
  token: string;
  bot: TelegramBot;
  coreId: number;

  sendEnroll: (enroll: IEnroll) => void;
}
