import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.BOT_TOKEN);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      if (text === "/start") {
        await bot.sendMessage(chatId, "Hello bhai 👋\nBot kaam kar raha hai ✅");
      }
    }
    res.status(200).send("ok");
  } else {
    res.status(200).send("Bot is running");
  }
}
