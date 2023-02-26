const courseModel = require("../models/courseModel")

module.exports.getAllCourses = async function(){ //Similar to select * 
return await courseModel.find({});
//{}-> it is like select *, and we can put constraints inside to get 
}//await is used when there are resources that are not in scope of code such as database data

module.exports.createFirstCourse = async function(){ //Similar to insert 
const courses = await courseModel.find({});
if(courses && courses.length==0){
const firstCourse = {"title": "BZ DSA","level":"Easy"};
const course = new courseModel(firstCourse);
await course.save();
}
}

module.exports.createCourse = async function(courseInput){ //Similar to insert 
    const course = new courseModel(courseInput);
    await course.save();
}
module.exports.updateCourse = async function(courseId,updatedInput){ //Similar to insert 
    const course = await courseModel.findOneAndUpdate({_id : courseId},updatedInput);
}