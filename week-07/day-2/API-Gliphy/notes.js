
const xhr = new XMLHttpRequest();
xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=cat&api_key=vckNh33uHWKBHd4wkK8JZBKqzKvQW2mb&limit=16", true);
//data[i].images.downsized_still.url
xhr.send(null);
xhr.onload = () => {
 let data = JSON.parse(xhr.responseText)
 let articles = document.querySelector('.Container')
 for(let i = 0; i < 16; i++){
   let a = document.createElement('a');
   let img = document.createElement('img');
   img.setAttribute("src", data.data[i].images.downsized_still.url)
   a.appendChild(img)
   a.setAttribute('href', data.data[i].images.original.url)
   articles.appendChild(a)
 }
};

