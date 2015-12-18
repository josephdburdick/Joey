Meteor.publish('allUserMarkers', function () {
  if (this.userId) {
    return Markers.find({
      ownerId: this.userId
    }, {
      sort: {
        created: -1
      }
    });
  }
  this.ready();
});

Meteor.publish('lastUserMarker', function () {
  if (this.userId) {
    return Markers.find({
      ownerId: this.userId
    }, {
      sort: {
        created: -1
      },
      limit: 1,
    });
  }
  this.ready();
});

Meteor.publish('allPublicMarkers', function () {
  if (this.userId) {
    return Markers.find({
      // ownerId: !this.userId
    }, {
      sort: {
        created: -1
      },
      limit: 40
    });
  }
  this.ready();
});


Meteor.publish('nearestMarkersByPoint', function (coords) {
  if (this.userId) {
    check(coords, Modules.both.validateCoordinates);
    let ownerIds;
    let markerCursor = Markers.find({
      'coordinates': {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [coords.lng, coords.lat],
            $maxDistance: Math.round(3218.688 / 2) //Math.round(params.distanceLimit),
          },
          spherical: true
        }
      }
    }, {
      limit: 40
    });
    ownerIds = markerCursor.map(function (marker) {
      return marker.ownerId;
    });

    return [
      markerCursor,
      Venues.find({
        _id: {
          $in: ownerIds
        }
      }),
      Networks.find({
        ownerId: {
          $in: ownerIds
        }
      })
    ];
  }
});

// Meteor.publish('nearestMarkersByMapBounds', function (box) {
//   if (this.userId) {
//     console.log(box);
//     check(box, {
//       sw: {
//         lat: Number,
//         lng: Number
//       },
//       ne: {
//         lat: Number,
//         lng: Number
//       }
//     });
//
//     let ownerIds;
//     let markerCursor = Markers.find({
//       'coordinates': {
//         $geoWithin: {
//           $box: [
//              [box.sw.lng, box.sw.lat],
//              [box.ne.lng, box.ne.lat]
//            ]
//         }
//       }
//     }, {
//       limit: 40
//     });
//     ownerIds = markerCursor.map(function (marker) {
//       return marker.ownerId;
//     });
//
//     return [
//       markerCursor,
//       Venues.find({
//         _id: {
//           $in: ownerIds
//         }
//       }),
//       Networks.find({
//         ownerId: {
//           $in: ownerIds
//         }
//       })
//     ];
//   }
// });
