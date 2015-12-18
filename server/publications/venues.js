Meteor.publish('singleVenue', function (id) {
  if (this.userId) {
    check(id, String);
    console.log(id);
    return Venues.find({
      ownerId: id
    });
  }
  this.ready();
});
