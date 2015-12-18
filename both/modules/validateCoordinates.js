let validateCoordinates = Match.Where(function (coordinates) {
  check(coordinates.lat, Number);
  check(coordinates.lng, Number);
  return true;
});


Modules.both.validateCoordinates = validateCoordinates;
