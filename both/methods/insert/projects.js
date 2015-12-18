Meteor.methods({
  insertProject(obj) {
    check(obj, Object);
    check(obj.name, String);
		check(obj.projectId, String);
		check(obj.agency, String);
		check(obj.year, Number);
    check(obj.tags, Array);
		check(obj.details, Array);
		check(obj.slides, Array);

    try {
      var documentId = Projects.insert(obj);
      return documentId;
    } catch (exception) {
      return exception;
    }
  }
});
