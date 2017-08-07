const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-write");
const Story  = require("../models/story-model");

const testData = [{
  
}];

Story.create(testData, (err, docs) => {
    if(err){
        throw err;
    }
    docs.forEach((element) => {
        console.log(element);
    })
    mongoose.connection.close();
})
