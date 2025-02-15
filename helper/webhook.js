
const TelegramBot = require('node-telegram-bot-api');
// route to homePage:4
const botToken = process.env.BOT_TOKEN;
const bot = new TelegramBot(botToken, {polling:false});
console.log("tunnel Url",process.env.WEB_HOOK_URI);
const setWebHook = async()=>{

    const webhookURI = process.env.WEB_HOOK_URI;
    let webhookResponse = await bot.setWebHook(`${webhookURI}/botchat`);
   console.log("Web Hook",webhookResponse);       
}
module.exports = {setWebHook};