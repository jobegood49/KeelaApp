import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('teams', function groupPublication() {
    return Teams.find();
  });
}

Meteor.methods({
  'teams.insert'({name,description}) {
    Teams.insert({
      name,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: this.userId,
      members : [this.userId]
    });
  },
  'teams.joinTeam'(data) {
    if(data && data.members && data.members.includes(data.userId)){
         // todo
    } else {
      data.members.push(data.userId);
      Teams.update(data.teamId,{
        $set:{
          members : data.members
          }
      })
    }
  },
  'teams.removeMember'(teamId, userId) {
    Teams.remove(id);
  },

}); 