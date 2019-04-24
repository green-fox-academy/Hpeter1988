'use strict'

interface Flyable {
  land();
  fly();
  takeOff();
}

 abstract class Veichle {
weight: number;
type: string;
color: string;
}

class Helicopter extends Veichle implements Flyable{
  land(){};
  fly(){};
  takeOff(){};
}