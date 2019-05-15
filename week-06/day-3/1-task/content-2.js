let wordsArr = ["apple", "banana", "cat", "dog"];
let myListItems = document.getElementsByTagName("li");
for (let i = 0; i < myListItems.length; i++){
  myListItems[i].innerHTML = wordsArr[i]
  }