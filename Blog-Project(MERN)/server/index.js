// Import Statements
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const MainRouter = require('./routes/mainroute');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/',MainRouter);


mongoose.connect('<your string>',
{
  useUnifiedTopology:true,
  useNewUrlParser: true
},(err)=>{
  if(!err)
  console.log("yes connect to mongo");
  else
  console.log("not connect");
})
app.listen(3000,()=>console.log("running server at 3000"));