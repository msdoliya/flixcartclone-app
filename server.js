import express, { Router } from 'express';
import  connection  from './database/db.js';
import defaultData from './default.js';
import route from './routes/route.js';
import bodyParser from 'body-parser';



const url =  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/flipkart";

const app = express();
const PORT = process.env.PORT || 8000;

connection(url);
  
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
    }); 

    app.use(bodyParser.json({extended:true}));
    app.use(bodyParser.urlencoded({extended:true}));



app.listen(PORT, () => console.log('server running sucess fully ') )
defaultData();
app.use('/', route)