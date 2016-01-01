const authenticatedRedirect = () => {
  // if (!Meteor.loggingIn() && !Meteor.userId()) {
  //   FlowRouter.go('login');
  // }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect]
});

authenticatedRoutes.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('default', {
      yield: 'dashboard'
    });
  }
});

authenticatedRoutes.route('/settings', {
  name: 'settings',
  action() {
    BlazeLayout.render('default', {
      yield: 'settings'
    });
  }
});
