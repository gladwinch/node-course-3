// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to Database Successfully');

  db.collection('Users').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log("Unable to count", err);
  });
});
