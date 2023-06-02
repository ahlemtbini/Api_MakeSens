const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://olfatbini67:label@cluster0.epmz4ag.mongodb.net/?retryWrites=true&w=majority"
, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
