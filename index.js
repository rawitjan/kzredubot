const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "2124596652:AAE5Jw_4-b1k6SVN837NryiIEY045kqim9g";
const server = express();
const bot = new TelegramBot(TOKEN, { polling: true } );

const port = process.env.PORT || 5000;
const gameName = "quiz";

const queries = {};

const quizButtons = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [
                {text: `Бастау`, callback_game:'quiz'}
            ]
        ]
    })
};

const COMMANDS = require("const/commands");
bot.setMyCommands(COMMANDS);

bot.onText(/help/, (msg) => bot.sendMessage(msg.chat.id, "This bot implements a T-Rex jumping game. Say /game if you want to play."));
bot.onText(/start|game/, (msg) => bot.sendGame(msg.chat.id, gameName, quizButtons));

bot.on("callback_query", function (query) {
    if (query.game_short_name !== gameName) {
        bot.answerCallbackQuery(query.id, "Кешірерсіз, '" + query.game_short_name + "' табылмады.");
    } else {
        queries[query.id] = query;
        let gameurl = "https://kzredubot.herokuapp.com/index.html?id="+query.id;
        bot.answerCallbackQuery({
            callback_query_id: query.id,
            url: gameurl,
            text: "Бастау"
        });
    }
});
bot.on("inline_query", function(iq) {
      bot.answerInlineQuery(iq.id, [ { type: "game", id: Math.floor(Math.random() * 1111), game_short_name: gameName } ], quizButtons ); 
});

server.use(express.static(path.join(__dirname, 'public')));

server.get("/highscore/:score", function(req, res, next) {
    if (!Object.hasOwnProperty.call(queries, req.query.id)) return next();
    let query = queries[req.query.id];
    let options;
    if (query.message) {
        options = {
            chat_id: query.message.chat.id,
            message_id: query.message.message_id
        };
    } else {
        options = {
            inline_message_id: query.inline_message_id
        };
    }
    bot.setGameScore(query.from.id, parseInt(req.params.score), options, 
        function (err, result) {});
});
server.listen(port);
