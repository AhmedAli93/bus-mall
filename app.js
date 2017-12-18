'use strict'

 Image.allImage = [];

function Image(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.clicktotal = 0;
  this.showntotal = 0;
  this.id = ''
  Image.allImage.push(this);
}

new Image('bag', 'img/bag.jpg');
new Image('banana', 'img/banana.jpg');
new Image('bathroom', 'img/bathroom.jpg');
new Image('boots', 'img/boots.jpg');
new Image('breakfast', 'img/breakfast.jpg');
new Image('bubblegum', 'img/bubblegum.jpg');
new Image('chair', 'img/chair.jpg');
new Image('cthulhu', 'img/cthulhu.jpg');
new Image('dog-duck', 'img/dog-duck.jpg');
new Image('dragon', 'img/dragon.jpg');
new Image('pen', 'img/pen.jpg');
new Image('pet-sweep', 'img/pet-sweep.jpg');
new Image('scissors', 'img/scissors.jpg');
new Image('shark', 'img/shark.jpg');
new Image('sweep', 'img/sweep.png');
new Image('tauntaun', 'img/tauntaun.jpg');
new Image('unicorn', 'img/unicorn.jpg');
new Image('usb', 'img/usb.gif');
new Image('water-can', 'img/water-can.jpg');
new Image('wine-glass', 'img/wine-glass.jpg');
