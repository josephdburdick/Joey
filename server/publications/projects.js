Meteor.publish('allProjects', function() {
  return Projects.find({
    // 'owner': this.userId
  });
});
