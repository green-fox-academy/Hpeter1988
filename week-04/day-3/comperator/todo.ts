'use strict'

import {Comparable} from "./domino"


class Todo implements Comparable {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }
  compareTo(other: Todo): number{
    this.completed 
  }
}

export { Todo };