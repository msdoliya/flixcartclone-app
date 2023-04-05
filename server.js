import express, { Router } from 'express';
import  connection  from './database/db.js';
import defaultData from './default.js';
import route from './routes/route.js';
import bodyParser from 'body-parser';
import * as path from 'path'

const url =  process.env.MONGODB_URI || "mongodb+srv://mahendra:doliya1998@ecommerce.ckwfmja.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve()
connection(url);
  

  app.use(express.static( path.join(__dirname, './client/build' )))
  app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
  })


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