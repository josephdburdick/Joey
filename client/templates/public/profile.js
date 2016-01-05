Template.profile.onCreated(function() {

	GithubActions = new Meteor.Collection(null);
	// Get github user data
	HTTP.get(`https://api.github.com/users/josephdburdick/events`, (error, response) => {
		if ( error ) {
			Session.set('githubEvents', 'Could not load Github feed.');
			return error;
		} else {
			Session.set('githubEvents', response.data);
			_.each(response.data, function(action){
				GithubActions.insert(action);
			});
		}
	});
});

Template.profile.onRendered(function() {

});

Template.profile.helpers({
	stats(){
		console.log(GithubActions.find().fetch());
		return GithubActions.find().fetch(); //Session.get('githubEvents');
	}
});
