// var courseServices = require('../services/course.services');
var app = require('../app');
var courseService = require('../services/course.services');


exports.getAllCourses = async function(req, res) {
    console.log('inside getall courses of controllers');
    try {
        var result = await courseService.getAllCourses();   
        console.log("the result is ", result);
        return res.send(result);
    }
    catch(err) {
        console.log("The errordfsd is ",err);
        return res.status(502).send({
              message: err.message
            });
    }
  };

exports.getSubTopics = async function(req, res) {
    console.log('Inside get');
    try {
        var listofSubTopics = await courseService.getSubTopics(req.body['courseName'])
        console.log("the sub topics are ", listofSubTopics);
        return res.send(listofSubTopics);
    }
    catch(err) {
        console.log("error while fetching sub topics");
        return res.status(502).send({
            message: err.message
        })
    }
  }

exports.getSubTopicContentById = async function(req, res) {
    try {
        var listofSubTopics = await courseService.getSubTopicContentById(req.body['courseName'], req.body['subTopicId']);
        console.log("the sub topics content  is ", listofSubTopics);
        return res.send(listofSubTopics);
    }
    catch(err) {
        console.log("error while fetching sub topics");
        return res.status(502).send({
            message: err.message
        })
    }
  }

  exports.insertNewContent = async function(req, res) {
      try {

      }
      catch(err) {

      }
  }



//     MongoClient.connect(url, function(err, db) {
//       if (err) {
//         res.status(502).send({
//           message: 'there is database side error'
//         });
//       } else {
//         let subTopicId = req.body['subTopicId'];
//         let course = req.body['courseName'];
//         console.log('The course id is ', subTopicId, "  ",course);
//         var dbo = db.db(dbName);
//         let k = dbo
//           .collection(course)
//           .find(
            
//             { _id: subTopicId}
//             //   $and: [
//             //     { 'Details.Topics.subTopic': subTopicName },
//             //     { 'Details.course': course }
//             //   ]
//             // },
//             // { 'Details.Topics': 1 }
//           )
//           .toArray();
//         db.close();
//         k.then(data => {
//           console.log('The data is ', data);
//           return res.send(data);
//         }).catch(err => {
//           res.status(502).send({
//             message: 'there is database side error'
//           });
//         });
//       }
//     });
//   }