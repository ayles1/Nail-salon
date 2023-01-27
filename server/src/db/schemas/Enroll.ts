import mongoose from "mongoose";

type service = {
  name: string;
  desc: string;
  price: number;
  category: string;
};

export interface IEnroll {
  username: string;
  phoneNumber: string;
  meetingDate: Date;
  userSurname?: string;
  specialRequests?: string;
  servicesList: Array<service>;
}

const EnrollSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  meetingDate: {
    type: Date,
    required: true,
  },
  specialRequests: {
    type: String,
  },
  userSurname: {
    type: String,
  },
  servicesList: {
    type: Array<service>,
    required: true,
  },
});

const Enroll = mongoose.model<IEnroll & mongoose.Document>(
  "Enroll",
  EnrollSchema
);
// export type EnrollType = typeof Enroll;
export default Enroll;
