let startup = () => {
  Meteor.startup(function () {
    GoogleMaps.load();
    _geolocation();
    _setGeolocation();
    _markerClusterer();
    _UI();
  });
};

var _geolocation = () => Modules.client.Geolocation;

var _setGeolocation = () => Modules.client.setGeolocation();

var _markerClusterer = () => Modules.client.markerClusterer();

var _UI = () => Modules.client.UI;

Modules.client.startup = startup;
