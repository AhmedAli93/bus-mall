'use strict'

var past = [];
var totalClick = 0;
Image.allImage = [];
var image = ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg']
var imagesToReader = [];
var random1 = document.getElementById('image1');
var random2 = document.getElementById('image2');
var random3 = document.getElementById('image3');

function Image(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.clickTotal = 0;
  this.shownTotal = 0;
  this.id = ''
  this.shown = false;
  Image.allImage.push(this);
}

  for (var i = 0; i < image.length; i++) {
    var namePath = image[i].split('/');
    var name = namePath[1].split('.')[0];
    new Image(name, image[i]);

};

function generateThree() {

  var counter = 0;
  while(counter < 3){
    var img = Image.allImage[Math.floor(Math.random() * 20)];
    if(!img.shown){
      imagesToReader.push(img)
      counter++;
      img.shown = true;
      img.shownTotal++;
    }
  }


}



function create(){
    random1.setAttribute('src', imagesToReader[0].filepath);
    random2.setAttribute('src', imagesToReader[1].filepath);
    random3.setAttribute('src', imagesToReader[2].filepath);
};

function handleClick(e) {


  //console.log(e.target.currentSrc.slice(48));
   // console.log(e);
  var selection = e.target.currentSrc.slice(52, -4);
  for (var i = 0; i < Image.allImage.length; i++){
    if(selection === Image.allImage[i].name){
      Image.allImage[i].shownTotal++
    }
  }
  totalClick++;
  console.log(totalClick);

  for(var i = 0; i <Image.allImage.length; i++){
    var imageAllArray = Image.allImage[i];
    for(var j = 0; j < imagesToReader.length; j++){
      var currentReader = imagesToReader[j];
      if (currentReader.name !== imageAllArray.name){
        console.log('current reader', currentReader)
        imageAllArray.shown = false;
      }
    }
  }

  imagesToReader.length = 0;
  console.log('allimages', Image.allImage)

  generateThree();
  create();
}

//Call Action
random1.addEventListener('click', handleClick);
random2.addEventListener('click', handleClick);
random3.addEventListener('click', handleClick);
generateThree();
create();
