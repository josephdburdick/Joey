Template.header.helpers({
  brandLink() {
    let login = FlowRouter.path('login'),
      index = FlowRouter.path('index');
    return !Meteor.loggingIn() && !Meteor.userId() ? login : index;
  }
});

Template.header.events({
  'click .logout' () {
    Meteor.logout((error) => {
      if (error) {
        Bert.alert(error.reason, 'warning', 'fixed-top');
      } else {
        Bert.alert('Logged out!', 'success', 'fixed-top');
      }
    });
  }
});

Template.header.onCreated(function () {
});
