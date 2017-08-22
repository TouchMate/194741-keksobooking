'use strict';


var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира',
  'Огромный прекрасный дворец', 'Маленький ужасный дворец',
  'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];

var TYPES = ['flat', 'house', 'bungalo'];

var TIMINGS = ['12:00', '13:00', '14:00'];

var FEATURES = ['wifi', 'dishwasher', 'parking',
  'washer', 'elevator', 'conditioner'];
var offers = [];


// function getRandomFeatures() {
//   var randomLength = Math.floor(Math.random() * FEATURES.length) + 1;
//   for (var j = 0; j < randomLength; j++) {
//     console.log(FEATURES[Math.floor(Math.random() * FEATURES.length) + 1]);
//   }
//
// }

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

function addData(arr) {
  for (var i = 1; i <= 8; i++) {
    var locationX = getRandomNumber(300, 900);
    var locationY = getRandomNumber(100, 500);
    arr.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png',
      },
      offer: {
        title: TITLES[getRandomNumber(1, 8)],
        address: locationX + ', ' + locationY,
        price:
          getRandomNumber(1000, 1000000),
        type:
          TYPES[getRandomNumber(1, 3)],
        rooms:
          getRandomNumber(1, 5),
        guests:
          getRandomNumber(1, 10),
        checkin:
          TIMINGS[getRandomNumber(1, 3)],
        checkout:
          TIMINGS[getRandomNumber(1, 3)],
        features:
          FEATURES[getRandomNumber(1, 3)],
        description: '',
        photos: []
      },
      location: {
        x: locationX,
        y: locationY
      }
    });
  }
}
addData(offers);
console.log(offers);

// var newPinMap;
// for (var i = 0; i < offers.length; i++) {
//   newPinMap = document.innerHTML ='<div class=\'pin\' style=\'left:' + offers[i].location.x + 'px;' +
//   'top:' + offers[i].location.y + 'px>' + '<img src=' + offers[i].author.avatar +' class=\'rounded\' width=\'40\' height=\'40\'></div>';
// };

/*
var pinOnTheMap = document.querySelector('.tokyo_pin-map');
var fragment = document.createDocumentFragment();
debugger;
for (var i = 0; i < offers.length; i++) {
  var newPinMap = document.createElement('div');
  newPinMap.classList.add('pin');
  newPinMap.style.left = offers[i].location.x + 'px';
  newPinMap.style.top = offers[i].location.y + 'px';
  newPinMap.innerHTML = '<img src=' + offers[i].author.avatar + ' class =\'rounded\' width = \'40\' height=\'40\'>';
  fragment.appendChild(newPinMap);
}
pinOnTheMap.appendChild(fragment);
*/

