Meteor.startup(function () {
  console.log(Projects.find().count() + ' projects');
  console.log(Meteor.users.find().count() + ' users');

  // Seed Projects database
  if (Projects.find().count() === 0) {
    let projects = JSON.parse(Assets.getText('seeds/projects.json'));
    _.each(projects, function (project) {
      insertProject({
				"name": project.name,
				"projectId": project.projectId,
				"agency": project.agency,
				"year": project.year,
				"tags": project.tags,
				"details": project.details,
				"slides": project.slides
			});
    });
  }
});
