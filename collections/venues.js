Venues = new Meteor.Collection('venues');

Venues.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Venues.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let VenuesSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Venue Name"
  },
  "type": {
    type: String,
    label: "Venue Type"
  },
  "address": {
    type: String,
    label: "Venue Address"
  },
  "city": {
    type: String,
    label: "Venue City"
  }
});

Venues.attachSchema(VenuesSchema);
