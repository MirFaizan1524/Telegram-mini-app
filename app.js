const express  = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const localtunnel = require('localtunnel');
const ngrok = require('ngrok');
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
// Setting up the MiddleWares:
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const portNumber = process.env.PORT || 2000;
const {setWebHook} = require('./helper/webhook.js');


const router = require('./routes/routes.js');
app.use('/',router);

app.listen(portNumber,async()=>{
    console.log(`Server running on port ${portNumber}`);
    const tunnel = await localtunnel({ 
      port: 2000,
       subdomain:'setchatbot'  // here you can specify your sub-domain:
    });
    // const url = await ngrok.connect('https://8081-2405-201-550b-a0c4-e8b5-a665-bf53-60a1.ngrok-free.app');
    console.log(tunnel.url);//  console.log(url);
 
    await setWebHook();
    
 })
//   https://8081-2405-201-550b-a0c4-e8b5-a665-bf53-60a1.ngrok-free.app
