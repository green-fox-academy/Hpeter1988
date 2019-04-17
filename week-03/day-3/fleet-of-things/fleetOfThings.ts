import { Thing } from './things';
import { Fleet } from './fleet';

let fleet = new Fleet();

let thing1: Thing = new Thing('Get milk');
let thing2: Thing = new Thing('Remove the obstacle');
let thing3: Thing = new Thing('Stand up');
let thing4: Thing = new Thing('Eat lunch');
thing3.complete()
thing4.complete()
fleet.add(thing1)
fleet.add(thing2)
fleet.add(thing3)
fleet.add(thing4)
for(let i: number = 0; i < fleet.getThings().length; i++){

fleet.getThings()[i].getCompleted() ? console.log(`[x] ${fleet.getThings()[i].getName()}` ):
console.log(`[ ] ${fleet.getThings()[i].getName()}`)

}
/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */