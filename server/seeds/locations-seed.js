Meteor.startup(function () {
  console.log(Venues.find().count() + ' venues');
  console.log(Markers.find().count() + ' markers');
  console.log(Networks.find().count() + ' networks');
  console.log(Meteor.users.find().count() + ' users');

  // Seed Venues database
  if (Venues.find().count() === 0) {
    var items = JSON.parse(Assets.getText('seeds/locations--nyc-hotspots.json'));
    _.each(items, function (item) {
      // handle dirty seed data
      /* jshint ignore:start */
      if (["", null].indexOf(item.location.name) > -1 || item.location.name.match(/^[0-9]+$/) != null) {
        item.location.name = "Free Hotspot";
      } else {
        item.location.name = item.location.name.trim();
      }
      /* jshint ignore:end */

      item.location.lat = Number(item.location.lat);
      item.location.lng = Number(item.location.lng);

      // Create and add Venue
      Meteor.call('insertVenue', {
        name: item.location.name,
        address: item.location.address,
        type: item.location.type,
        city: item.location.city
      }, function (error, response) {
        if (error) {
          throw new Meteor.Error(500, error);
        }
        if (!error) {
          var venueId = response;
          console.log(`Venue: ${venueId}`);

          // Create, add, and link Network to Venue
          Meteor.call('insertNetwork', {
            ownerId: venueId,
            name: item.network.name,
            isPublic: item.network.isPublic,
            hasPassword: item.network.hasPassword,
            verified: item.network.verified
          }, function (error, response) {
            if (!error) {
              console.log(`Network: ${response}`);
            }
            if (error) {
              console.log(error);
            }
          });
          // Create, add, and link Marker to Venue
          Meteor.call('insertMarker', {
            ownerId: venueId,
            type: "Venue",
            coordinates: {
              lng: item.location.lng,
              lat: item.location.lat
            }
          }, function (error, response) {
            if (!error) {
              console.log(`Marker: ${response}`);
            }
            if (error) {
              console.log(error);
            }
          });

        }
      });
    });

  }
});
