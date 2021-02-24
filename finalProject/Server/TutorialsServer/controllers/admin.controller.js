var adminService = require('../services/admin.services');

exports.insertNewCourseContent = async function(req, res) {
    console.log("the inserted contents are",req.body);
    try {
        let id = await adminService.insertNewCourseContent(req.body['Course'], req.body['Title'], req.body['editor']);
        return res.send({id:id});
    }
    catch(err) {
        console.log("there is some error ", err);
    }
}