Meteor.methods({
  insertNetwork(obj) {
    check(obj, {
      ownerId: String,
      name: String,
      password: Match.any,
      hasPassword: Boolean,
      isPublic: Boolean,
      verified: Boolean
    });

    try {
      var documentId = Networks.insert(obj);
      return documentId;
    } catch (exception) {
      return exception;
    }
  }
});
