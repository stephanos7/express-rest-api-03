const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-write");
const Story  = require("../models/story-model");

const testData = [{
  title: "<h1>Weekend Plans</h1>",
  contents: "<p>Visit parents and spend time with them in the mountain. Take the kids for a ride around the lake, perhaps have a lake side pic-nic! Gather wood for the fire-place, marinate salmon and prepare the kitchen and dining room for the evening. Take a break, go to the lake for a swim:)</p>"
},
{
  title: "<h1>Travel Plans</h1>",
  contents: "<p>Buy large luggage for trip to Spain. Finish last laundry and iron shirts. Make sure the plans are watered before living. Enjoy the vacation!</p>"
},
{
  title: "<h1>Cooking Plans</h1>",
  contents: "<p>Visit parents and spend time with them in the mountain. Take the kids for a ride around the lake, perhaps have a lake side pic-nic! Gather wood for the fire-place, marinate salmon and prepare the kitchen and dining room for the evening. Take a break, go to the lake for a swim:)</p>"
},
{
  title: "<h1>Work Schedule</h1>",
  contents: "<p>Visit parents and spend time with them in the mountain. Take the kids for a ride around the lake, perhaps have a lake side pic-nic! Gather wood for the fire-place, marinate salmon and prepare the kitchen and dining room for the evening. Take a break, go to the lake for a swim:)</p>"
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
