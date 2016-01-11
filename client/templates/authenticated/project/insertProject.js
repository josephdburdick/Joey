Template.insertProjectForm.onCreated(() => {
	Template.instance().subscribe('allProjects');
});

Template.insertProjectForm.helpers({
  projects() {
    return Projects.find();
  }
});
