Meteor.methods({
  insertProject(obj) {
    let
      validateCredits = Match.Where(function (credits) {
        if (!!credits && Array.isArray(credits)){
          if (credits.length > 0){
            _.each(credits, function(person){
              if (credits.name) check(credits.role, String);
              if (credits.role) check(credits.role, String);
              if (credits.url) check(credits.url, String);
              return true;
            });
          } else {
            return true;
          }
        } else {
          return true;
        }
      });

    check(obj, {
      name: String,
      projectId: String,
      agency: String,
      year: Number,
      tags: [String],
      details: String,
      slides: [String] //,
      // credits: true
    });

    // if (obj.credits){
    //   check(obj.credits, validateCredits);
    // }

    // if (obj.credits){
    //   _.each(obj.credits, function(partipant).check(obj.credits)
    // } else {
    //   obj.credits = [];
    // }


    try {
      var documentId = Projects.insert(obj);
      return documentId;
    } catch (exception) {
      return exception;
    }
  }
});
