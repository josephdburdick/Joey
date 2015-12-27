Template.registerHelper('appName', () => {
  return "Joey";
});

Template.registerHelper('currentUsername', () => {
  return Meteor.user().username;
});
