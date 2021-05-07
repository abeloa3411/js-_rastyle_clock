function updateClock(){
   var hours = document.getElementById('hours');
   var minutes = document.getElementById('minutes');
   var seconds = document.getElementById('seconds');
   var ampm = document.getElementById('ampm');

   var h = new Date().getHours();
       m = new Date().getMinutes();
       s = new Date().getSeconds();
       am = 'AM'
   
   if (h >=12) {
     h = h -12
     var am = "PM" 
   }

   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;


  minutes.innerHTML = m;
  hours.innerHTML = h;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
  

}

var interval = setInterval('updateClock()', 1000)




function changePhoto() {
   const clockContainer = document.querySelector('.clock')
   const btn = document.querySelector('.btn')

   const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg']


   btn.addEventListener('click', () =>{
      const photoIndex = Math.floor(Math.random() * images.length)
      var selectedImage = images[photoIndex]

      document.getElementById('image-tag').src = `./images/${selectedImage}`
   });
}

changePhoto();

const text = document.querySelector('.heading');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";


for (let i = 0; i < splitText.length; i++) {
   text.innerHTML += "<span>" + splitText[i] + "</span>"
   
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
   const span = text.querySelectorAll('span')[char];
   span.classList.add('fade');
   char++

   if (char === splitText) {
      complete();
      return;
   }
}

function complete() {
  clearInterval(timer);
  timer = null; 
}




