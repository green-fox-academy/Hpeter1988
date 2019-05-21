function isPrime(number)
 { 
   if (number <= 1)
   return false;

   // The check for the number 2 and 3
   if (number <= 3)
   return true;

   if (number%2 == 0 || number%3 == 0)
   return false;

   for (var i=5; i*i<=number; i=i+6)
   {
      if (number%i == 0 || number%(i+2) == 0)
      return false;
   }

   return true;
 }


let mainSection = document.querySelector('section')
let divSelector = document.getElementsByTagName('div')

for (let i = 1; i <= 100; i++){
  let mainSectionElement = document.createElement("div");
  mainSectionElement.innerText = i
  mainSection.appendChild(mainSectionElement);
}

function timer(num){
isPrime(num)?
divSelector[num].classList.add('prime'):
divSelector[num].classList.add('not-prime')
}

for (let i = 0; i <= divSelector.length; i++){
setTimeout(() => {
  timer(i)
}, i * 100);
}
