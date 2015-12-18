Meteor.methods({
  insertMarker(obj) {
    check(obj, {
      ownerId: String,
      type: String,
      coordinates: Modules.both.validateCoordinates,
    });

    try {
      var documentId = Markers.insert(obj);
      return documentId;
    } catch (exception) {
      return exception;
    }
  }
});
