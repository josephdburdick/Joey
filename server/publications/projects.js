Meteor.publish('allProjects', function() {
  return Projects.find({
    // 'owner': this.userId
  });
});

Meteor.publish('projectDetail', function(id) {
	check(id, String);
  return Projects.find({_id: id});
});
