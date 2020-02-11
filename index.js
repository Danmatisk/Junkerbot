const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();
// const prefix = "=";
  
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

 const Waluigi = [`${prefix}Waluigi Time`, `${prefix}Waluigi time`, `${prefix}waluigi Time`, `${prefix}waluigi time`];
 if( Waluigi.some(word => message.content.includes(word)) ) {
     const localFileAttachment = new Discord.Attachment('.\\Images\\Waluigi.gif')
     message.channel.send(localFileAttachment)
     }
  const Creeper = [`${prefix}Creeper`, `${prefix}creeper`];
  if( Creeper.some(word => message.content.includes(word)) ) {
      message.channel.send('Aw man');
 }
 const Dance = [`${prefix}Junker Dance`, `${prefix}Junker dance`, `${prefix}junker Dance`, `${prefix}junker dance`];
 if( Dance.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\JunkerDance.gif')
  message.channel.send(localFileAttachment)
 }
 const Torture = [`${prefix}Torture Dance`, `${prefix}Torture dance`, `${prefix}torture Dance`, `${prefix}torture dance`];
 if( Torture.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Jojotorturedance.gif')
  message.channel.send(localFileAttachment)
 }
 const Moyai = [`${prefix}Moyai`, `${prefix}moyai`];
 if( Moyai.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Moyai.png')
  message.channel.send(localFileAttachment)
 }
 const Pewnig = [`${prefix}Pewnig`, `${prefix}pewnig`];
 if( Pewnig.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Pewnig.jpg')
  message.channel.send(localFileAttachment)
 }
 const Bowsnig = [`${prefix}Bowsnig`, `${prefix}bowsnig`];
 if( Bowsnig.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Bownig.jpg')
  message.channel.send(localFileAttachment)
 }
 const Thicc = [`${prefix}Thicc Luigi`, `${prefix}Thicc luigi`, `${prefix}thicc Luigi`, `${prefix}thicc luigi`];
 if( Thicc.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Thiccluig.gif')
  message.channel.send(localFileAttachment)
 }
 const Gnome = [`${prefix}Gnome`, `${prefix}gnome`];
 if( Gnome.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Gnome.jpg')
  message.channel.send(localFileAttachment)
 }
 const WOW = [`${prefix}Bruh`, `${prefix}bruh`];
 if( WOW.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\WOW.png')
  message.channel.send(localFileAttachment)
 }
 const Violence = [`${prefix}Violence`, `${prefix}violence`];
 if( Violence.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Violence.jpg')
  message.channel.send(localFileAttachment)
 }
 const Ranch = [`${prefix}Ram Ranch`, `${prefix}Ram ranch`, `${prefix}ram Ranch`, `${prefix}ram ranch`];
 if( Ranch.some(word => message.content.includes(word)) ) {
  message.channel.send('18 Naked Cowboys');
 }
 const Knife = [`${prefix}True Fear`, `${prefix}True fear`, `${prefix}true Fear`, `${prefix}true fear`];
 if( Knife.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\Kirbknife.jpg')
  message.channel.send(localFileAttachment)
 }
 const Eraser = [`${prefix}Eraser`, `${prefix}eraser`];
 if( Eraser.some(word => message.content.includes(word)) ) {
    const localFileAttachment = new Discord.Attachment('.\\Images\\Erase.jpg')
    message.channel.send(localFileAttachment)
 }
 const YES = [`${prefix}YES`, `${prefix}yes`, `${prefix}Yes`];
 if( YES.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\YES.gif')
  message.channel.send(localFileAttachment)
}
const Garf = [`${prefix}Garf`, `${prefix}garf`];
if( Garf.some(word => message.content.includes(word)) ) {
  const localFileAttachment = new Discord.Attachment('.\\Images\\garf.gif')
  message.channel.send(localFileAttachment)
}

 const Joke = [`${prefix}Explain Joke`, `${prefix}Explain joke`, `${prefix}explain Joke`, `${prefix}explain joke`];
 if( Joke.some(word => message.content.includes(word)) ) {
{ const replies = ["Joke Explained: Funny", "Joke Explained: Motherfucking Jojo reference", "Joke Explained: Pee and/or poo is funny", "Joke Explained: Isreal", "Joke Explained: Murder is ethical and hot", "Joke Explained: Samd undertaker dum dum dum dum dum dum dum dum dum dum", "Joke Explained: Homosexuality is funny", "Joke Explained: Garfield lasogana", "Joke Explained: Penis in vagaegae", "Joke Explained: Sex.", "Joke Explained: Joke Explained", "Joke Explained: r/IHaveReddit", "joke explained: capitalize your fucking sentences", "Joke Explained: H", "Joke Explained: Do not sleep in the overworld", "Joke Explained: Link in the description", "Joke Explained: N-word", "Joke Explained: Gun violence is a fun activity", "Joke Explained: I'm not explaining that fuck off", "Joke Explained: You are the joke", "Joke explained: Funny clown music", "Joke explained: Global warming is vegan propaganda", "Joke explained: Salsa cracker vagina", "Joke Explained: Nice Repost!", "Joke Explained: I have erectile dysfunction :D", "Joke Explained: uwu I want to taste your spewmy wewmy", "Joke Explained: Ho ho ho ha ha, ho ho ho he ha. Hello there, old chum. I’m gnot an elf. I’m gnot a goblin. I’m a gnome. And you’ve been, gnomed!", "Joke Explained: Fuck Hazbin Hotel, all my homies hate Hazbin Hotel"]
 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); }
 }

 const Obamaimage = [`${prefix}Obama`, `${prefix}obama`];
 if( Obamaimage.some(word => message.content.includes(word)) ) {
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


    });
client.login(token);