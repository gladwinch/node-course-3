// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to Database Successfully');

  db.collection('Users').insertOne({
    name: 'gladwin',
    age: 21,
    location: 'bhubaneswar'
  }, (err, result) => {
    if (err) {
      return console.log("Unable to fetch data to database");
    }

    console.log(result.ops[0].age);
  });
});
