import TelegramBot from "node-telegram-bot-api";
import { IEnroll } from "../db/schemas/Enroll";
import { IBot } from "./bot.interface";

import TelegramAdmin from "../db/schemas/TelegramAdmin";

export class Bot implements IBot {
  token: string = process.env.API_KEY as string;

  bot = new TelegramBot(this.token, {
    polling: {
      interval: 5000,
    },
  });

  constructor() {
    this.bot.setMyCommands([
      { command: "/start", description: "Начальное приветствие" },
      { command: "/verify", description: "Верификация" },
    ]);

    let pipelineStep = 0;

    this.bot.on("message", async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;

      if (text === "/start") {
        return this.bot.sendMessage(
          chatId,
          "Добро пожаловать в маникюрного бота!"
        );
      }
      if (text === "/verify") {
        pipelineStep = 1;

        this.bot.sendMessage(
          chatId,
          "Сейчас я проверю, есть ли вы в базе данных"
        );
        const res = await TelegramAdmin.findOne();
        if (res && res.chatId === chatId) {
          await this.bot.sendMessage(chatId, "Поздравляю, вы верифицированы");
        } else {
          await this.bot.sendMessage(
            chatId,
            "Вы не верифицированны, попробуйте ввести секретное слово для верификации"
          );
        }
      }
      if (pipelineStep === 1) {
        if (text === "привет") {
          TelegramAdmin.findOneAndUpdate(
            {},
            { chatId },
            { upsert: true, new: true }
          ).exec((err, updatedDoc) => {
            if (err) {
              console.log(err);
            } else {
              pipelineStep = 0;
              return this.bot.sendMessage(chatId, "Вы успешно верифицированны");
            }
          });
        } else if (text !== "привет") {
          pipelineStep;
          return this.bot.sendMessage(
            chatId,
            "Неправильный код верификации, попробуйте другой"
          );
        }
      }
    });
  }

  async sendEnroll(enroll: IEnroll) {
    const services = enroll.servicesList.map((s) => s.name);
    const res = await TelegramAdmin.findOne();
    if (res) {
      this.bot.sendMessage(
        res.chatId,
        `Новая запись!!!
            Имя : ${enroll.username}
            Фамилия : ${enroll.userSurname}
            Время записи : ${enroll.meetingDate}
            Услуги : ${services}
            Особые пожелания : ${enroll.specialRequests}
            Номер телефона : ${enroll.phoneNumber}`
      );
    }
  }
}
