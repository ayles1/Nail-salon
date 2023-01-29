import mongoose from "mongoose";

export interface ITelegramAdmin {
  chatId: number;
}

const TelegramAdminSchema = new mongoose.Schema({
  chatId: {
    type: Number,
    require: true,
  },
});

const TelegramAdmin = mongoose.model<ITelegramAdmin & mongoose.Document>(
  "TelegramAdmin",
  TelegramAdminSchema
);

export default TelegramAdmin;
