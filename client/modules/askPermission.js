var askPermission = function askPermission() {
  var permission = false;

  if (!Settings.findOne().settings.locationTracking) {
    permission = confirm("Allow better functionality by reporting your location?");
    if (!!permission) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

Modules.client.askPermission = askPermission;
