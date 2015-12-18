Template.settings.events({
  'change #user-geolocation': (ev, template) => {
    template.locationTracking.set(ev.target.checked);
  },

  'blur #user-name': (ev) => {
    ev.currentTarget.value = ev.currentTarget.value.trim().replace(/[^A-Za-z0-9\_]/g, "").split(' ').join('');
  },

  'submit #user-settings': (ev, template) => {
    ev.preventDefault();
    if (!$(ev.currentTarget).find('.error').is(':visible').length) {
      let userSettings = {
        ownerId: Meteor.userId(),
        username: template.find('#user-name').value,
        settings:{
          locationTracking: $(ev.currentTarget).find('#user-geolocation').is(':checked')
        }
      };
      Meteor.call('updateUserSettings', userSettings, function (error, result) {
        if (!error) Bert.alert('Updated user settings', 'success', 'fixed-top');
        if (error) Bert.alert(error.reason, 'danger', 'fixed-top');
      });
    }
  }
});

Template.settings.helpers({
  checked: function () {
    return !!Template.instance().locationTracking.get() ? 'checked' : '';
  }
});

Template.settings.onCreated(() => {

  let self = Template.instance();
  self.locationTracking = new ReactiveVar(false);
  self.subscribe('userSettings');
  self.subscribe('allUserNames');

  Tracker.autorun((computation) => {
    if (!!Settings.findOne()) {
      let locationTracking = Settings.findOne().settings.locationTracking;
      self.locationTracking.set(locationTracking);
    }
  });
});

Template.settings.onRendered(() => {
  $('#user-settings').validate({
    rules: {
      userName: {
        isUniqueUsername: true,
        regex: /[^A-Za-z0-9\_]/g,
        required: true,
        minlength: 3,
        maxlength: 24
      },
      emailAddress: {
        required: true,
      }
    },
    messages: {
      userName: {
        isUniqueUsername: "Username already taken.",
        regex: "Only letters, numbers, and underscores allowed in username.",
        required: "You must input a username.",
        minlength: "Username must be at least 3 characters.",
        maxlength: "Username must not exceed 24 characters."
      },
      emailAddress: {
        required: "Email address is required."
      }
    }
  });
});

Template.settings.onDestroyed(() => {
  self.stop();
});
