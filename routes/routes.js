const express = require('express');
const router = express.Router();
const TelegramBot = require('node-telegram-bot-api');
// const botToken = process.env.BOT_TOKEN;
const botToken = process.env.BOT_TOKEN;
 const bot = new TelegramBot(botToken, {polling:false});

 const mainMenu = {
  reply_markup: {
    keyboard: [
      [
        { 
          text: "🎮 Open Web App",
          web_app: { url: process.env.WEB_APP }
        }
      ],
      [
        { text: "ℹ️ About" },
        { text: "📊 My Stats" }
      ],
      
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  }
};


router.post('/botchat',async(req,res)=>{
  console.log('post request');
  //   let message = req.body;  
  // console.log(message,"this is response from bot");
  const message = req.body.message.text;
    const name = req.body.message.chat.first_name;
    const chat_id = req.body.message.chat.id;
    console.log(message,"This is Message");
  
    if (message || name || chat_id) {
      // console.log(`This is message from ${name} and Message is ${message}`);
       const web_app = process.env.WEB_APP;
      // console.log("This is Web App URL",web_app);
      switch (message) {
        case '/start':
          await bot.sendMessage(chat_id, `hi ${name} please select the options to proceed further`,mainMenu);
          break;
        case 'ℹ️ About':
          await bot.sendMessage(chat_id, `🌟 **About Us**\n\nThis bot helps you...`, {
            parse_mode: 'Markdown',
            ...mainMenu
          });
          break;
        
        case '/':
          await bot.sendMessage(chat_id, `hi ${name} Oops this command does not exits`);
          break;
        default:
          await bot.sendMessage(chat_id, `Please Enter Valid Command ${name}`);
      }
    }
    res.sendStatus(200);
})
router.get('/indexhome',(req,res)=>{
 return res.render('index.ejs');

})



module.exports = router;
