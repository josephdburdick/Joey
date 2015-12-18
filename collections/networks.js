Networks = new Meteor.Collection('networks');

Networks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Networks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let NetworksSchema = new SimpleSchema({
  "ownerId": {
    type: String,
    label: "Network Owner"
  },
  "name": {
    type: String,
    label: "Network name"
  },
  "password": {
    type: String,
    label: "Network password",
    optional: true
  },
  "hasPassword": {
    type: Boolean,
    label: "Network has password"
  },
  "isPublic": {
    type: Boolean,
    label: "Network is public"
  },
  "verified": {
    type: Boolean,
    label: "Network verified"
  }
});

Networks.attachSchema(NetworksSchema);
