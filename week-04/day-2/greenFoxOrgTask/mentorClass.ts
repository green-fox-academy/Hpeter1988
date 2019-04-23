"use strict";

import { Person } from "./personClass";

export class Mentor extends Person {
  lvl: string;

  constructor(name?: string, age?: number, gender?: string, lvl:string = 'intermediate') {
    super(name, age, gender);
    this.lvl = lvl
  }
  getSGoal(){console.log('My goal is: Educate brilliant junior software developers.')}
  introduce(){console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.lvl} mentor.`)}
}


