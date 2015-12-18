let startup = () => {
  _validateCoordinates();
};

var _validateCoordinates = () => Modules.both.validateCoordinates;

Modules.both.startup = startup;
