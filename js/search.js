// Global variable representing HTML tag where the location or status message would go
var userLocation = document.getElementById("location");
// Function to get user location
function getUserLocation() {
	// Global variable

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		userLocation.innerHTML = "Your browser does not support this feature.";
	}
}

// Function to take geolocation position as a parameter then parses it to be displayed
function showPosition(location) {
	var latitude = location.coords.latitude;
	var longitude = location.coords.longitude;
	// Displays the parsed latitude and longitude to the userLocation element
	userLocation.innerHTML = "Latitude: " + latitude + "<br> Longitude: " + longitude;
}

// Function to show an error, if position cannot be attained
function showError(error) {
	var msg = "";
	switch(error.code) {
		case error.PERMISSION_DENIED:
			msg = "Please refresh and allow user location!";
			break;
		case error.POSITION_UNAVAILABLE:
			msg = "Location information is unavailable.";
			break;
		case error.TIMEOUT:
			msg = "The request to get user location timed out.";
			break;
		case error.UNKNOWN_ERROR:
			msg = "An unknown error occurred.";
			break;
	}
	// Error message displayed in the userLocation element
	userLocation.innerHTML = msg;
}