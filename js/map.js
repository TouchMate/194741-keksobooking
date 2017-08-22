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

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}
function getRandomAmount(paramArray) {
  var randomLength = getRandomNumber(1, paramArray.length);
  var arr = [];
  for (var j = 0; j < randomLength; j++) {
    arr.push(paramArray[Math.floor(Math.random() * paramArray.length) + 1]);
  }
  return arr;
}

for (var i = 1; i <= 8; i++) {
  var locationX = getRandomNumber(300, 900);
  var locationY = getRandomNumber(100, 500);
  offers.push({
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
        FEATURES[getRandomAmount(FEATURES)],
      description: '',
      photos: []
    },
    location: {
      x: locationX,
      y: locationY
    }
  });
}
//
// var newPinMap;
// for (var k = 0; k < offers.length; k++) {
//   newPinMap = document.innerHTML ='<div class=\'pin\' style=\'left:' + offers[k].location['x'] + 'px;' +
//   'top:' + offers[k].location['y'] + 'px>' + '<img src=' + offers[k].author.avatar +' class=\'rounded\' width=\'40\' height=\'40\'></div>';
// };

var pinOnTheMap = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
for (var q = 0; q < offers.length; q++) {
  var newPinMap = document.createElement('div');
  newPinMap.classList.add('pin');
  newPinMap.style.left = offers[q].location['x'] - 24 + 'px';
  newPinMap.style.top = offers[q].location['y'] - 75 + 'px';
  newPinMap.innerHTML = '<img src=' + offers[q].author.avatar + ' class =\'rounded\' width = \'40\' height=\'40\'>';
  fragment.appendChild(newPinMap);
}
pinOnTheMap.appendChild(fragment);



