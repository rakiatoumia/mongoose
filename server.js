express=require("express");
mongoose=require("mongoose");
require("dotenv/config");
mongoose.connect(
    process.env.MONGO_URL,
    () => {
      console.log("You're connected to the database");
    }
  );

const app=express();
app.use('/', require('./routes/userRoute.js'))
const PORT=3000;
app.listen(PORT,()=> console.log('listening on port '+ PORT))