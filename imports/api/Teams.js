import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Teams = new Mongo.Collection("teams");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("teams", function groupPublication() {
    return Teams.find();
  });
}

Meteor.methods({
  "teams.insert"({ name, description }) {
    Teams.insert({
      name,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: this.userId,
      memebers: [this.userId]
    });
  },
  "teams.removeTeam"(id) {
    Teams.remove(id);
  },
  "teams.addMember"(teamId, userId) {
    Teams.remove(id);
  },
  "teams.removeMember"(teamId, userId) {
    Teams.remove(id);
  }
});
