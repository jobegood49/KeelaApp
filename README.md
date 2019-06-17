### react-meteor-app
This repository defines a Meteor package that automatically integrates the React rendering framework on both the client and the server, to complement or replace the default Handlebars templating system.

The React core is officially agnostic about how you fetch and update your data, so it is far from obvious which approach is the best. This package provides one answer to that question (use Meteor!), and I hope you will find it a compelling combination.

Quick start
If you have not yet installed Meteor, do that:

curl https://install.meteor.com | /bin/sh
Clone this repository:

git clone <repo-url>
### install dependancies 
```
cd <clone-dir>
npm install 
```
### Add Required Support Packages
To install the package, use meteor add:
```
meteor add react-meteor-data 
meteor add  accounts-password
```
### Package Usages in Application - react-meteor-data 
```
import { withTracker } from 'meteor/react-meteor-data';
function Foo({ currentUser, listLoading, tasks }) {
}
export default withTracker(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted
  const handle = Meteor.subscribe('todoList', props.id);
  return {
    currentUser: Meteor.user(),
    listLoading: !handle.ready(),
    tasks: Tasks.find({ listId: props.id }).fetch(),
  };
})(Foo);
```
### Meteor user Account Methods
```
 Meteor.loginWithPassword
 Accounts.createUser
  Meteor.userId()
  Meteor.users.findOne({ _id: id })
```
### Meteor Schema Model 
```
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
      memebers : [this.userId]
    });
  },...
});
```
### Application Features
- login and User signup using email and password
- User profile View 
- Create Teams & manage Teams (update & view)
- Join Team Group or Invite User
Finally, visit localhost:3000 in your browser. For extra fun, try using the example in multiple browser windows!

### Application Features To add
- Social Auth using Facebook and Twitter
- User forgot password with email and reset password 
- User Profile update
  
### React Componnets  and Library
- React Router DOM
- React Hooks and Context APIs
- React Functional and Class components
- React container components with meteor Data