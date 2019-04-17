'use strict'

//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

class PostIt {

  backgroundColor: string;
  textOnIt: string;
  textColor: string;

  constructor(backgroundColor: string, textOnIt: string, textColor: string){
    this.backgroundColor = backgroundColor
    this.textOnIt = textOnIt
    this.textColor = textColor
  }
textInfo(): void {
  console.log(`an ${this.backgroundColor} with ${this.textColor} text: ${this.textOnIt}`)
}
}

const myText: PostIt = new PostIt('Orange','Idea 1','blue');
myText.textInfo();
const myText2: PostIt = new PostIt('Pink','Awesome','black');
myText2.textInfo();
const myText3: PostIt = new PostIt('Yellow','Superb','green');
myText3.textInfo();