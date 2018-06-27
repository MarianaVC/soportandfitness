//https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition
//https://stackoverflow.com/questions/17382128/google-maps-api-center-map-on-clients-current-location
//https://developers.google.com/maps/documentation/javascript/?hl=es-419
//https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple?hl=es-419

var PinMap = function(){
	var map;
	var mapOptions;
	var lat = 19.432608;
	var lng = -99.133209;
	var latlngPins = [];
	var ZOOM = 13;
	var MAXZOOM = 17;
	var MINZOOM = 13;
	var MINVAL = 1;
	var MAXVAL = 11;
	var infoWindow;
	var _pin = {'lat':'19.432608','lng':'-99.133209','name':'Lomas Estrella','phone':'0123456789'}

	function initMap() {
		var pinArray = $("#map").data('pin');
		lat = parseFloat(pinArray[0].lat);
		lng = parseFloat(pinArray[0].lng);

		infoWindow = new google.maps.InfoWindow();
		
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: ZOOM,
			center: {lat: lat, lng: lng}
		});
		printMarkers(pinArray);

		$(".moveMap").addClass('active');
		$(".moveMap").on('click', centerMap);
	}

	function placeMarker(map, pin){
		var marker = new google.maps.Marker({
			position: {lat: parseFloat(pin['lat']), lng: parseFloat(pin['lng']) },
			map: map,
			title: pin['name']
		});

		marker.setIcon(({
			url: '/images/pin.png',
			size: new google.maps.Size(40, 50),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(30, 38),
			scaledSize: new google.maps.Size(30, 38)
		}));

		marker.addListener('click', function() {
			infoWindow.close();
			infoWindow = new google.maps.InfoWindow({
				content: dataMarker(pin)
			});
			infoWindow.open(map, marker);
		});
	}

	function dataMarker(pin){
		var str = '<div class="info-window">'
		str += '<p>' + pin['name'] + '</p>';
		str += '<span>' + pin['phone'] + '</span>';
		str += '</div>';
		return str;
	}

	function printMarkers(pins) {
		//pintamos cada uno de los pines que recibimos de back
		for (i = 0; i < pins.length; i++) {
			placeMarker(map,pins[i]);
		}
	}

	function centerMap(e){
		e.preventDefault();
		var target = $(e.currentTarget);
		var lat = parseFloat(target.data('lat'));
		var lng = parseFloat(target.data('lng'));
		var center = new google.maps.LatLng(lat, lng);
		var top = ($("#map").offset().top) - $("#header").height();

		map.panTo(center);
		map.setZoom(15);

		$('html, body').animate({
			scrollTop: top
		}, 1000);
		
	}

	function start(){
		initMap();
	}

	return{
		start:start
	}
}();
