Projects = new Meteor.Collection('projects');

Projects.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Projects.deny({
  insert: () => false,
  update: () => false,
  remove: () => false
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
		type: [String],
		label: "Project Role(s)",
    optional: true
	},
	"details": {
		type: String,
		label: "Project Details",
    optional: true,
		autoform: {
		  rows: 5
		}
	},
	"logo": {
		type: String,
		label: "Project Logo",
		optional: true
	},
	"slides": {
		type: [String],
		label: "Project Slides"
	},
	"color": {
		type: String,
		label: "Project Color",
		optional: true
	},
  "credits" : {
    type: [Object],
    label: "Project Credits",
    blackbox: true,
    optional: true
  },
  "credits.$":{
    type: Object,
  },
  "credits.$.name": {
    type: String,
    label: "Name of Participant",
    optional: true
  },
  "credits.$.role": {
    type: String,
    label: "Role of Participant",
    optional: true
  },
  "credits.$.url": {
    type: String,
    label: "URL for Participant",
    optional: true
  }

});

Projects.attachSchema(ProjectsSchema);
