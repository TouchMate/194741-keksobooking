

// var offers = [];
// var author = {
//   avatar: [
//     'url:img/avatars/user01.png', 'url:img/avatars/user02.png', 'url:img/avatars/user03.png',
//     'url:img/avatars/user04.png', 'url:img/avatars/user05.png', 'url:img/avatars/user06.png',
//     'url:img/avatars/user07.png', 'url:img/avatars/user08.png'
//   ]
// };
//
// var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира',
//   'Огромный прекрасный дворец', 'Маленький ужасный дворец',
//   'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
//   'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
// var TIMMINGS = ['12:00', '13:00', '14:00'];
//
// var APARTMENT_TYPES = [
//   'flat', 'house', 'bungalo'
// ];
// var APARMENT_FUATERES = ['wifi', 'dishwasher', 'parking',
//   'washer', 'elevator', 'conditioner'];
//
// var location = {
//   x: Math.floor(Math.random() * 900) + 300,
//   y: Math.floor(Math.random() * 500) + 100
// };
//
//
// var price = Math.floor(Math.random() * 1000000) + 1000;
// var rooms = Math.floor(Math.random() * 5) + 1;
// var guests = Math.floor(Math.random() * 100) + 1;
//

var offers = [
  {
    author: {
      avatar: 'img/avatars/user01.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '12:00',
      checkout: '12:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  },
  {
    author: {
      avatar: 'img/avatars/user02.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '12:00',
      checkout: '12:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  },
  {
    author: {
      avatar: 'img/avatars/user03.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '12:00',
      checkout: '12:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  },
  {
    author: {
      avatar: 'img/avatars/user04.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '12:00',
      checkout: '12:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  },
  {
    author: {
      avatar: 'img/avatars/user05.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '13:00',
      checkout: '13:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  },
  {
    author: {
      avatar: 'img/avatars/user06.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '12:00',
      checkout: '12:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  },
  {
    author: {
      avatar: 'img/avatars/user07.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '14:00',
      checkout: '14:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  },
  {
    author: {
      avatar: 'img/avatars/user08.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: location.x + ' ' + location.y,
      price: Math.floor(Math.random() * 1000000) + 1000,
      type: 'flat',
      rooms: Math.floor(Math.random() * 5) + 1,
      guests: Math.floor(Math.random() * 100) + 1,
      checkin: '13:00',
      checkout: '13:00',
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: []
    },
    location: {
      x: Math.floor(Math.random() * 900) + 300,
      y: Math.floor(Math.random() * 500) + 100
    }
  }
];

/*
for (var i = 0; i < offers.lenght; i++) {
var newPinMap = document.innerHTML ='<div class=\'pin\' style=\'left:' + offers[i].location.x + 'px;' +
  'top:' + offers[i].location.y + 'px>' + '<img src=' + offers[i].author.avatar +' class=\'rounded\' width=\'40\' height=\'40\'></div>';
};
*/

var pinOnTheMap = document.querySelector('.tokyo_pin-map');
var fragment = document.createDocumentFragment();
debugger;
for (var i = 0; i < offers.lenght; i++) {

  var newPinMap = document.createElement('div');
  newPinMap.classList.add('pin');
  newPinMap.style.left = offers[i].location.x + 'px';
  newPinMap.style.top = offers[i].location.y + 'px';
  newPinMap.innerHTML = '<img src=' + offers[i].author.avatar + ' class =\'rounded\' width = \'40\' height=\'40\'>';
  fragment.appendChild(newPinMap);
}
pinOnTheMap.appendChild(fragment);

