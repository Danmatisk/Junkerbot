const Discord = require('discord.js');
//const { prefix, token } = require('./config.json')
const client = new Discord.Client();
const prefix = "=";
const token = 'NjEzNDA5NzUwMDUwMTQ0Mjk2.XdSiAA.7XrfzUfXpGD8Raneiv-deQe_Tfo';
  
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {

    if (!message.guild) return;
    let scroman = message.guild.roles.get("600441904882122792");
    if (message.content.startsWith(`${prefix}15`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.addRole(scroman).then(() => {
            message.reply(`Successfully gave role to ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to give the role');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the role to give!');
      }
    }
    
    if (!message.guild) return;
    let scrotum = message.guild.roles.get("600441870816116746");
    if (message.content.startsWith(`${prefix}30`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.addRole(scrotum).then(() => {
            message.reply(`Successfully gave role to ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to give the role');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the role to give!');
      }
    }

  if (message.content == (`${prefix}Waluigi time`)) {
     const localFileAttachment = new Discord.Attachment('.\\Images\\Waluigi.gif')
     message.channel.send(localFileAttachment)
     }
 if (message.content == (`${prefix}Creeper`)) {
      message.channel.send('Aw man');
 }
 if (message.content == (`${prefix}Junker dance`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\JunkerDance.gif')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Torture dance`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Jojotorturedance.gif')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Moyai`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Moyai.png')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Pewnig`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Pewnig.jpg')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Bowsnig`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Bownig.jpg')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Thicc luigi`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Thiccluig.gif')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Gnome`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Gnome.jpg')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Bruh`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\WOW.png')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Violence`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Violence.jpg')
  message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}Ram ranch`)) {
  message.channel.send('18 Naked Cowboys');
 }
 if (message.content == (`${prefix}True fear`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Kirbknife.jpg')
  message.channel.send(localFileAttachment)
 }
  if (message.content == (`${prefix}Eraser`)) {
    const localFileAttachment = new Discord.Attachment('.\\Images\\Erase.jpg')
    message.channel.send(localFileAttachment)
 }
 if (message.content == (`${prefix}YES`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\YES.gif')
  message.channel.send(localFileAttachment)
}
if (message.content == (`${prefix}Very good`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Heavy.png')
  message.channel.send(localFileAttachment)
}
if (message.content == (`${prefix}Garf`)) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\garf.gif')
  message.channel.send(localFileAttachment)
}

//if (message.content === (`${prefix}Not funny`)) {
  //message.channel.send('Not funny I didn\'t laugh. Your joke is so bad I would have preferred the joke went over my head and you gave up re-telling me the joke. To be honest this is a horrid attempt at trying to get a laugh out of me. Not a chuckle, not a hehe, not even a subtle burst of air out of my esophagus. Science says before you laugh your brain preps your face muscles but I didn\'t even feel the slightest twitch. 0/10 this joke is so bad I cannot believe anyone legally allowed you to be creative at all. The amount of brain power you must have put into that joke has the potential to power every house on Earth. Get a personality and learn how to make jokes, read a book. I\'m not saying this to be funny I genuinely mean it on how this is just bottom barrel embarrassment at comedy. You\'ve single handedly killed humor and every comedic act on the planet. I\'m so disappointed that society has failed as a whole in being able to teach you how to be funny. Honestly if I put in all my power and time to try and make your joke funny it would require Einstein himself to build a device to strap me into so I can be connected to the energy of a billion stars to do it, and even then all that joke would get from people is a subtle scuff. You\'re lucky I still have the slightest of empathy for you after telling that joke otherwise I would have committed every war crime in the book just to prevent you from attempting any humor ever again. We should put that joke in text books so future generations can be wary of becoming such an absolute comedic failure. Im disappointed, hurt, and outright offended that my precious time has been wasted in my brain understanding that joke. In the time that took I was planning on helping kids who have been orphaned, but because of that you\'ve waisted my time explaining the ocene integrity of your terrible attempt at comedy. Now those kids are suffering without meals and there\'s nobody to blame but you');
 //}

 if (message.content == `${prefix}Explain joke`)
{ const replies = ["Joke Explained: Funny", "Joke Explained: Motherfucking Jojo reference", "Joke Explained: Pee and/or poo is funny", "Joke Explained: Isreal", "Joke Explained: Murder is ethical and hot", "Joke Explained: Samd undertaker dum dum dum dum dum dum dum dum dum dum", "Joke Explained: Homosexuality is funny", "Joke Explained: Garfield lasogana", "Joke Explained: Penis in vagaegae", "Joke Explained: Sex.", "Joke Explained: Joke Explained", "Joke Explained: r/IHaveReddit", "joke explained: capitalize your fucking sentences", "Joke Explained: H", "Joke Explained: Do not sleep in the overworld", "Joke Explained: Link in the description", "Joke Explained: N-word", "Joke Explained: Gun violence is a fun activity", "Joke Explained: I'm not explaining that fuck off", "Joke Explained: You are the joke", "Joke explained: Funny clown music", "Joke explained: Global warming is vegan propaganda", "Joke explained: Salsa cracker vagina", "Joke Explained: Nice Repost!", "Joke Explained: I have erectile dysfunction :D", "Joke Explained: uwu I want to taste your spewmy wewmy", "Joke Explained: Ho ho ho ha ha, ho ho ho he ha. Hello there, old chum. I’m gnot an elf. I’m gnot a goblin. I’m a gnome. And you’ve been, gnomed!", "Joke Explained: Fuck Hazbin Hotel, all my homies hate Hazbin Hotel"]
 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); }

 if (message.content == `${prefix}Obama`) {
 var Corn = new Discord.Attachment('.\\Obam\\ObamaCorn.gif')
 var Cube = new Discord.Attachment('.\\Obam\\ObamaCube.png')
 var Donut = new Discord.Attachment('.\\Obam\\ObamaDonut.gif')
 var Globe = new Discord.Attachment('.\\Obam\\ObamaGlobe.gif')
 var Hedron = new Discord.Attachment('.\\Obam\\ObamaHedron.gif')
 var Line = new Discord.Attachment('.\\Obam\\ObamaLine.gif')
 var Nuke = new Discord.Attachment('.\\Obam\\ObamaNuke.gif')
 var Pyramid = new Discord.Attachment('.\\Obam\\ObamaPyramid.gif')
 var Redacted = new Discord.Attachment('.\\Obam\\ObamaRedacted.png')
 var Rubix = new Discord.Attachment('.\\Obam\\ObamaRubix.jpg')
 var Tesseract = new Discord.Attachment('.\\Obam\\ObamaTesseract.gif')
 var This = new Discord.Attachment('.\\Obam\\This.jpg')
 var Monkey = new Discord.Attachment('.\\Obam\\ObamaMonkey.gif')
{ const replies = [Corn, Cube, Donut, Globe, Hedron, Line, Nuke, Pyramid, Redacted, Rubix, Tesseract, This, Monkey]
 message.replyimage = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replyimage]); }
 }


if (message.content == (`${prefix}Craft Stone pickaxe`)) {
  let Stonepick = message.guild.roles.get("616050754876080181");
  let Stone = message.guild.roles.get("616414175953944576");
      if(message.member.roles.has(Stone)) {
        member.addRole(Stonepick).then(() => {
        message.reply(`Successfully crafted a Stone pickaxe`).then(() => {
        member.removeRole(Stone)
        })
        })
      }
    }
if (message.content == (`${prefix}Craft Iron pickaxe`)) {
      let Ironpick = message.guild.roles.get("616050735439675413");
      let Iron = message.guild.roles.get("612351979670470679");
          if(message.member.roles.has(Iron)) {
            member.addRole(Ironpick).then(() => {
            message.reply(`Successfully crafted a Iron pickaxe`).then(() => {
            member.removeRole(Iron)
            })
            })
          }
        }
        if (message.content == (`${prefix}Craft Diamond pickaxe`)) {
          let Diapick = message.guild.roles.get("616390816625065988");
          let Diamond = message.guild.roles.get("612353662370447390");
              if(message.member.roles.has(Diamond)) {
                member.addRole(Diapick).then(() => {
                message.reply(`Successfully crafted a Diamond pickaxe`).then(() => {
                member.removeRole(Diamond)
                })
                })
              }
            }

if (message.content == (`${prefix}Help`)) {
              message.channel.send('https://docs.google.com/document/d/1SonhUrDgJv0387qFxEf0DtgIKdtmLsejZagp1XZKmRc/edit?usp=sharing')
            }

            const Funny = ["Funny", "funny bot", "Funny bot", "Funny Bot"];
if( Funny.some(word => message.content.includes(word)) ) {
  message.channel.send("funny");
}

//if (message.content == (`${prefix}Ticket`)) {
      //if(!message.member.roles.some(r=>["Ticket"].includes(r.name)) )
       // return message.reply("Missing ticket")
      
     // message.reply("Ticket submitted").then(() => {
       // let Ticket = message.guild.roles.get("658027173151768625")
       // message.member.removeRole(Ticket)
        
      //})
//}

if (message.content == (`${prefix}Execute`)) {
  let channel = message.channel;
  // find specific role - enter name of a role you create here
  let testRole = message.guild.roles.get("536595826445647873");

  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  channel.overwritePermissions(
      testRole,
      { 'SEND_MESSAGES': false },
      // optional 'reason' for permission overwrite
      'Executed'
  )}
 

  //const args = message.content.slice(prefix.length).split(' ');
  //const command = args.shift().toLowerCase();

  //if (command === 'remember') {
    //if (!args.length) {
      //return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    //}
    //else {
      //const remember = (args[0])
      //message.channel.send('Remembered').then(() => {
        //if (command === 'memory') {
          //message.channel.send(remember)
          //}
      //}
      //)
    //}
  //}

  //const filter = m => m.content.includes('discord');
  //const collector = message.channel.createMessageCollector(filter, { time: 15000 });
  
  //collector.on('collect', m => {
    //console.log(`Collected ${m.content}`);
  //});
  
  //collector.on('end', collected => {
    //console.log(`Collected ${collected.size} items`);
  //});
    });
client.login(token);