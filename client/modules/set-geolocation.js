var setGeolocation = function setGeolocation(bool, template) {
  let
    coords = null,
    geolocation = null,
    geolocationWatchId = null,
    askPermission = Modules.client.askPermission,
    Geolocation = Modules.client.Geolocation,
    bertStatus = (permission) => {
      return {
        text: !!permission ? 'On' : 'Off',
        color: !!permission ? 'success' : 'warning'
      };
    };

  // setGeolocation: TRUE
  if (!!bool) {
    let permitted = askPermission(),
      geolocationLastChecked;
    if (!!permitted) {
      geolocation = new Geolocation(3000, true);

      geolocation.getCoordinates((coords, accuracy) => {
        Session.set('userCoords', coords);
        Session.set('geolocationWatchId', this.watchId);
        Session.set('geolocationLastChecked', this.lastCheck);

        if (template && template.cords) {
          template.coords.set(coords);
        }

        let marker = Markers.find({
          ownerId: Meteor.userId()
        }).fetch()[0];

        if (!!marker) {
          Meteor.call('upsertMarker', {
            _id: marker._id,
            ownerId: Meteor.userId(),
            type: 'User',
            coordinates: {
              lat: coords.lat,
              lng: coords.lng
            },
            updated: new Date(Session.get('geolocationLastChecked'))
          }, (error, result) => {
            if (!error) {
              console.log(`Marker updated to [${coords.lat}, ${coords.lng}]`);
            }
          });
        } else {
          markerId = Meteor.call('insertMarker', {
            ownerId: Meteor.userId(),
            type: 'User',
            coordinates: {
              lat: coords.lat,
              lng: coords.lng
            }
          }, (error, result) => {
            if (!error) {
              console.log(`Marker added at [${coords.lat}, ${coords.lng}]`);
            }
          });
        }
      });
    }
  }
};

Modules.client.setGeolocation = setGeolocation;
