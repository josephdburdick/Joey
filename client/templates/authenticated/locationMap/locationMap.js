if (Meteor.isClient) {
  Template.locationMap.events({

  });
  Template.locationMap.helpers({
    locationMapOptions: (params) => {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        let self = Template.instance();

        // Map initialization options
        if (self.locationTracking.get()) {
          let coords = self.coords.get() || Session.get('userCoords');
          if (!!coords) {
            return {
              center: new google.maps.LatLng(coords.lat, coords.lng),
              disableDefaultUI: true,
              zoomControl: true,
              scrollwheel: false,
              zoom: 16
            };
          }
        } else {
          return {
            center: new google.maps.LatLng(40.783435, -73.966249),
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
            zoom: 12
          };
        }
      }
    }
  });

  Template.locationMap.onCreated(() => {

    let self = Template.instance();

    self.locationTracking = new ReactiveVar(false);
    self.coords = new ReactiveVar(false);
    self.subscribe('userSettings');
    self.subscribe('lastUserMarker');
    self.subscribe('allUsers');

    if (!!Session.get('userCoords') || !!Geolocation.latLng()) {
      let markersSub = self.subscribe('nearestMarkersByPoint', Session.get('userCoords'));
    }

    Tracker.autorun(function () {
      if (!!Settings.findOne()) {
        let locationTracking = Settings.findOne().settings.locationTracking;
        self.locationTracking.set(locationTracking);

        if (self.locationTracking.get()) {
          if (!Geolocation.latLng()) {
            self.coords.set(Modules.client.setGeolocation(true, self));
          } else {
            self.coords.set(Geolocation.latLng());
            Session.set('userCoords', Geolocation.latLng());
          }
        }
      }
    });
  });

  Template.locationMap.onRendered(() => {
    let self = Template.instance();
    // We can use the `ready` callback to interact with the map API once the map is ready.

    if (!!Geolocation.latLng()) {
      let markersSub = self.subscribe('nearestMarkersByPoint', Geolocation.latLng());
    }
      GoogleMaps.ready('locationMap', (map) => {
        // Add markers once map is ready
        let
          gmap = map.instance,
          lat = map.options.center.lat,
          lng = map.options.center.lng,

          markers = {},
          markerClusterer,
          bounds = gmap.getBounds(),
          box;

        Markers.find().observe({
          added: function (document) {
            // Create a marker for this document

            let infowindow = new google.maps.InfoWindow(),
              marker;

            if (document.ownerId == Meteor.userId()) {
              /*
               * Current user marker
               */
              marker = new google.maps.Marker({
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(document.coordinates.lat, document.coordinates.lng),
                map: map.instance,
                // We store the document _id on the marker in order
                // to update the document within the 'dragend' event below.
                _id: document._id,
                ownerId: document.ownerId //,
                // icon: Modules.client.UI.createIcon('png', {
                //   name: 'flag2',
                //   size: new google.maps.Size(256, 256),
                //   scaledSize: new google.maps.Size(64, 64),
                //   origin: new google.maps.Point(0, 0),
                //   anchor: new google.maps.Point(32, 64)
                // })
              });
              marker.setTitle('You are here');
            }

            /*
             * Location markers
             */
            if (document.ownerId !== Meteor.userId()) {
              marker = new google.maps.Marker({
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(document.coordinates.lat, document.coordinates.lng),
                map: map.instance,
                // We store the document _id on the marker in order
                // to update the document within the 'dragend' event below.
                _id: document._id,
                ownerId: document.ownerId //,
                // icon: Modules.client.UI.createIcon('png', {
                //   name: 'flag',
                //   size: new google.maps.Size(128, 128),
                //   scaledSize: new google.maps.Size(42, 42),
                //   origin: new google.maps.Point(0, 0),
                //   anchor: new google.maps.Point(21, 42)
                // })
              });
            }
            // marker.set('title', venue.name);
            marker.addListener('click', function (e) {
              if (document.type === "user".toLowerCase()){
                let user;
                if (document.ownerId === Meteor.userId()){
                  user = Meteor.user();
                } else {
                  user = Meteor.users.findOne({_id: document.ownerId});
                }
                markerContent = ['<div class="poi-info-window gm-style">',
                                    '<div class="title full-width">Hi, ' + user.username + '</div>',
                                  '</div>'].join('\n');
              } else if ((document.type === "venue".toLowerCase())){
                let _venue = Venues.findOne(document.ownerId),
                  markerContent = ['<div class="poi-info-window gm-style">',
                                      '<div class="title full-width">' + _venue.name + '</div>',
                                      '<div class="text-muted">' + _venue.type + '</div>',
                                      '<div class="address">' + _venue.address + ', ' + _venue.city + '</div>',
                                    '</div>'].join('\n');
              }
              infowindow.setContent(markerContent);
              infowindow.open(map.instance, marker);
            });

            // Store this marker instance within the markers object.
            markers[document._id] = marker;
          },
          changed: function (newDocument, oldDocument) {
            markers[newDocument._id].setPosition({
              lat: newDocument.coordinates.lat,
              lng: newDocument.coordinates.lng
            });
          },
          removed: function (oldDocument) {
            // Remove the marker from the map
            markers[oldDocument._id].setMap(null);

            // Clear the event listener
            google.maps.event.clearInstanceListeners(
              markers[oldDocument._id]);

            // Remove the reference to this marker instance
            delete markers[oldDocument._id];
          }
        });

        markerClusterer = new Modules.client.markerClusterer(map, markers);

      });
  });

}
