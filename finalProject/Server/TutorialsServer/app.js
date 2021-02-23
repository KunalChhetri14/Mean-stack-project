var MongoClient = require('mongodb').MongoClient;
var express = require('express');
const bodyPar = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const url =
  'mongodb+srv://Kunal:mongodb123@clustertutorialspoint-o34i7.mongodb.net/test?retryWrites=true&w=majority';


const dbName="Tutorial_Online"
module.exports = MongoClient;
module.exports = express;
const client = new MongoClient(url, { useNewUrlParser: true });
obj='{"course": "C++", "topics" : [ { "subTopic" : "Introduction to C++", "content_id" : 10 },{ "subTopic" : "Bits and Bytes", "content_id" : 20 },{ "subTopic" : "Variables in C++", "content_id" : 20 },{ "subTopic" : "Introduction to C++", "content_id" : 10 },{ "subTopic" : "For Loops", "content_id" : 20 },{ "subTopic" : "While loops", "content_id" : 20 }]}';
var insertObj=JSON.parse(obj);
collection="CourseCollection";

var cors = require('cors');

var db1 = 'mongodb://127.0.0.1:27017/';
app.use(bodyPar.urlencoded({ extended: true }));
app.use(cors());
let arr = [];
app.use(express.json());

var courseController = require('./controllers/course.controller');
var authController = require('./controllers/auth.controller');
var adminController = require('./controllers/admin.controller');

function getMail(jsonObj) {
  console.log('There is some kindof error');
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, function(err, db) {
      console.log('first line in promise');
      if (err) {
        console.log('Mongodb client not connect');
        reject(err);
      } else {
        console.log('no error and checking for element');
        var dbo = db.db('Tutorial_Online');

        totalcount = dbo
          .collection('Users_Credentials')
          .find({ email: jsonObj })
          .toArray(function(err, data) {
            if (data) {
              resolve(data);
            }
            if (err) {
              console.log('error inside toArray');
            }
          });
        console.log('after connnection and ready to close');

        db.close();
      }
    });
  });
}

app.post('/Login', authController.login)

// Sign Up for Registration
app.post('/SignUp', authController.signUp);


app.get('/getAllCourses', courseController.getAllCourses);

app.post('/insertNewContent', adminController.insertNewCourseContent)
// app.post('/insertNewContent', (req, res) => {
//   console.log(req.body);
// })

//get sub topics of particular course
app.post('/getSubTopics', courseController.getSubTopics);

///Get sub topics details by Id and courseName
app.post('/getsubTopicsDetails', courseController.getSubTopicContentById);

app.get('/', (req, res) => {
  res.send('welcome to the default server apge');
});

app.listen(3000, () => {
  console.log('server connected successfully');
});
