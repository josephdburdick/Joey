Meteor.methods({
  insertVenue(obj) {
    check(obj, Object);
    check(obj.name, String);
    check(obj.type, String);
    check(obj.address, String);
    check(obj.city, String);

    try {
      var documentId = Venues.insert(obj);
      return documentId;
    } catch (exception) {
      return exception;
    }
  }
});
