let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _extendAccounts();
};
var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => Modules.server.setBrowserPolicies();

var _generateAccounts = () => Modules.server.generateAccounts();

var _extendAccounts = () => Modules.server.extendAccounts();

Modules.server.startup = startup;
