'use strict'

const kids = [
  { 'petName': 'Wattled crane', 'owner': 'Bryant' },
  { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
  { 'petName': 'Mynah, common', 'owner': 'Nelie' },
  { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
  { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
  { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
  { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
  { 'petName': 'Bison, american', 'owner': 'Tommie' },
  { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
  { 'petName': 'Carpet snake', 'owner': 'Veda' },
  { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

let list = document.querySelector('#pets')

for (let i = 0; i < kids.length; i++){
  let ArticleElement = document.createElement("article");
  list.appendChild(ArticleElement);
}

let articles = document.querySelector('article')

for (let i = 0; i < kids.length; i++){
  let h3 = document.createElement('h3');
  h3.innerText = kids[i].owner
  let p = document.createElement('p');
  p.innerText = kids[i].petName
  articles.appendChild(h3);
  articles.appendChild(p);
}