// router.post('/home', async(req,res) => {
//   console.log(req.body);
//   // const message = req.body?.message?.text;
//   // const name = req.body.message.chat.first_name;
//   // const chat_id = req.body.message.chat.id;
//   // console.log(message,"This is Message");

//   // if (message || name || chat_id) {
//   //   // console.log(`This is message from ${name} and Message is ${message}`);
//   //   const web_app = process.env.WEB_APP;
//   //   console.log("This is Web App URL",web_app);
//   //   // switch (message) {
//   //   //   case '/start':
//   //   //     await bot.sendMessage(chat_id, `hi ${name} please select the options to proceed further:${mainMenu}`);
//   //   //     break;
//   //   //   case '/webapp':
//   //   //     await bot.sendMessage(chat_id, `hi ${name} Welcome to the Web App :${web_app}`);
//   //   //     break;
//   //   //   case '/':
//   //   //     await bot.sendMessage(chat_id, `hi ${name} Oops this command does not exits :${mainMenu}`);
//   //   //     break;
//   //   //   default:
//   //   //     await bot.sendMessage(chat_id, `welcome to the bot ${name}`);


//   //   // }


//   // }

// });
// router.get('/indexhome', async (req, res) => {
//   // console.log(bot);
//   return res.render('index.ejs');

// })
const mainMenu = {
    reply_markup: {
      keyboard: [
        [
          {
            text: "🎮 Open Web App",
  
          }
        ],
        [
          { text: "ℹ️ About" },
          { text: "📊 My Stats" }
        ],
        [
          { text: "⚙️ Settings" },
          { text: "🌟 Rate Us" }
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  };