// let map;
// function initMap() { 
//   let uluru = { lat: 55.747294, lng: 37.626166 };
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: uluru,
//     zoom: 13,
//     scrollwheel: false,
//     styles: [
//     {
//         "featureType": "administrative",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.province",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 65
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": "50"
//             },
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "lightness": "30"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "lightness": "40"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "hue": "#ffff00"
//             },
//             {
//                 "lightness": -25
//             },
//             {
//                 "saturation": -97
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "lightness": -25
//             },
//             {
//                 "saturation": -100
//             }
//         ]
//     }
// ]

//   });
  
//   let icons = {
//         position: {
//             icon: {
//                 url: './assets/img/maps-and-flags.png',
//                 size: new google.maps.Size(90, 90),
//                 scaledsize: new google.maps.Size(60, 60)
//             }
//         },
//     };

//     let features = [{
//             position: new google.maps.LatLng(55.745036, 37.629749),
//             type: 'position',
//             contentString: 'First'
//         }
//     ];
  
//   let infowindow = new google.maps.InfoWindow();
  
//   features.forEach(feature => {
//     let  marker = new google.maps.Marker({
//       position: feature.position,
//       icon: icons[feature.type].icon,
//       map: map,
//       title: feature.contentString
//     });
//   });
// }

// google.maps.event.addDOMListener(window, 'load', initMap);

let feedbackButton = document.getElementById('feedback');
let feedback = document.getElementById('feedbackPopup');
let closeButton = document.querySelector('.feedback-popup__closeButton');
let body = document.body;

feedbackButton.addEventListener('click', (e) => {
    e.preventDefault();

    feedback.classList.add('feedback-popup--active');
    body.classList.add('body--active');
});

closeButton.addEventListener('click', () => {
    feedback.classList.remove('feedback-popup--active');
    body.classList.remove('body--active');
});

let print = document.getElementById('print');

print.addEventListener('click', (e) => {
    e.preventDefault();
    window.print();
});
