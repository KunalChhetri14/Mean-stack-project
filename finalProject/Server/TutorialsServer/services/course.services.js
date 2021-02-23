var MongoClient = require('mongodb').MongoClient;
const url =
  'mongodb+srv://Kunal:mongodb123@clustertutorialspoint-o34i7.mongodb.net/test?retryWrites=true&w=majority';
const dbName="Tutorial_Online";

exports.getAllCourses = async function() {
    console.log("Inside course services");
    const mongoClient = await MongoClient.connect(url,{ useNewUrlParser: true })
        .catch(err => {throw Error('there is database side error');});
    try {
        var dbo = mongoClient.db(dbName);
        console.log('Data is '); 
        let collection = dbo.collection('CourseCollection');
        let k = await collection.find().toArray();
        console.log("After async await value is ", k);
        return k;
    }
    catch(err) {
        throw Error('there is database side error');
    }
    finally {
        console.log("finally executed");
        mongoClient.close();
    }
}

//getSub topics
exports.getSubTopics = async function(courseName) {
    const mongoClient = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { throw Error('there is database side error'); })
    try {
        var db = mongoClient.db(dbName);
        let collection = db.collection(`${courseName}`);
        let subTopicArray =await collection.find({}, {"subTopic": 1}).toArray();
        return subTopicArray;
    }
    catch(err) {
        throw Error('there is database side');
    }
    finally {
        mongoClient.close();
    }
}

exports.getSubTopicContentById = async function(courseName, id) {
    const mongoClient = await MongoClient.connect(url, {useNewUrlParser: true})
        .catch(err => { throw Error('there is database side error');})
    try {
        var db = mongoClient.db(dbName);
        let collection = db.collection(`${courseName}`);
        console.log("content fetching ............................................................");
        let subTopicDetailsQuery = await collection.find({_id: id}).toArray();
        console.log("contents fetched");
        return subTopicDetailsQuery;
    }
    catch(err) {
        throw Error('there is database side error');
    }
    finally {
        mongoClient.close();
    }
}