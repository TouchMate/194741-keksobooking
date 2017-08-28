'use strict';

var offers = [];
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира',
  'Огромный прекрасный дворец', 'Маленький ужасный дворец',
  'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];

var TYPES = ['flat', 'house', 'bungalo'];

var TIMINGS = ['12:00', '13:00', '14:00'];

var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

var pinOnTheMap = document.querySelector('.tokyo__pin-map');

var fragment = document.createDocumentFragment();

var offerDialog = document.querySelector('#offer-dialog');
var dialogPanelTemplate = document.getElementById('lodge-template').content;
var fragmentFeatures = document.createDocumentFragment();

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(arra1) {
  var ctr = arra1.length;
  var temp;
  var index;
  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function getRandomAmount(paramArray) {
  var randomLength = getRandomNumber(1, paramArray.length);
  var arr = [];
  var arrayShuffled = shuffle(paramArray);
  for (var j = 1; j < randomLength; j++) {
    arr.push(arrayShuffled[j]);
  }
  return arr;
}

function createArray(arrElement) {
  for (var i = 1; i <= 8; i++) {
    var locationX = getRandomNumber(300, 900);
    var locationY = getRandomNumber(200, 500);
    arrElement.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png'
      },
      offer: {
        title: TITLES[getRandomNumber(1, 8)],
        address: locationX + ', ' + locationY,
        price:
          getRandomNumber(1000, 1000000),
        type:
          TYPES[getRandomNumber(1, 2)],
        rooms:
          getRandomNumber(1, 5),
        guests:
          getRandomNumber(1, 10),
        checkin: TIMINGS[getRandomNumber(1, 2)],
        checkout: TIMINGS[getRandomNumber(1, 2)],
        features: getRandomAmount(FEATURES),
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
function createNewPinMap(object, element) {
  for (var q = 0; q < object.length; q++) {
    var newPinMap = document.createElement('div');
    var pinWidth = 56;
    var pinHeight = 75;
    newPinMap.classList.add('pin');
    newPinMap.style.left = offers[q].location['x'] - pinWidth / 2 + 'px';
    newPinMap.style.top = offers[q].location['y'] - pinHeight + 'px';
    newPinMap.innerHTML = '<img src=' + offers[q].author.avatar + ' class = "rounded" width= "40" height="40">';
    element.appendChild(newPinMap);
  }
}
function foundApartmentType(arr) {
  var apartmentTypeEng = arr.offer.type;
  var apartmentTypeRu = '';
  switch (apartmentTypeEng) {
    case 'flat':
      apartmentTypeRu = 'Квартира';
      return apartmentTypeRu;
    case 'house':
      apartmentTypeRu = 'Дом';
      return apartmentTypeRu;
    default:
      apartmentTypeRu = 'Бунгало';
      return apartmentTypeRu;
  }
}

function createDialogPanel(panel) {
  var dialogPanel = dialogPanelTemplate.cloneNode(true);
  var lodgeType = foundApartmentType(panel);

  var arrTypesLength = TYPES.length;
  for (var e = 1; e < arrTypesLength; e++) {
    var newFeatures = document.createElement('span');
    newFeatures.className = 'feature__image feature__image--' + panel.offer.features[e];
    fragmentFeatures.appendChild(newFeatures);

  }
  dialogPanel.querySelector('.lodge__title').textContent = panel.offer.title;
  dialogPanel.querySelector('.lodge__address').textContent = panel.offer.address;
  dialogPanel.querySelector('.lodge__price').innerHTML = panel.offer.price + ' &#x20bd;/ночь';
  dialogPanel.querySelector('.lodge__type').textContent = lodgeType;
  dialogPanel.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + panel.offer.guests + ' гостей в ' +
    panel.offer.rooms + ' комнатах';
  dialogPanel.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + panel.offer.checkin +
    ', выезд до ' + panel.offer.checkout;
  dialogPanel.querySelector('.lodge__features').appendChild(fragmentFeatures);
  dialogPanel.querySelector('.lodge__description').textContent = panel.offer.description;
  dialogPanel.querySelector('.dialog__title img').setAttribute('src', offers.author.avatar);

  return dialogPanel;
}

createArray(offers);
createNewPinMap(offers, fragment);
pinOnTheMap.appendChild(fragment);
var fragmentPanel = document.createDocumentFragment();
fragmentPanel.appendChild(createDialogPanel(offers[0]));
offerDialog.replaceChild(fragmentPanel, offerDialog.children[1]);


