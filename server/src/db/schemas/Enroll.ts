import mongoose from "mongoose";

type service = {
  name: string;
  desc: string;
  price: number;
  category: string;
};

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
  },
});

export default mongoose.model("Enroll", EnrollSchema);
