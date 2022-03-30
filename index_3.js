var imageWrapper = document.getElementById('watch');
var skin4 = document.getElementById('red');
var skin3 = document.getElementById('purple')
var skin2= document.getElementById('pink')
var skin1 = document.getElementById('black')

var imageObject = {
    black : "images/second-Skin.png",
    Pink :"images/fourth-skin.png",
    purple:'images/third-skin.png',
    red:"images/first-skin.png",
} 
 

function WatchCreator(imageSource){
    
    const presentImages =  document.querySelector('.skin')
    presentImages.remove();
    var newImage = document.createElement('img');
    newImage.src =imageSource;
    newImage.classList.add('skin');
    imageWrapper.appendChild(newImage);
}

const ChangeImage = (imgSrc) => {
        WatchCreator(imgSrc);
}

skin1.addEventListener('click',() => {
ChangeImage(imageObject.black);
});


skin2.addEventListener('click',() => {
    ChangeImage(imageObject.Pink);
    });


skin3.addEventListener('click',() => {
    ChangeImage(imageObject.purple);
    });

skin4.addEventListener('click',() => {
    ChangeImage(imageObject.red);
    });
 
//  var div =document.getElementsByClassName('container')
 var clock = document.getElementById('current-time')
var output = document.getElementById('timePlaceHolder')
var today = new Date()
 clock.addEventListener('click' ,function(){
    
    let hours =addZero(today.getHours()); 
     let minutes =addZero( today.getMinutes());
     let secondS = addZero(today.getSeconds());
     let current_time = hours + ':'+ minutes + ':'+ secondS;
     output.innerText = current_time;
    
    // setInterval(function(){
    //    //alert('its working');
    //  secondS += 1;
     
    //  if(secondS === 60){
    //      secondS = 0;
    //      minutes += 1; 
    //  }
    // },1000)

  
    
})


function addZero(num){
     return num < 10? `0${num}`:num;
     `${hours}:${minutes}:${secondS}`;
    }

      













































































    