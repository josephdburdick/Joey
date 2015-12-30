let startup = () => {
  Meteor.startup(function () {
    _UI();
  });
};

var _UI = () => Modules.client.UI;

Modules.client.startup = startup;
