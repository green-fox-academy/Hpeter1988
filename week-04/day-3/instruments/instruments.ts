"use strict";

/* We start with a base, abstract class Instrument.

it reserves (e.g. protected) the name of the instrument
it should provide a play() method.
Next, we add another abstract class, StringedInstrument which extends Instrument. It

introduces numberOfStrings and
sound() method what's implementation is yet unknown
but with the help of the sound() the play() method is fully implementable
StingedInstrument has 3 descendants, namely:-

Electric Guitar (6 strings, 'Twang')

Bass Guitar (4 strings, 'Duum-duum-duum')

Violin (4 strings, 'Screech')

The Workshop should be invoked from another file like app.ts or main.ts */

abstract class Instrument {
  protected name: string;
  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound(): void;
  play() {console.log(
    `${this.name}, a ${
      this.numberOfStrings
    }-stringed instrument that goes ${this.sound()}`);
  }
}
class ElectricGuitar extends StringedInstrument {
  constructor(pNumberOfStrings: number = 6, pName: string = "Electric Guitar") {
    super();
    this.numberOfStrings = pNumberOfStrings;
    this.name = pName;
  }
  sound() {
    return "Twang";
  }
}
class BassGuitar extends StringedInstrument {
  constructor(pNumberOfStrings: number = 4, pName: string = "Bass Guitar") {
    super();
    this.numberOfStrings = pNumberOfStrings;
    this.name = pName;
  }
  sound() {
    return "Duum-duum-duum";
  }
}
class Violin extends StringedInstrument {
  constructor(pNumberOfStrings: number = 4, pName: string = "Violin") {
    super();
    this.numberOfStrings = pNumberOfStrings;
    this.name = pName;
  }
  sound() {
    return "Screech";
  }
}
console.log(
  "Test 1, create Electric Guitar, Bass Guitar and Violin with default strings."
);
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log("Test 1 Play");
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  "Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings ."
);
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log("Test 2 Play");
guitar2.play();
bassGuitar2.play();
