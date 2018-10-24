const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');


console.log("This file is started");

var id = '5bd06d7b410f2511d0922caf';

if(!ObjectID.isValid(id)) {
  return console.log("Id is invalid");
}


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos:" ,todos);
// }, (e) => {
//   console.log("Unable to find todo data", e);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// }, (e) => {
//   console.log("Unable to find data", e);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log("Id not found");
  }
  console.log("Find by Id:", todo);
}, (e) => {
  console.log(e);
});
