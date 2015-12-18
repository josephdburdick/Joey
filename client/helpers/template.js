Template.registerHelper('appName', () => {
  return "Lily";
});

Template.registerHelper('currentUsername', () => {
  return Meteor.user().username;
});
