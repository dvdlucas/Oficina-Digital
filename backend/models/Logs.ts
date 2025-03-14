export default class Logs {
  id: number;
  idUser: number;
  email: string;
  date: Date;

  constructor(id: number, idUser: number, email: string, date: Date) {
    this.id = id;
    this.idUser = idUser;
    this.email = email;
    this.date = date;
  }

  toJSON() {
    return {
      id: this.id,
      idUser: this.idUser,
      email: this.email,
      date: this.date,
    };
  }
}