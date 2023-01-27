import TelegramBot from "node-telegram-bot-api";
import { IEnroll } from "../db/schemas/Enroll";
import { IBot } from "./bot.interface";

export class Bot implements IBot {
  token = "5906075342:AAGQdabZzeAm3ZJR_OG_6Q3Bb0uzre3Taaw";
  bot = new TelegramBot(this.token, { polling: true });
  coreId: number;
  constructor() {
    this.bot.on("message", (msg) => {
      if (msg.text === "привет") {
        this.coreId = msg.chat.id;
        this.bot.sendMessage(msg.chat.id, "Получено");
      }
    });

    this.bot.on("message", (msg) => {
      const chatId = msg.chat.id;

      this.bot.sendMessage(chatId, chatId.toString());
    });
  }

  sendEnroll(enroll: IEnroll) {
    try {
      if (this.coreId) {
        const services = enroll.servicesList.map((s) => s.name);
        this.bot.sendMessage(
          this.coreId,
          `Новая запись!!!
          Имя : ${enroll.username}
          Фамилия : ${enroll.userSurname}
          Время записи : ${enroll.meetingDate}
          Услуги : ${services}
          Особые пожелания : ${enroll.specialRequests}
          Номер телефона : ${enroll.phoneNumber}`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
