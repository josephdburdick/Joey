Projects = new Meteor.Collection('projects');

Projects.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Projects.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ProjectsSchema = new SimpleSchema({
	"name": {
		type: String,
		label: "Project Name"
	},
	"projectId": {
		type: String,
		label: "Project Id"
	},
	"agency": {
		type: String,
		label: "Project agency"
	},
	"year": {
		type: Number,
		label: "Year completed"
	},
	"tags": {
		type: Object,
		label: "Project Role(s)"
	},
	"details": {
		type: String,
		label: "Project Details"
	},
	"slides": {
		type: Object,
		label: "Project Slides"
	}
});

Projects.attachSchema(ProjectsSchema);
