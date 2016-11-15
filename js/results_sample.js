// Global variable for map element
var locationElement = document.getElementById("map");
var latlng;
var zoom;

// Hardcoded objects for now
var McMaster = {
	label: "A",
	latitude: 43.260879,
	longitude: -79.91922540000002,
	info: 	"<div class='infoWindow'" +
				"<div id='siteNotice'>" +
				"</div>" +
				"<h4 class='infoWindowHeading'>McMaster University</h4>" +
				"<h5 class='infoWindowGoToReview'><a href='individual_sample.html'>Go to review</a></h5>" +
				"<div class='infoWindowContent'>" +
				"<p><br><b>McMaster University</b> is " +
				"is a public research university located in Hamilton, Ontario, Canada. " +
				"The main campus is located on 121 hectares (300 acres) " + 
				"of land near the residential neighbourhoods of Ainslie Wood and Westdale, " +
				"adjacent to Hamilton's Royal Botanical Gardens. " +
				"The university operates six academic faculties: the DeGroote School of Business, " + 
				"Engineering, Health Sciences, Humanities, Social Science, and Science." +
				"<br><br>Learn more from <a href='https://en.wikipedia.org/wiki/McMaster_University'>" +
				"Wikipedia</a></p>" +
				"</div>" +
			"</div>"
};

var Western = {
	label: "B",
	latitude: 43.00959710000001,
	longitude: -81.27373360000001,
	info: 	"<div class='infoWindow'" +
				"<div id='siteNotice'>" +
				"</div>" +
				"<h4 class='infoWindowHeading'>Western University</h4>" +
				"<h5 class='infoWindowGoToReview'><a href='individual_sample.html'>Go to review</a></h5>" +
				"<div class='infoWindowContent'>" +
				"<p><br><b>University of Western Ontario</b> is " +
				" re-branded as Western University, " +
				"is a public research university located in London, Ontario, Canada. " + 
				"It incorporated Huron University College, which had been founded in 1863.  " +
				"The first four faculties were Arts, Divinity, Law and Medicine. " +
				"The Western University of London was eventually made non-denominational in 1908. " + 
				"<br><br>Learn more from <a href='https://en.wikipedia.org/wiki/University_of_Western_Ontario'>" +
				"Wikipedia</a></p>" +
				"</div>" +
			"</div>"
};

var Laurier = {
	label: "C",
	latitude: 43.47235319999999,
	longitude: -80.52633989999998,
	info: 	"<div class='infoWindow'" +
				"<div id='siteNotice'>" +
				"</div>" +
				"<h4 class='infoWindowHeading'>Wilfred Laurier University</h4>" +
				"<h5 class='infoWindowGoToReview'><a href='#'>Go to review</a></h5>" +
				"<div class='infoWindowContent'>" +
				"<p><br><b>Wilfred Laurier University</b> is " +
				"a Canadian public research university located in Waterloo, Ontario, Canada. " +
				"Laurier has several other campuses, including in Toronto, Ontario, " + 
				"Brantford, Ontario, Kitchener, Ontario and an office in Chongqing, China. " +
				"It is named in honour of Sir Wilfrid Laurier, the seventh Prime Minister of Canada. " +
				"<br><br>Learn more from <a href='https://en.wikipedia.org/wiki/Wilfrid_Laurier_University'>" +
				"Wikipedia</a></p>" +
				"</div>" +
			"</div>"
};

// Creates geolocation position object
function getUserLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayMap, displayError)
	} else {
		locationElement.innerHTML = "Your browser does not support Google Maps API.";
	}
}

// Saves the latitude and longitude coordinates and initializes the map for display
function displayMap(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	latlng = new google.maps.LatLng(latitude, longitude);
	zoom = 8;
	initMap();
}

// Creates a map object with the coordinates as the center
function initMap() {
	map = new google.maps.Map(locationElement, {
		center: latlng,
		zoom: zoom
	});


    // // This event listener calls addMarker() when the map is clicked.
    // google.maps.event.addListener(map, 'click', function(event) {
    //   addMarker(event.latLng, map);
    // });

    // Creates LatLng objects for universities
    mcmaster = {lat: McMaster["latitude"], lng: McMaster["longitude"]};
    western = new google.maps.LatLng(Western["latitude"], Western["longitude"]);
    laurier = new google.maps.LatLng(Laurier["latitude"], Laurier["longitude"]);

    // Hardcoded Info Window which will open when marker is clicked
    mcmasterWindow = createInfoWindow(McMaster["info"]);
    westernWindow = createInfoWindow(Western["info"]);
    laurierWindow = createInfoWindow(Laurier["info"]);
	
	// Add hardcoded markers at the center of the map.
    addMarker(mcmaster, map, McMaster["label"], mcmasterWindow);
    addMarker(western, map, Western["label"], westernWindow);
    addMarker(laurier, map, Laurier["label"], laurierWindow);

}

// Helper function to create InfoWindow when marker is clicked
function createInfoWindow(contentString) {
	var infoWindow = new google.maps.InfoWindow({
		content: contentString
	});

	return infoWindow;
}

function addMarker(location, map, label, infoWindow) {
	// Add the marker at the clicked location, and add the next-available label
	// from the array of alphabetical characters.
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		label: label
	});

	// TODO: Remove window when another marker is clicked
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}

// If user denies permission for location, display map defaulting at McMaster University :P
function displayError(error) {
	// var msg = "";
	// switch(error.code) {
	// 	case error.PERMISSION_DENIED:
	// 		msg = "User denied the request for Geolocation."
	// 		break;
	// 	case error.POSITION_UNAVAILABLE:
	// 		msg = "Location information is unavailable."
	// 		break;
	// 	case error.TIMEOUT:
	// 		msg = "The request to get user location timed out."
	// 		break;
	// 	case error.UNKNOWN_ERROR:
	// 		msg = "An unknown error occurred."
	// 		break;
	// }
	// locationElement.innerHTML = msg;
	latlng = new google.maps.LatLng(43.260879, -79.91922540000002);
	zoom = 15;
	initMap()
}