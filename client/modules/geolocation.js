// var Geolocation = function Geolocation() {
function Geolocation(maximumAge, accurate) {

  this.settings = {
    'maximumAge': maximumAge,
    'accurate': accurate
  };
}

Geolocation.prototype = {
  position: {
    latitude: null,
    longitude: null,
    altitude: null,
    accuracy: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  },
  lastCheck: null,
  callback: null,
  watchId: null,
  onSuccess: function (position) {
    this.position.latitude = position.coords.latitude;
    this.position.longitude = position.coords.longitude;
    this.position.altitude = position.coords.altitude;
    this.position.accuracy = position.coords.accuracy;
    this.position.altitudeAccuracy = position.coords.altitudeAccuracy;
    this.position.heading = position.coords.heading;
    this.position.speed = position.coords.speed;
    this.lastCheck = new Date(position.timestamp);

    var pos = {
      lat: this.position.latitude,
      lng: this.position.longitude
    };
    // call callback with position and accuracy parameters
    this.callback(pos, this.position.accuracy);
  },
  onError: function (error) {
    var message;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "You must give permission to use your location to calculate distances.";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "There was a problem getting your location from your device. Please try again.";
        break;
      case error.TIMEOUT:
        message = "It took too long getting your position. Please try again.";
        break;
      default:
        message = "An unknown error has occured. Please try again.";
        break;
    }
    Bert.alert(message, 'warning', 'fixed-top');
    // this.callback = message;
  },
  getCoordinates: function (callback) {
    // Helper function to bind scope to callback function as seen at http://stackoverflow.com/questions/183214/javascript-callback-scope
    function bind(scope, fn) {
      return function () {
        fn.apply(scope, arguments);
      };
    }
    // Assign the callback function to the local member
    this.callback = callback;
    // watchPosition is a method that gets called each time the position changes. Making sure it's only getting called once (watchId can be used to stop the function when necessary
    if (this.watchId === null) {
      // notice usage of the bind function here
      this.watchId = navigator.geolocation.watchPosition(bind(this, this.onSuccess), bind(this, this.onError), {
        maximumAge: this.settings.maximumAge,
        enableHighAccuracy: this.settings.accurate
      });
    }
  }
};

Modules.client.Geolocation = Geolocation;
