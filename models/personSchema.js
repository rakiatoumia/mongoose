const mongoose  = require("mongoose");
const Schema=mongoose.Schema();
const personSchema={
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    favouriteFood:
    {
        type:[String]
    },
}
 const Person=mongoose.model("person",personSchema)
 module.exports=Person;
