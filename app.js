'use strict'

 Image.allImage = [];
 var image = ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg']
var imagesToReader = [];

function Image(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.clicktotal = 0;
  this.showntotal = 0;
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
    var img = image[Math.floor(Math.random() * 20)];
    if(!img.shown){
      imagesToReader.push(img)
      counter++;
      img.shown = true;
      img.showntotal++;
    }
  }
};
