var gear = require("../../gearbox.js");
var fs = require('fs');
var paths = require("../../paths.json");
var locale = require('../../../utils/multilang_b');
var mm = locale.getT();
const eko = require("../../archetypes/ekonomist.js")

var cmd = 'eval';

var init = async function (message,userDB,DB) {

    try{
        var Server = message.guild
        var Member = message.member
    }catch(e){

}

const clean = text => {

  if (typeof(text) === "string")

    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));

  else

      return text;

}

var Channel = message.channel;
var Author = message.author;
if (Author.bot) return;
var Target = message.mentions.users.first() || Author;
var MSG = message.content;
var bot = message.botUser
var args = MSG.split(' ').slice(1)[1]
var LANG = message.lang;
var medalbase = JSON.parse(fs.readFileSync("./resources/lists/medals.json"))
var bgbase = JSON.parse(fs.readFileSync("./resources/lists/backgrounds.json"))

        String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var days   = Math.floor(hours / 24);

    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+'h '+minutes+'m '+seconds+'s';
        days > 1 ? time = days+" days " : time = time
    return time;
}



//-------MAGIC----------------
const params = MSG.split(" ").slice(1);
var code = params.join(" ").toLowerCase();

if (code.includes("minha id")){
    return Channel.send("Sua ID é "+Author.id)
}
    if (code.includes("id de")){
    return Channel.send("A ID de "+Target.username+" é "+Target.id)
}
        if (code.includes("sua id")){
    return Channel.send("Minha ID é "+bot.user.id)
}
if (code.includes("server id")||code.includes("id desse server")){
    return Channel.send("A ID deste Server é "+Server.id)
}
    if (code.includes("channel id")){
    return Channel.send("A ID deste Canal é "+Server.id)
}
        if (code.includes("canais neste")){
    return Channel.send("Temos "+Server.channels.size+" Canais neste Server")
}
            if (code.includes("pessoas neste")||code.includes("usuários neste")||code.includes("membros neste")||(code.includes("membros")&&code.includes("quantos"))){
    return Channel.send("Temos "+Server.members.size+" Pessoas neste Server")
}





  if (Author.id != '88120564400553984' && Author.id !="163200584189476865" && Author.id !="203139018760781824") return message.reply('Only my master can send me direct orders. now begone!');

  if(message.author.id!='88120564400553984'){

if(message.content.includes("leave")) return message.reply("HIJACKING!");
if(message.content.includes("kick")) return message.reply("NOPE!");
if(message.content.includes("delete")) return message.reply("DELETION BLOCKED!");
  }


      try{
          if (code.includes("suspender")){
          message.reply("Poi~ Suspending activities, master!")
          message.channel.send(":mobile_phone_off: Pollux shutting down.").then(e=>  process.exit(1))

}

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


     const params = MSG.split(" ").slice(1);
    try {
      var code = params.join(" ");

    if (code === "2+2"){
        return Channel.send("```Tá me achando com cara de calculadora, palhaço? ```").then(m=>{ setTimeout(c=>Channel.send("```(A propósito, 2+2 são 4) ```"),5000 )})
    }

    if (code=="smodules") {
      return Channel.send("```js\n "+require("util").inspect(Server.dDATA.modules)+"```")
    }
    if (code=="supmods") {
      return Channel.send("```js\n "+require("util").inspect(_objectWithoutProperties(Server.dDATA,["channels","modules"]))+"```")
    }


      var evaled = eval(await code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch(err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
    }
  }catch(err){console.log(err)}
}
module.exports = {pub:false,cmd: cmd, perms: 4, init: init, cat: 'misc'};
