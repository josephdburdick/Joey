Meteor.methods({
  insertUserSettings(obj) {
    check(obj, {
      ownerId: String,
      type: String,
      settings: {
        locationTracking: Boolean
      }
    });

    try {
      var documentId = Settings.insert(obj);
      return documentId;
    } catch (exception) {
      return exception;
    }
  }
});
