const http = require('http');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const ffmpeg = require('ffmpeg')
const ffmpegstatic = require('ffmpeg-static')
const opus = require('@discordjs/opus')
let cooldown = new Set();
let cdseconds = 1;
let invitev = new Set();
let inseconds = 1;
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");https:
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";
const vcfix = "vc=";
  
client.on('ready', () => {
  client.user.setActivity("Activating Windows");
  console.log('I am ready!');
});
client.on('message', async message => {



 //const sideini = [`${prefix}sidespeaketh`, `${prefix}Sidespeaketh`, `${prefix}Side-speaketh`, `${prefix}side-speaketh`, `${prefix}side`, `${prefix}Side`];
 //if( sideini.some(word => message.content.startsWith(word)) ) {
      //let sidein = message.guild.roles.get("697174712610062337");
     // let member = message.member;
      //  if (member) {
        //  member.addRole(sidein);
        //    message.react('👍').then(() => {
       // }).catch(err => {
       ///   message.channel.send('error');
          //  message.react('❌');
          //  console.error(err);
         // });
       // } else {  
        //  message.channel.send('error');
        // message.react('❌');
       // }
     // }
  
   //const sideouti = [`${prefix}leave`, `${prefix}Leave`];
 //if( sideouti.some(word => message.content.startsWith(word)) ) {
     // let sideout = message.guild.roles.get("697174712610062337");
     // let member = message.member;
     //   if (member) {
       //   member.removeRole(sideout)
      //      message.react('👍').then(() => {
       // }).catch(err => {
      //    message.channel.send('error');
      //      console.error(err);
      //    });
     //   } else {
     //     message.channel.send('error');
    //    }
   //   }
    
  
 const nickname = [`${prefix}nickname`];
 if( nickname.some(word => message.content.startsWith(word)) ) {
    message.guild.me.setNickname(message.content.replace(`${prefix}nickname `, ''));
}
  
  const cum = [`${prefix}Cum`, `${prefix}cum`];
  if( cum.some(word => message.content.startsWith(word)) ) {
      message.channel.send('<@!654898893078921218>');
  }
  
  
  const Creeper = [`${prefix}Creeper`, `${prefix}creeper`];
  if( Creeper.some(word => message.content.startsWith(word)) ) {
      message.channel.send('Aw man');
  }

 const Dance = [`${prefix}Junker Dance`, `${prefix}Junker dance`, `${prefix}junker Dance`, `${prefix}junker dance`];
 if( Dance.some(word => message.content.startsWith(word)) ) {
  const localFileAttachment = new Discord.Attachment('./Images/JunkerDance.gif')
  message.channel.send(localFileAttachment)
 }
 const Pewnig = [`${prefix}Pewnig`, `${prefix}pewnig`];
 if( Pewnig.some(word => message.content.startsWith(word)) ) {
  const localFileAttachment = new Discord.Attachment('./Images/Pewnig.jpg')
  message.channel.send(localFileAttachment)
 }
 const Bowsnig = [`${prefix}Bowsnig`, `${prefix}bowsnig`];
 if( Bowsnig.some(word => message.content.startsWith(word)) ) {
  const localFileAttachment = new Discord.Attachment('./Images/Bownig.jpg')
  message.channel.send(localFileAttachment)
 }
 const Thicc = [`${prefix}Thicc Luigi`, `${prefix}Thicc luigi`, `${prefix}thicc Luigi`, `${prefix}thicc luigi`];
 if( Thicc.some(word => message.content.startsWith(word)) ) {
  const localFileAttachment = new Discord.Attachment('./Images/Thiccluig.gif')
  message.channel.send(localFileAttachment)
 }
 const Gnome = [`${prefix}Gnome`, `${prefix}gnome`];
 if( Gnome.some(word => message.content.startsWith(word)) ) {
  const localFileAttachment = new Discord.Attachment('./Images/Gnome.jpg')
  message.channel.send(localFileAttachment)
 }
 const Ranch = [`${prefix}Ram Ranch`, `${prefix}Ram ranch`, `${prefix}ram Ranch`, `${prefix}ram ranch`];
 if( Ranch.some(word => message.content.startsWith(word)) ) {
  message.channel.send('18 Naked Cowboys');
 }
 const Eraser = [`${prefix}Eraser`, `${prefix}eraser`];
 if( Eraser.some(word => message.content.startsWith(word)) ) {
    const localFileAttachment = new Discord.Attachment('./Images/Erase.jpg')
    message.channel.send(localFileAttachment)
 }
const Garf = [`${prefix}Garf`, `${prefix}garf`];
if( Garf.some(word => message.content.startsWith(word)) ) {
  const localFileAttachment = new Discord.Attachment('./Images/garf.gif')
  message.channel.send(localFileAttachment)
}
const yknow = [`${prefix}Yknow`, `${prefix}yknow`, `${prefix}y'know`, `${prefix}Y'know`];
if( yknow.some(word => message.content.startsWith(word)) ) {
  message.channel.send("https://cdn.discordapp.com/attachments/618589508597710848/693319254757605448/dsgfdsgffdg.mp4")
}

const subway = [`${prefix}subway`, `${prefix}Subway`];
if( subway.some(word => message.content.startsWith(word)) ) {
  message.channel.send("https://cdn.discordapp.com/attachments/659976346268729354/698001135855861811/Subways_Uncharted_3_TV_Promo.mp4")
} 
  
const cringe = [`${prefix}Cringe`, `${prefix}cringe`];
if( cringe.some(word => message.content.startsWith(word)) ) {
  message.channel.send("https://cdn.discordapp.com/attachments/618589508597710848/705562896738025482/EKEwKiHeDTnsxmlj.mp4")
} 
  
const dm = [`${prefix}invite`, `${prefix}Invite`];
if( dm.some(word => message.content.startsWith(word)) ) {
  message.author.send("Here's my invite link to spread my junk https://discordapp.com/oauth2/authorize?client_id=613409750050144296&scope=bot&permissions=8")
}
  
const golira = [`${prefix}golira`, `${prefix}Golira`];
if( golira.some(word => message.content.startsWith(word)) ) {
if (!message.member.user.id == "372883539865370636") return;
  message.channel.send("golira 🦍")
}
  
 const undertale = [`${prefix}homestuck`, `${prefix}Homestuck`];
 if( undertale.some(word => message.content.startsWith(word)) ) {
  message.channel.send('<@!264890302873993217>');
 }
  
 const tablevid = [`${prefix}table`, `${prefix}Table`];
 if( tablevid.some(word => message.content.startsWith(word)) ) {
{ const replies = ["https://cdn.discordapp.com/attachments/690016420406624296/719272412717252618/tablewhip.mp4", "https://cdn.discordapp.com/attachments/690016420406624296/719269543427440701/noslam.mp4", "https://cdn.discordapp.com/attachments/690016420406624296/719265795955228806/table4.mp4", "https://cdn.discordapp.com/attachments/690016420406624296/719262366205870182/table2.mp4", "https://cdn.discordapp.com/attachments/690016420406624296/719261323485249616/table.mp4", "https://cdn.discordapp.com/attachments/690016420406624296/720862752947699783/video041_3.mp4"]
 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); }
 }
  

 const Joke = [`${prefix}Explain Joke`, `${prefix}Explain joke`, `${prefix}explain Joke`, `${prefix}explain joke`];
 if( Joke.some(word => message.content.startsWith(word)) ) {
{ const replies = ["Joke Explained: Funny", "Joke Explained: Motherfucking Jojo reference", "Joke Explained: Pee and/or poo is funny", "Joke Explained: Isreal", "Joke Explained: Murder is ethical and hot", "Joke Explained: Samd undertaker dum dum dum dum dum dum dum dum dum dum", "Joke Explained: Homosexuality is funny", "Joke Explained: Garfield lasogana", "Joke Explained: Penis in vagaegae", "Joke Explained: Sex.", "Joke Explained: Joke Explained", "Joke Explained: r/IHaveReddit", "joke explained: capitalize your fucking sentences", "Joke Explained: H", "Joke Explained: Do not sleep in the overworld", "Joke Explained: Link in the description", "Joke Explained: N-word", "Joke Explained: Gun violence is a fun activity", "Joke Explained: I'm not explaining that fuck off", "Joke Explained: You are the joke", "Joke explained: Funny clown music", "Joke explained: Global warming is vegan propaganda", "Joke explained: Salsa cracker vagina", "Joke Explained: Nice Repost!", "Joke Explained: I have erectile dysfunction :D", "Joke Explained: uwu I want to taste your spewmy wewmy", "Joke Explained: Ho ho ho ha ha, ho ho ho he ha. Hello there, old chum. I’m gnot an elf. I’m gnot a goblin. I’m a gnome. And you’ve been, gnomed!", "Joke Explained: Fuck Hazbin Hotel, all my homies hate Hazbin Hotel", "Joke Explained: Consume the cum chalice", "Joke Explained: Shut the fuck up PP", "Joke Explained: Poggers in the chat", "Joke Explained: Funny Fart Unfunny funny 2 i hate bosnia"]
 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); }
 }

 const Obamaimage = [`${prefix}Obama`, `${prefix}obama`];
 if( Obamaimage.some(word => message.content.startsWith(word)) ) {
 var Corn = new Discord.Attachment('./Obam/ObamaCorn.gif')
 var Cube = new Discord.Attachment('./Obam/ObamaCube.png')
 var Donut = new Discord.Attachment('./Obam/ObamaDonut.gif')
 var Globe = new Discord.Attachment('./Obam/ObamaGlobe.gif')
 var Hedron = new Discord.Attachment('./Obam/ObamaHedron.gif')
 var Line = new Discord.Attachment('./Obam/ObamaLine.gif')
 var Nuke = new Discord.Attachment('./Obam/ObamaNuke.gif')
 var Pyramid = new Discord.Attachment('./Obam/ObamaPyramid.gif')
 var Redacted = new Discord.Attachment('./Obam/ObamaRedacted.png')
 var Rubix = new Discord.Attachment('./Obam/ObamaRubix.jpg')
 var Tesseract = new Discord.Attachment('./Obam/ObamaTesseract.gif')
 var This = new Discord.Attachment('./Obam/This.jpg')
 var Monkey = new Discord.Attachment('./Obam/ObamaMonkey.gif')
{ const replies = [Corn, Cube, Donut, Globe, Hedron, Line, Nuke, Pyramid, Redacted, Rubix, Tesseract, This, Monkey]
 message.replyimage = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replyimage]); }
 }

            const help = [`${prefix}Help`, `${prefix}help`, `${prefix}List`, `${prefix}list`];
if( help.some(word => message.content.startsWith(word)) ) {
  const Help1 = new Discord.RichEmbed()
  .setTitle("Junker's Junk")
  .setColor(0xff5f67)
  .setFooter("Hi! I'm Nathan Drake. And if you're the adventurous-type like me, then get in on the Subway Taste For Adventure. GET A CHANCE TO WIN EPIC TRIPS AND EXCLUSIVE ACCESS TO UNCHARTED 3! Get your code on 30-oz. DRINKS today! Subway: where winners eat! Ow. \n Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/attachments/613408923176927234/689290040676843563/JunkerDance.gif")
  .addField("Image/Video Commands", "=junker dance \n=pewnig \n=bownig \n=thicc luigi \n=gnome \n=eraser \n=garf \n=yknow \n=subway \n=cringe")
  .addField("Prefixless Text Commands", "Funny \nFart \nfunny 2 \ni hate bosnia \nUnfunny \nDonkey Kong", true)
  .addField("Text Commands", "=pog \n=creeper \n=ram ranch \n=urchin", true)
  .addField("Randomized Commands", "=explain joke \n=obama \n=anmatisk \n=vinny \n=table \n=compliment", true)
  .addField("Useful Shit", "=giverole <ROLE> <MEMBER> \n=avatar <MEMBER> \n=nickname <NICKNAME> \n=invite \n=activate jeff", true);
  
  const Help2 = new Discord.RichEmbed()
  .setTitle("Junker's Junk")
  .setColor(0xff5f67)
  .setFooter("YOU MOTHER FUCKER YOU ASKED MY BF TO HAVE A MATCHING PFP WITH YOU I SWEAR TO GOD IF YOU TRY ANYTHING I WILL MAKE YOU SUFFER I WILL FUCKING DESTROY YOU INSIDE AND OUT I FUCKING MEAN IT \n Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/attachments/663769176426545182/689569810329501731/emote.gif")
  .addField("Image/Video Commands", "=junker dance \n=pewnig \n=bownig \n=thicc luigi \n=gnome \n=eraser \n=garf \n=yknow \n=subway \n=cringe")
  .addField("Prefixless Text Commands", "Funny \nFart \nfunny 2 \ni hate bosnia \nUnfunny", true)
  .addField("Text Commands", "=pog \n=creeper \n=ram ranch \n=urchin", true)
  .addField("Randomized Commands", "=explain joke \n=obama \n=anmatisk \n=vinny \n=table \n=compliment", true)
  .addField("Useful Shit", "=giverole <ROLE> <MEMBER> \n=avatar <MEMBER> \n=nickname <NICKNAME> \n=invite \n=activate jeff", true);
  
  const Help3 = new Discord.RichEmbed()
  .setTitle("Junker's Junk")
  .setColor(0xff5f67)
  .setFooter("Yknow during the Las Vegas shooting Steven Paddick supposedly expend over 3 thousand rounds of ammunition over the course of 10 minutes from 27 AR-15s with bumstocks despite the fact that that would have required him to drop a gun after each 30 rounds was empty and videos from the survivors show that is was a nonstop stream of bullets with a firing rate much higher than a bumstock is capable ofproducing coming from multiple locations which appear to be M240-LMGs after the fbi took over the investigation his house somehow burnt down along with all the evidence and photos of his hotel room he shot from showed only about 50 spent shells years later we don't know his motivation and strangely there was no follow up on the biggest mass shooting is us history his brother had numerous pressinterviews where it claimed it made no sense and suspiciously the very next day he was arrested to possessing hundreds of terabytes of child porn supposedly he stored all that in a 20 year old computer which ran windows 95 at least according to the photos ta \n Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/attachments/663769176426545182/689571215647703059/emote.gif")
  .addField("Image/Video Commands", "=junker dance \n=pewnig \n=bownig \n=thicc luigi \n=gnome \n=eraser \n=garf \n=yknow \n=subway \n=cringe")
  .addField("Prefixless Text Commands", "Funny \nFart \nfunny 2 \ni hate bosnia \nUnfunny", true)
  .addField("Text Commands", "=pog \n=creeper \n=ram ranch \n=urchin", true)
  .addField("Randomized Commands", "=explain joke \n=obama \n=anmatisk \n=vinny \n=table \n=compliment", true)
  .addField("Useful Shit", "=giverole <ROLE> <MEMBER> \n=avatar <MEMBER> \n=nickname <NICKNAME> \n=invite \n=activate jeff", true);
 { const replies = [Help1, Help2, Help3]
 message.replyimage = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replyimage]); }
 }
  

  

const embed = [`${prefix}embed`];
  if( embed.some(word => message.content.includes(word)) ) {
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
  .addField("bot", `a`, true)
  .addField("bot", `a`, true)
  .addField("bot", `a`, true)

message.channel.send(exampleEmbed);
}
          const Funny = ["Funny", "funny bot", "Funny bot", "Funny Bot"];
if( Funny.some(word => message.content.includes(word)) ) {
message.channel.send("funny");
}
  
          const donkey = ["Donkey Kong"];
if( donkey.some(word => message.content.includes(word)) ) {
 var kong = new Discord.Attachment('./Images/donke.jpg')
message.channel.send(kong);
}
  
          const donkey2 = ["DONKEY KONG"];
if( donkey2.some(word => message.content.includes(word)) ) {
 var kong2 = new Discord.Attachment('./Images/donke2.jpg')
message.channel.send(kong2);
}
  
            const unFunny = ["unFunny", "Unfunny", "UnFunny"];
if( unFunny.some(word => message.content.includes(word)) ) {
message.channel.send("unfunny");
}
  
            const Fart = ["Fart", "fart bot", "Fart bot", "fart Bot"];
if( Fart.some(word => message.content.includes(word)) ) {
message.channel.send("fart")
}

            const Fartdos = ["funny 2",];
if( Fartdos.some(word => message.content.includes(word)) ) {
message.channel.send("funny2")
}
  
  
const Urchin = [`${prefix}Urchin`, `${prefix}urchin`, `${prefix}creative`, `${prefix}Creative`];
  if( Urchin.some(word => message.content.startsWith(word)) ) {
      message.channel.send('fuck you creative urchin 87');
  }
  
  const Bosnia = [`i hate bosnia`, `I hate bosnia`, `i hate Bosnia`, `I hate Bosnia`];
  if( Bosnia.some(word => message.content.includes(word)) ) {
      message.channel.send('and Croatia');
  }
  
  
const vinny = [`${prefix}vinny`, `${prefix}Vinny`, `${prefix}Vinesauce`, `${prefix}vinesauce`];
 if( vinny.some(word => message.content.startsWith(word)) ) {
{ const replies = ["https://twitter.com/NoContextVinny/status/1255334606234177536", "https://twitter.com/NoContextVinny/status/1255633815806099456", "https://twitter.com/NoContextVinny/status/1254927168636891139", "https://twitter.com/NoContextVinny/status/1251361002983227392", "https://twitter.com/NoContextVinny/status/1251779714680832001", "https://twitter.com/NoContextVinny/status/1253421345053921284", "https://twitter.com/NoContextVinny/status/1253442475009720328", "https://twitter.com/NoContextVinny/status/1253875985088462850", "https://twitter.com/NoContextVinny/status/1250769897635958784", "https://twitter.com/NoContextVinny/status/1250272584379142144","https://twitter.com/NoContextVinny/status/1254499082338525190", "https://mobile.twitter.com/SolidGintaro/status/1251352585665228803", "https://mobile.twitter.com/NoContextVinny/status/1249986958199328768", "https://mobile.twitter.com/NoContextVinny/status/1248621603878875138", "https://mobile.twitter.com/NoContextVinny/status/1247966881346129920", "https://mobile.twitter.com/NoContextVinny/status/1247744788540960777", "https://mobile.twitter.com/NoContextVinny/status/1247648158433280000", "https://mobile.twitter.com/NoContextVinny/status/1246688626433568769", "https://mobile.twitter.com/NoContextVinny/status/1245048832142041090", "https://mobile.twitter.com/NoContextVinny/status/1245591550475698183", "https://twitter.com/NoContextVinny/status/1257812138707636224", "https://twitter.com/NoContextVinny/status/1241903380181680133", "https://twitter.com/NoContextVinny/status/1241270170854871040", "https://twitter.com/NoContextVinny/status/1241571760702664705", "https://twitter.com/NoContextVinny/status/1240816208213159936", "https://twitter.com/NoContextVinny/status/1240401702018220037", "https://twitter.com/NoContextVinny/status/1258518799306780674"]
 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); }
 }
  
const compliment = [`${prefix}compliment`, `${prefix}Compliment`];
 if( compliment.some(word => message.content.startsWith(word)) ) {
{ const replies = ["Hey are you NOT bEEp b00p#5033? cuz you're actually a decent human being.", "are you the sun? because holy heck are you, um, yes.", "you're not creative urchin 87 and thats good enough for me", "ur hot", "fuck you", "why are you black", "hey baby are you a homestuck fan? because you are karkalicious!", "are you a command block because you make my wither storm", "https://cdn.discordapp.com/attachments/690016420406624296/721529251911827536/800px-ManiaSPZ1.png", "hey girl are you a bottom? because you're going to hell.", "i want cum you", "im stuff", "damn girl you must be a forward aerial because i wanna hit that", "Let’s say, you’ve been a bad girl. Let’s say, hypothetically, you’ve been a naughty girl even. Ok, and if you were a naughty girl you would also be my dirty little slut right? then hypothetically speaking you would be my little cumslut.", "Are you Jeff because you activate me", "https://cdn.discordapp.com/attachments/690016420406624296/721532407760814090/i-am-foxy.png", "=explain joke", "You. Get in. https://cdn.discordapp.com/attachments/690016420406624296/721533705742450708/Mason-Jar-Transparent.png", "real"]
 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); }
 }

  
const pog = [`${prefix}pog`, `${prefix}Pog`];
 if( pog.some(word => message.content.startsWith(word)) ) {
{ const replies = ["pog", "poggers", "pogchamp", "poggerchamp", "pogchiemp", "pogré"]
 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); }
 }
  
const giverole = [`${prefix}giverole`, `${prefix}Giverole`];
  if( giverole.some(word => message.content.startsWith(word)) ) {
    const user = message.mentions.users.first();
        if (user) {
      const member = message.guild.member(user);
      if (member) {
  const embedrole = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription (`Successfully gave the role to ${user.tag}`)
  .setFooter("Danmatisk Enterprises")
message.channel.send(embedrole);
      }
    }
  }

const avatar = [`${prefix}Avatar`, `${prefix}avatar`];
  if( avatar.some(word => message.content.startsWith(word)) ) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
  const avaemb = new Discord.RichEmbed()
  .setColor(0x9400D3)
  .setDescription (`${user.tag}'s avatar`)
  .setFooter("Danmatisk Enterprises")
  .setImage(user.avatarURL)
  message.channel.send(avaemb)
    //message.reply(user.avatarURL);
    } else {
  const avaemb2 = new Discord.RichEmbed()
  .setColor(0x9400D3)
  .setDescription (`Your avatar`)
  .setFooter("Danmatisk Enterprises")
  .setImage(message.author.avatarURL)
  message.channel.send(avaemb2)
      //message.reply(message.author.avatarURL);
    }
  }
  
//const jeff = [`${prefix}activate jeff`, `${prefix}Activate Jeff`, `${prefix}Activate jeff`, `${prefix}activate Jeff`];
  //if( jeff.some(word => message.content.startsWith(word)) ) {
  //message.channel.send("Activating Jeff...");
  //setTimeout(function(){
      //message.channel.send("Jeff has been activated.")
 //}, 60000);
  //}
  
const jeff = [`${prefix}activate jeff`, `${prefix}Activate Jeff`, `${prefix}Activate jeff`, `${prefix}activate Jeff`];
  if( jeff.some(word => message.content.startsWith(word)) ) {
    message.channel.send("Activating Jeff...");
    var response = Math.floor(Math.random()*6);
         if(response == 0){
      setTimeout(function(){
          message.channel.send("Jeff has been activated.")
      }, 60000);
         }
         if(response == 1){
      setTimeout(function(){
          message.channel.send("Jeff has been activated.")
      }, 30000);
         }
         if(response == 2){
      setTimeout(function(){
          message.channel.send("Jeff has been activated.")
      }, 10000);
         }
         if(response == 3){
      setTimeout(function(){
          message.channel.send("Jeff has been activated.")
      }, 10);
         }
         if(response == 4){
      setTimeout(function(){
          message.channel.send("Jeff has been activated.")
      }, 120000);
         }
         if(response == 5){
      setTimeout(function(){
          message.channel.send("Jeff activation has failed.")
      }, 60000);
         }
  }
  
  //const avatar = [`${prefix}Avatar`, `${prefix}avatar`];
  //if( avatar.some(word => message.content.startsWith(word)) ) {
//message.reply(message.author.avatarURL);
  //}

 //           const mute = ["muted", "mute", "Muted", "Mute"];
//if( mute.some(word => message.content.includes(word)) ) {
//if (message.channel.id != 690017465639501954  ) return;
//message.channel.send("https://cdn.discordapp.com/attachments/618589508597710848/706965362255855656/Thanks_max.jpg")
//}
  
if (message.attachments.size > 0 || message.content.includes("https://cdn.discordapp.com/attachments/") || message.content.includes("https://tenor.com/view/")) {
if (message.member.roles.has("653071153723605037")) return;
if (message.member.hasPermission("ADMINISTRATOR")) return;
if (message.channel.id != 690016420406624296  ) return;
if (message.member.roles.has("600484909324435490")) return;
if (cooldown.has(message.channel.id)){
  message.delete();
}
if (!message.member.hasPermission("ADMINISTRATOR")) {
  cooldown.add(message.channel.id);
}
setTimeout(() => {
  cooldown.delete(message.channel.id)
}, cdseconds * 60000)
  }
  
//if (message.content.startsWith(`${prefix}a`)) {
//message.react('👍');
//}

if (message.content.startsWith(`${prefix}invallow`)) {
if (message.member.hasPermission("ADMINISTRATOR")) {
  invitev.add(message.channel.id);
  invitev.add(message.channel.id);
  message.channel.send("Invites are allowed for 10 seconds.")
}
}

  const persom = ["discord.gg/", "Discord.gg/", "http://bit.ly/superswagguy", "pornhub.com", "https://uploads.scratch.mit.edu/users/avatars/21945382.png", "https://yt3.ggpht.com/a/AGF-l79OiNO1p807rInPEYioDA_FhtE8RO0Z_1fG6Q=s900-c-k-c0xffffffff-no-rj-mo", "http://mebuika.kenkenpa.net/ikamaker.html"];
if( persom.some(word => message.content.includes(word)) ) {
  if (message.channel.id != 690016420406624296  ) return;
  if (invitev.has(message.channel.id)) return;
  message.delete();
}
  
setTimeout(() => {
  invitev.delete(message.channel.id)
}, inseconds * 10000)
  
  if (message.content.startsWith(`${prefix}anmatisk`)) {
const can = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Canmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://images-ext-1.discordapp.net/external/eA28TH-L_XP59yxIfYb8U8KfEifLkJnPbOEx-_fAPY0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/494119844137140225/fbee069831cb1fd88047025787a28e48.png?width=300&height=300")
const fan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Fanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://images-ext-2.discordapp.net/external/ACJj1oiFI3ewZ_O6_cckNqKDfBYBo-SmuMDT-fq5D-U/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/576012369965088789/0d57f9516cfa99196d77dc69fbefe15f.png?width=300&height=300")
const bran = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Branmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://images-ext-1.discordapp.net/external/u_gIRNdBxKKhHFCQ-1VsoE7ZAoYZ4nykOmRPfyod2tw/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/576013578239344670/416abd9b3cb5e5ba8e8f097c8017bc7e.png?width=301&height=301")
const man = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Manmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://images-ext-1.discordapp.net/external/_OXDJnaz2OvvwILSG8bdGsMucRYJnhFct33G3eJnSpA/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/494118645224701952/118b829d7902aca83516d3cd14af5220.png?width=300&height=300")
const pan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Panmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://images-ext-1.discordapp.net/external/rcdM2hzuinMYRdvIx0AzT9yPnTxtCexo-k8KaCip9UA/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/576016207996649492/a43b1db8f14968d502b82851ddae9edb.png?width=300&height=300")
const ban = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Banmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://images-ext-1.discordapp.net/external/uL05UHB7TK4WSZwviaxmDvhhOMEg37DRBzXC-WdXIsY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/576018209573044264/ebae7c8e2667c603479ee9aead7ce723.png?width=342&height=342")
const ran = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Ranmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/576017021037314058/a44368b28cb93dcefb26a85e7ace0831.png?size=1024")
const cran = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Cranmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/576022550229024779/bd4e422b50faac82bac41aaba9622a46.png?size=1024")
const flan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Flanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/576020866811297792/d3489d81fdac04c32198ed28a220b197.png?size=1024")
const van = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Vanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/576188482653782037/c3d80d9d8be0ffe74c4275815ee62019.png?size=1024")
const japan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Japanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/576193881834520597/69441523c9474ff456059e78c24e991c.png?size=1024")
const iran = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Iranmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/642558142835720202/530a5806b4a72743e1903ff69794ca31.png?size=1024")
const lan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Lanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/642560375023337505/e82377c3d3a70792ed124215f1b9bc54.png?size=1024")
const tan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Tanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/642561877678882829/375705643eccad107b1e3ab9ccf07ad0.png?size=1024")
const tran = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Tranmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/642562872592826389/5034ce536846becaea748effb7ec1d64.png?size=1024")
const satan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Satanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/686077734707134469/6a4d6b075ac13f1715b031c78fb43ce6.png?size=1024")
const scan = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setDescription ("Your wacky -anmatisk is ``Scanmatisk``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/689702255804547134/ec09dc81ed81e68da779327d31a192c5.png?size=1024")
//const toko = new Discord.RichEmbed()
  //.setColor(0xFFFF00)
  //.setDescription ("Your wacky -anmatisk is ``Danmatoko``")
  //.setFooter("Danmatisk Enterprises")
 // .setImage("https://cdn.discordapp.com/avatars/686087591191117840/8a9e8eabf188567c2e339b325735d2f7.png?size=1024")
 { const replies = [can, fan, bran, man, pan, ban, ran, cran, flan, van, japan, iran, lan, tan, tran, satan, scan]
 message.replyimage = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replyimage]); }
 }
  
  if (message.content.startsWith(`${prefix}superior`)) {
const akechi = new Discord.RichEmbed()
  .setColor(0x00eeff)
  .setDescription ("JunkerBot is superior to ``AkechiBot``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/707411212434014281/6c9fb55316aef4e5352543cea913446b.png?size=2048")
const mee6 = new Discord.RichEmbed()
  .setColor(0x00eeff)
  .setDescription ("JunkerBot is superior to ``MEE6``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.png?size=2048")
const notsobot = new Discord.RichEmbed()
  .setColor(0x00eeff)
  .setDescription ("JunkerBot is superior to ``NotSoBot``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/439205512425504771/7c2306f9ce96ce9805584ef823f58648.png?size=2048")
const rythm = new Discord.RichEmbed()
  .setColor(0x00eeff)
  .setDescription ("JunkerBot is superior to ``Rythm``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/235088799074484224/16c197c4c3f0eb808f9bceb6e1075e71.png?size=2048")
const jx = new Discord.RichEmbed()
  .setColor(0x00eeff)
  .setDescription ("JunkerBot is superior to ``junkerBot X``")
  .setFooter("Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/avatars/678372076305776660/835c4c3569b6ccdbaa9325bc52b2730c.png?size=2048")
 { const replies = [akechi, mee6, notsobot, rythm, jx]
 message.replyimage = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replyimage]); }
 }
  
  
  
if (message.content.startsWith(`!play dead deer`)) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./sketch/sketchy.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const vurchin = [`${vcfix}urchin`, `${vcfix}Urchin`];
if( vurchin.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/urchin.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}

const vid48 = [`${vcfix}video48`, `${vcfix}Video48`, `${vcfix}Video 48`, `${vcfix}video 48`];
if( vid48.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/video48.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const VDK = [`${vcfix}Donkey kong`, `${vcfix}donkey kong`, `${vcfix}donkey Kong`, `${vcfix}Donkey Kong`, `{vcfix}Dk`, `{vcfix}DK`, `{vcfix}dk`];
if( VDK.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    message.react('👍');
    const dispatcher = connection.playFile('./audio/DONKEY KONG.mp3').then(() => {
    connection.disconnect();
    })
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const BL = [`${vcfix}black people`, `${vcfix}Black people`, `${vcfix}black People`, `${vcfix}Black People`];
if( BL.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/hate-black.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const frogge = [`${vcfix}frogge`, `${vcfix}Frogge`];
if( frogge.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/frogge.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const fecal = [`${vcfix}fecal matter`, `${vcfix}Fecal matter`, `${vcfix}Fecal Matter`, `${vcfix}fecal Matter`];
if( fecal.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/Fecal Matter on My Toothbrush (1).mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const obamfart = [`${vcfix}obama farts`, `${vcfix}Obama farts`, `${vcfix}Obama Farts`, `${vcfix}obama Farts`];
if( obamfart.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/obamafart.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const cornpoop = [`${vcfix}corn poop`, `${vcfix}Corn poop`, `${vcfix}Corn Poop`, `${vcfix}corn Poop`];
if( cornpoop.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/Corn in my Poop.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const pee = [`${vcfix}pee`, `${vcfix}Pee`];
if( pee.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/The Pee Song!.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const stronger = [`${vcfix}Stronger than you`, `${vcfix}stronger than you`];
if( stronger.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/stronger.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const under = [`${vcfix}undertale`, `${vcfix}Undertale`];
if( under.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/umdertale.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const rape = [`${vcfix}raping`, `${vcfix}Raping`];
if( rape.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/raping.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const what = [`${vcfix}what`, `${vcfix}What`, `${vcfix}How`, `${vcfix}how`];
if( what.some(word => message.content.startsWith(word)) ) {
// Create a dispatcher
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();
    const dispatcher = connection.playFile('./audio/How.mp3');
    message.react('👍');
// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
	}
}
  
const leave = [`${vcfix}leave`, `${vcfix}Leave`];
if( leave.some(word => message.content.startsWith(word)) ) {
  voiceChannel.leave();
}
  
            const vchelp = [`${vcfix}Help`, `${vcfix}help`, `${vcfix}List`, `${vcfix}list`];
if( vchelp.some(word => message.content.startsWith(word)) ) {
  const Helpvc = new Discord.RichEmbed()
  .setTitle("Junker's Audible Junk")
  .setColor(0x1dff00)
  .setFooter("Whoa-oh-oh-oh-oh-oh-oh-oh-oh-oh Story of UNDERTALE I fell from the light Talk? Or should I fight? Monster genocide This my UNDERTALE I fell through a cave on Mt. Ebott I faced an evil talking flower in a pot Explains the plot, wants me dead, wants me to rot Toriel saves me, takes me to her home And hooks me up with a brand-new monster phone Leaves me alone, but I escape and meet some bones Should I be a pacifist? Or should I use my fists? I’m feeling evil, think I’ll kill them all I’m homicidal, and I’ve got a taste I want to wipe out the Monster race I’ve got no patience, got no resolve I will slaughter, screw the dialogue I fell from the light Talk? Or should I fight? Monster genocide This my UNDERTALE I’ll slaughter Undyne, I’ll waste who I choose With all this EXP there’s no way that I’ll lose Now watch me move, I won’t stop, I’m feelin' rude Asgore is shaking, he hears my approach I’ll slaughter Sans and squash his bro like a roach Chara’s my coach, all these monsters I will poach Screw being pacifist I think I’ll use my fists I’m feeling evil, think I’ll kill them all I’m homicidal, and I’ve got a taste I want to wipe out the Monster race I’ve got no patience, got no resolve I will slaughter, screw the dialogue Burnt pan, toy knife, use a stick to take your life Tough glove, ballet shoes, epic fight like front page news King Asgore wants to collect human souls Seven of them, is his ultimate goal Open the door, to humanity’s realm Start a new war, humans overwhelm I’m homicidal, and I’ve got a taste I want to wipe out the Monster race I’ve got no patience, got no resolve I will slaughter, screw the dialogue \n Danmatisk Enterprises")
  .setImage("https://cdn.discordapp.com/attachments/690016206345994300/713649451649990666/emote.gif")
  .addField("Music", "vc=video48 \nvc=fecal matter \nvc=obama farts \nvc=corn poop \nvc=pee \nvc=stronger than you \nvc=undertale \nvc=raping \nvc=diarrhea", true)
  .addField("Not Music", "!play dead deer \nvc=urchin \nvc=donkey kong \nvc=frogge", true)
  .addField("Donkey Kong", "vc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong \nvc=donkey kong");

message.channel.send(Helpvc);
 }



  
  
//if (message.content.startsWith(`${prefix}leave`)) {
  //member.message.voiceChannel.leave();
//}
  
//if (message.content.startsWith(`${prefix}join`)) {
      // Only try to join the sender's voice channel if they are in one themselves
      //if (!message.guild) return;

      //if (message.member.voiceChannel) {
        //message.member.voiceChannel.join()
          //.then(connection => { // Connection is an instance of VoiceConnection
            //message.reply('I have successfully connected to the channel!');
          //})
          //.catch(console.log);
   //const dispatcher = connection.playFile('./sketch/sketchy.mp3');
     //dispatcher.on('end', () => {
   //The song has finished
    //});

    //dispatcher.setVolume(0.5); // Set the volume to 50%
    //dispatcher.setVolume(1); // Set the volume back to 100%

   //console.log(dispatcher.time); // The time in milliseconds that the stream dispatcher has been playing for

    //dispatcher.pause(); // Pause the stream
    //dispatcher.resume(); // Carry on playing

    //dispatcher.end(); // End the dispatcher, emits 'end' event
      //} else {
        //message.reply('You need to join a voice channel first!');
      //}
//}
  
  //const madfunny = [`${prefix}madfunny`, `${prefix}Madfunny`];
//if( madfunny.some(word => message.content.includes(word)) ) {
//message.channel.send("Funny");
//}
  
  //const funny = ["Funny", "funny bot", "Funny bot", "Funny Bot"];
//if( funny.some(word => message.content.includes(word)) ) {
//message.channel.send("Funny");
//}
 
  
//const sex = [`sex`];
  //if( sex.some(word => message.content.includes(word)) ) {
    //message.channel.send('funny');
  //}
  
//const persom = ["persona", "Persona", "PERSONA", "persomna", "Persomna", "Danganronpa", "danganronpa", "DANGANRONPA", "fnaf", "Fnaf", "FANF", "danmatisk", "Danmatisk"];
//if( persom.some(word => message.content.includes(word)) ) {
 // message.delete();
//}
  
  //if (message.content.startsWith("`")) {
//message.channel.send('fuck you creative urchin 87', {
  //tts: true
//})
 //}
  
              //const Funny = ["Funny", "funny bot", "Funny bot", "Funny Bot"];
//if( Funny.some(word => message.content.includes(word)) ) {
//message.channel.send("funny", {
  //tts: true
                     //})
//}
  
  
  
    });
client.login(process.env.TOKEN);
