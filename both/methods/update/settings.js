Meteor.methods({
  setLocationTracking(locationTracking) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'You must be logged in to continue.');
    }
    check(locationTracking, Boolean);
    try {
      var documentId = Settings.update({
        ownerId: Meteor.userId()
      }, {
        $set: {
          "settings.locationTracking": locationTracking
        }
      });
      return documentId;
    } catch (exception) {
      return exception;
    }
  },
  updateUserSettings(obj) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'You must be logged in to continue.');
    }
    check(obj, {
      ownerId: String,
      username: String,
      settings: {
        locationTracking: Boolean
      }
    });
    let newUsername = obj.username,
      changedUsername,
      changedTracking;

    if (newUsername !== Meteor.user().username) {
      changedUsername = Meteor.call('changeUsername', newUsername);
      changedTracking = Meteor.call('setLocationTracking', obj.settings.locationTracking);
    }
    obj.type = "User";

    try {
      var documentId = Settings.update(obj);
      return documentId;
    } catch (exception) {
      return exception;
    }
  }
});
