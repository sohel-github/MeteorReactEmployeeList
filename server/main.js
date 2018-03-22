import _ from 'lodash';
import { Meteor } from 'meteor/meteor';

import { Employee } from '../imports/collections/employee';
import { image, helpers } from 'faker';

Meteor.startup(() => {

  const numberRecords = Employee.find({}).count();
  console.log(numberRecords);
  
  if(!numberRecords){
    _.times(5000, ()=>{
      const { name, email, phone } = helpers.createCard();
      Employee.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }
  
  Meteor.publish('employee', function(PER_PAGE){
    return Employee.find({}, { limit: PER_PAGE });
  });

});
