Meteor.publish('userSettings', function () {
  if (this.userId) {
    return Settings.find({
      ownerId: this.userId
    }, {
      fields: {
        'settings': 1
      }
    });
  }
  this.ready();
});

Meteor.publish('allUserNames', function () {
  if (this.userId) {
    return Meteor.users.find({}, {
      fields: {
        'username': 1
      }
    });
  }
  this.ready();
});

Meteor.publish('allUsers', function () {
  if (this.userId) {
    let ownerIds;

    settingsCursor = Settings.find({
      'settings.locationTracking': true
    });
    ownerIds = settingsCursor.map(function (doc) {
      return doc.ownerId;
    });

    return Meteor.users.find({
      _id: {
        $in: ownerIds
      }
    });
  }
  this.ready();
});
