type service = {
  name: string;
  desc: string;
  price: number;
  category: string;
};

export class EnrollSendDto {
  meetingDate: Date;
  phoneNumber: string;
  servicesList: Array<service>;
  username: string;
  userSurname?: string;
  specialRequests?: string;
}
