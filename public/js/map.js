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
	var ZOOM = 15;
	var MAXZOOM = 17;
	var MINZOOM = 13;
	var MINVAL = 1;
	var MAXVAL = 11;
	var _pin = {'lat':'19.432608','lng':'-99.133209','name':'Lomas Estrella','phone':'0123456789'}

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: ZOOM,
			maxZoom: MAXZOOM,
			minZoom:MINZOOM,
			center: {lat: lat, lng: lng}//ubicación por default
		});
		placeMarker(map, _pin);
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
			anchor: new google.maps.Point(20, 25),
			scaledSize: new google.maps.Size(20, 25)
		}));

		var infoWindow = new google.maps.InfoWindow({
			content: dataMarker(pin)
		});

		marker.addListener('click', function() {
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

	function callMarkers(mapOptions){
		var url = mapOptions.url;
		var data = {};
		data.latitud = lat;
		data.longitud = lng;
		data.radio = getRadio(map.zoom);

		if(mapOptions.name){
			data.farmacia = mapOptions.name;
		}
		console.log(data)
		$.ajax({
			type:'POST',
			url:url,
			data: data,
			headers:{
				'X-CSRFToken':$("[name='csrfmiddlewaretoken']").val()
			}
		})
		.done(function(data,textStatus,jqXHR){
			if(jqXHR.status==200){
				console.log(data);
				if(data.Listado){
					printMarkers(data.Listado);
				}
				
			}
			else{
				$("#mapContainer").remove();
			}
		})
		.fail(function (jqXHR,textStatus,errorTrhown){
			$("#mapContainer").remove();
		})
		.always(function (){
			$("#mapContainer .loader").remove();
		});
	}

	function printMarkers(pins) {
		//pintamos cada uno de los pines que recibimos de back
		for (i = 0; i < pins.length; i++) {
			var srtPin = 'l' + pins[i].latitud + ',ln' + pins[i].longitud;
			if(!latlngPins.includes(srtPin)){

				// se agrega un string de las coordenadas del pin al arreglo para no pintar pines repetidos
				latlngPins.push(srtPin);

				//hacemos uso de la función que pinta un pin, que utiliza initSingleMap
				placeMarker(map,pins[i]);
			}
		}
	}

	function getRadio(zoom){
		return parseInt((((zoom-MAXZOOM)/(MINZOOM-MAXZOOM))*(MAXVAL-MINVAL))+MINVAL);
	}

	function start(){
		initMap();
	}

	return{
		start:start
	}
}();
