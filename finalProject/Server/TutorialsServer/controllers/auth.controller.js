var MongoClient = require('mongodb').MongoClient;
const url =
  'mongodb+srv://Kunal:mongodb123@clustertutorialspoint-o34i7.mongodb.net/test?retryWrites=true&w=majority';
const dbName="Tutorial_Online";

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

exports.login = function(req, res)  {
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
}

exports.signUp = function(req, res) {
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
}