var MongoClient = require('mongodb').MongoClient;
var express = require('express');
const bodyPar = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const url =
  'mongodb+srv://Kunal:mongodb123@clustertutorialspoint-o34i7.mongodb.net/test?retryWrites=true&w=majority';


const dbName="Tutorial_Online"

const client = new MongoClient(url, { useNewUrlParser: true });
obj='{"course": "C++", "topics" : [ { "subTopic" : "Introduction to C++", "content_id" : 10 },{ "subTopic" : "Bits and Bytes", "content_id" : 20 },{ "subTopic" : "Variables in C++", "content_id" : 20 },{ "subTopic" : "Introduction to C++", "content_id" : 10 },{ "subTopic" : "For Loops", "content_id" : 20 },{ "subTopic" : "While loops", "content_id" : 20 }]}';
var insertObj=JSON.parse(obj);
collection="CourseCollection";
// client.connect((err,db) => {
//   if (err) {
//     console.log('there is error in connection');
//   } else {
//     console.log('database connected');
//     var dbo = db.db('Tutorial_Online');
//             console.log('Data is ');
//             let k = dbo.collection(collection).insert(insertObj);
//             db.close();
//   }
//   //const collection = client.db("test").collection("devices");
//   //perform actions on the collection object
// });

var cors = require('cors');

// const port=3000;
var db1 = 'mongodb://127.0.0.1:27017/';
app.use(bodyPar.urlencoded({ extended: true }));
app.use(cors());
let arr = [];
app.use(express.json());

function getMail(jsonObj) {
  console.log('There is some kindof error');
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, function(err, db) {
      console.log('first line in promise');
      if (err) {
        console.log('Mongodb client not connect');
        // return res.status(230).send({

        //   message: 'There is database error'
        // })
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

app.post('/Login', (req, res) => {
  //check whether the email is linked with current registered mails
  getMail(req.body['email'])
    .then(function(data) {
      if (data.length === 0) {
        console.log("Email id doesn't exist");
        return res.status(400).send({
          message: 'No EmailId linked'
        });
      } else {
        //Check for credentials and if true Redirect to Homepage
        let verifyPassword = new Promise(function(resolve, reject) {
          MongoClient.connect(url, function(err, db) {
            if (err) {
              console.log('Mongodb client not connected');
              return res.status(502).send({
                message: 'there is database side error'
              });
            } else {
              var dbo = db.db('Tutorial_Online');

              totalcount = dbo
                .collection('Users_Credentials')
                .find({
                  email: req.body['email'],
                  password: req.body['password']
                })
                .toArray(function(err, data) {
                  if (data) {
                    console.log('Succesful login');
                    resolve(data);
                  }
                  if (err) {
                    console.log('error inside toArray');
                  }
                });

              db.close();
            }
          });
        });

        //Resolving promise which resolves true on credentials match
        verifyPassword
          .then(data => {
            if (data.length > 0) {
              console.log('before returning');
              let document_id = data[0]._id;
              let payload = { subject: document_id };
              let token = jwt.sign(payload, 'SecretKey');

              return res.status(201).send({ token });
              // return res.status(100).send({
              //   message:'Login Successful'
              // })
            } else {
              console.log('length is equal to 0');
              //if credentials doesn't match
              return res.status(400).send({
                message: 'PasswordIncorrect'
              });
            }
          })
          .catch(err => {
            return res.status(502).send({
              message: 'there is database side error'
            });
          });
      }
    })
    .catch(err => {
      return res.status(502).send({
        message: 'there is database side error'
      });
    });
});

// Sign Up for Registration
app.post('/SignUp', (req, res) => {
  var jsonObj = req.body['email'];
  getMail(jsonObj)
    .then(function(data) {
      console.log('data is ', data);
      console.log('Length is ', data.length);
      if (data.length > 0) {
        return res.status(400).send({
          message: 'Email Id already exists!'
        });
      } else {
        MongoClient.connect(url, function(err, db) {
          if (err) {
            return res.status(502).send({
              message: 'there is database side error'
            });
          } else {
            var dbo = db.db('Tutorial_Online');
            console.log('Data is ');
            let k = dbo.collection('Users_Credentials').insert(req.body);
            db.close();

            k.then(insertedData => {
              console.log('New email id inserted');
              console.log('Credentials entered is ', insertedData);
              let regId = insertedData.ops[0]._id;
              console.log('Reg Id is \n ', regId);
              let payload = { subject: regId };
              let token = jwt.sign(payload, 'SecretKey');
              return res.status(201).send({ token });
              //  res.send(req.body['email']);
            }).catch(err => {
              console.log('The error is ', err);
              console.log('Kunallk');
              return res.status(400).send({
                message: 'Error while inserting data'
              });
            });
            //return res.send(data);
          }
        });
      }
    })
    .catch(err =>{
      return res.status(502).send({
        message: 'there is database side error'
      });
    });
});

app.get('/getAllCourses', (req, res) => {
  console.log('inside getall courses');

  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.status(502).send({
        message: 'there is database side error'
      });
    } else {
      var dbo = db.db(dbName);
      console.log('Data is ');
      let k = dbo
        .collection('CourseCollection')
        .find({'course':'C'},{'course':1})
        .toArray();
      console.log('K value is', k);

      db.close();

      k.then(data => {
        console.log(data);
        return res.send(data);
      }).catch(err => {
        return res.status(502).send({
          message: 'there is database side error'
        });
      });
    }
  });
});

app.post('/getSubTopics', (req, res) => {
  console.log('Inside get');
  MongoClient.connect(url, function(err, db) {
    //if error ...respond with error code
    if (err) {
      res.status(502).send({
        message: 'there is database side error'
      });
    }
    //No error ...proceed
    else {
      let courseName = req.body['courseName'];
      console.log('The course name is ', courseName);
      var dbo = db.db(dbName);
      let k = dbo
        .collection('CourseCollection')
        .find(
          { 'course': courseName }
        )
        .toArray();
      db.close();
      k.then(data => {
        res.send(data);
        console.log('The data is ', data);
      }).catch(err => {
        res.status(502).send({
          message: 'there is database side error'
        });
      });
    }
  });
});


///Get sub topics details by Id and courseName
app.post('/getsubTopicsDetails', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.status(502).send({
        message: 'there is database side error'
      });
    } else {
      let subTopicId = req.body['subTopicId'];
      let course = req.body['courseName'];
      console.log('The course id is ', subTopicId, "  ",course);
      var dbo = db.db(dbName);
      let k = dbo
        .collection(course)
        .find(
          
          { _id: subTopicId}
          //   $and: [
          //     { 'Details.Topics.subTopic': subTopicName },
          //     { 'Details.course': course }
          //   ]
          // },
          // { 'Details.Topics': 1 }
        )
        .toArray();
      db.close();
      k.then(data => {
        console.log('The data is ', data);
        return res.send(data);
      }).catch(err => {
        res.status(502).send({
          message: 'there is database side error'
        });
      });
    }
  });
});

app.get('/', (req, res) => {
  res.send('welcome to the default server apge');
});

app.listen(3000, () => {
  console.log('server connected successfully');
});
