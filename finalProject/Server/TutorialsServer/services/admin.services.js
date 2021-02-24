var MongoClient = require('mongodb').MongoClient;
const url =
  'mongodb+srv://Kunal:mongodb123@clustertutorialspoint-o34i7.mongodb.net/test?retryWrites=true&w=majority';
const dbName="Tutorial_Online";

exports.insertNewCourseContent = async function(courseName, subTopicNew, content) {
    const mongoClient = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { throw Error('There is some error in database')})
    try {
        var db = mongoClient.db(dbName);
        let collection = db.collection(`${courseName}`);
        let maxIdColumn = await collection.find().sort({_id:-1}).limit(1).toArray();
        let maxID = maxIdColumn[0]._id;
        console.log("Prints: ", maxIdColumn);
        let newContent = await collection.insert({_id: maxID + 5, subTopic: subTopicNew, content: content});
        // console.log("successful: ", id);
        // console.log("succesful", newContent.op[0]._id);
        console.log("succesful", maxID + 5);
        return maxID + 5;
    }
    catch(err) {
        console.log("the error is ",err);
        throw Error('error in database query');
    }
    finally {
        mongoClient.close();
    }
    

}