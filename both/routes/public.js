const publicRedirect = () => {
  if (Meteor.userId()) {
    FlowRouter.go('index');
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [publicRedirect]
});

publicRoutes.route('/', {
  name: 'index',
  action() {
    BlazeLayout.render('default', {
      yield: 'index'
    });
  }
});

publicRoutes.route('/project/:_id', {
  name: 'project-detail',
	triggersEnter: [ function() {
    console.log( "Something to do on ENTER." );
  }],
  triggersExit: [ function() {
    console.log( "Something to do on EXIT." );
  }],
  action() {
    BlazeLayout.render('default', {
      yield: 'projectDetail'
    });
  }
});

publicRoutes.route('/profile', {
  name: 'profile',
  action() {
    BlazeLayout.render('default', {
      yield: 'profile'
    });
  }
});

publicRoutes.route('/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render('default', {
      yield: 'signup'
    });
  }
});

publicRoutes.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('default', {
      yield: 'login'
    });
  }
});

publicRoutes.route('/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render('default', {
      yield: 'recoverPassword'
    });
  }
});

publicRoutes.route('/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render('default', {
      yield: 'resetPassword'
    });
  }
});
