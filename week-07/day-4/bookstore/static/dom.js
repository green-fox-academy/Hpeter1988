document.querySelector('h1').style.color = 'red'
 
const xhr = new XMLHttpRequest();
xhr.open('GET', "http://localhost:3000/showtitles", true);
//data[i].images.downsized_still.url
xhr.send(null);
xhr.onload = () => {
  let data = JSON.parse(xhr.responseText)
  tableCreator(data)
  }
;


function tableCreator(result){
  let list = document.querySelector("body");
  for (let i = 0; i < result.length; i++){
  let element = document.createElement("h1");
    element.innerText = result[i].book_name;
    list.appendChild(element);
}
}