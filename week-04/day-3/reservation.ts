"use strict";

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Resrvation implements Reservationy {
  private DOW: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  getDowBooking(): string {
    return this.DOW[Math.floor(Math.random() * this.DOW.length)];
  }
  getCodeBooking(): string {
    var chars: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var string_length: number = 8;
    var randomstring: string = '';
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }
  getFullReserv(){console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`)}
}

let reserv = new Resrvation()

reserv.getFullReserv()

