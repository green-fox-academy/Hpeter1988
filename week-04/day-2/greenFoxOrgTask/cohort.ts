"use strict";

import { Person } from "./personClass";
import { Student } from "./studentClass";
import { Mentor } from "./mentorClass";
import { Sponsor } from "./sponsorClass";

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string, students: Student[] = [], mentors: Mentor[] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }
  addStudent(student: Student){this.students.push(student)}
  addMentor(mentor: Mentor){this.mentors.push(mentor)}
  info(){console.log(`The name cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)}
}
