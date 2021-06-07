
require('dotenv').config()

// import notion api
const {
  Client
} = require('@notionhq/client');

const client = new Client({
  auth: process.env.NOTION_TOKEN
});

// import discord.js
const Discord = require('discord.js')
const DiscordClient = new Discord.Client();

DiscordClient.on('ready', () => {
  console.log(`Logged in as ${DiscordClient.user.tag}!`);
  DiscordClient.user.setActivity('with lore', {
    type: 'PLAYING'
  });
})

// import embeds
const discord_embeds = require('./embeds');

// LOL
var entry = "";

// I AM SORRY


function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
};

DiscordClient.on('message', async msg => {
  
  // so true
  if (msg.content.toLowerCase().startsWith("so true")) {
    msg.react('🇸')
      .then(() => msg.react('🇴'))
      .then(() => msg.react('🇹'))
      .then(() => msg.react('🇷'))
      .then(() => msg.react('🇺'))
      .then(() => msg.react('🇪'))
      .catch(() => console.error('One of the emojis failed to react.'));
  }

  // actual useful commands
  let command = msg.content.toLowerCase().split(' ')[0].slice(1);

  if (!msg.content.startsWith('~'))
    return;

  switch (command) {

    case 'libraryhelp':
      msg.channel.send(discord_embeds._libraryadding);
      break;

    case 'addworld':

      entry = (msg.content.substr(10)).split("|");
      msg.react('835319571371524107');

      var _type = entry[0].replace(/\s+/g, '');
      var _title = entry[1];

      if (_type != "Analysis" && _type != "Theory" && _type != "Satire") {
        msg.reply("Invalid entry type. Please specify as Analysis, Theory, or Satire.");
        return;
      };

      if (entry.length == 4) {
        
        if (!validURL(entry[3].replace(/\s+/g, ''))) {
          msg.reply("Invalid URL.");
          return;
        };

        (async () => {
          const response = await client.pages.create({
            parent: {
              database_id: "5a09576eb613458f992e91fbfb5c29b3"
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: _title
                    }
              }
            ]
              },
              Type: {
                select: {
                  name: _type
                }
              },
              Link: {
                url: entry[3].replace(/\s+/g, '')
              },
              Summary: {
                rich_text: [
                  {
                    text: {
                      content: entry[2]
                    }
             }
           ]
              }
            }
          });
          
          if(response.length != 0){
            msg.channel.send(discord_embeds._librarysuccess).then(msg => msg.delete({timeout: 10000}));
          }

        })();
      } else if (entry.length == 3) {
        
        if (!validURL(entry[2].replace(/\s+/g, ''))) {
          msg.reply("Invalid URL.");
          return;
        };

        (async () => {
          const response = await client.pages.create({
            parent: {
              database_id: "5a09576eb613458f992e91fbfb5c29b3"
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: entry[1]
                    }
              }
            ]
              },
              Type: {
                select: {
                  name: _type
                }
              },
              Link: {
                url: entry[2].replace(/\s+/g, '')
              }
            }
          });

          if(response.length != 0){
            msg.channel.send(discord_embeds._librarysuccess).then(msg => msg.delete({timeout: 10000}));
          }

        })();
      }

      break;

    case 'addcharacters':

      entry = (msg.content.substr(15)).split("|");
      msg.react('835319571371524107');
      console.log(entry[0], entry[1], entry[2]);

      var _type = entry[0].replace(/\s+/g, '');
      var _title = entry[1];
     
      if (_type != "Analysis" && _type != "Theory" && _type != "Satire") {
        msg.reply("Invalid entry type. Please specify as Analysis, Theory, or Satire.");
        return;
      };

      if (entry.length == 4) {

        if (!validURL(entry[3].replace(/\s+/g, ''))) {
          msg.reply("Invalid URL.");
          return;
        };

        (async () => {
          const response = await client.pages.create({
            parent: {
              database_id: "b75a49686d3544c19bf53fbad370df35"
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: _title
                    }
              }
            ]
              },
              Type: {
                select: {
                  name: _type
                }
              },
              Link: {
                url: entry[3].replace(/\s+/g, '')
              },
              Summary: {
                rich_text: [
                  {
                    text: {
                      content: entry[2]
                    }
             }
           ]
              }
            }
          });

          
          if(response.length != 0){
            msg.channel.send(discord_embeds._librarysuccess).then(msg => msg.delete({timeout: 10000}));
          }

        })();
      } else if (entry.length == 3) {
        
        if (!validURL(entry[2].replace(/\s+/g, ''))) {
          msg.reply("Invalid URL.");
          return;
        };
        
        (async () => {
          const response = await client.pages.create({
            parent: {
              database_id: "b75a49686d3544c19bf53fbad370df35"
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: _title
                    }
              }
            ]
              },
              Type: {
                select: {
                  name: _type
                }
              },
              Link: {
                url: entry[2].replace(/\s+/g, '')
              }
            }
          });


          if(response.length != 0){
            msg.channel.send(discord_embeds._librarysuccess).then(msg => msg.delete({timeout: 10000}));
          }
          
        })();
      }

      break;


    case 'library':
      msg.channel.send(discord_embeds._library);
      break;

    case 'socials':
      msg.channel.send(discord_embeds._khaenriahsocials);
      break;


    // ~sources or ~ref shares recommended lore references.
    case 'sources':
    case 'ref':
      msg.channel.send(discord_embeds._sources);
      break;
      
    
    /* ----- FILES ----- */

    case 'visions':
      msg.channel.send("Khaenri'ah's Visions Document: <https://www.notion.so/khaenriah/All-About-Visions-5e649279fe504dabbcb4bd267ed4f53a>");
      break;
  }

  // meme

  switch (command) {
    case 'gm':
      msg.reply("good morning baby. How has your morning been?");
      break;

    case 'head':
      msg.reply("the more heads to love you with.");
      break;

    case 'moe':
      const randommoe = discord_embeds._moe[Math.floor(Math.random() * (discord_embeds._moe).length)];
      msg.channel.send("", {
        files: [randommoe]
      });
      break;

    case 'hug':
      msg.reply("*hugs you tenderly with my five watery tendrils*");
      break;

    case 'kiss':
      msg.reply(" *kiss* *kiss* *kiss* *kiss* *kiss* –– each of the five heads gives you a lil smooch!");
      break;

    case 'cook':
      msg.reply(" hi baby. I've prepared some scrambled eggs for you. :)");
      break;

    case 'ily':
      const randomlove = discord_embeds._love[Math.floor(Math.random() * (discord_embeds._love).length)];
      msg.reply(randomlove);
      break;

  }

})

// client.login logs the bot in and sets it up for use. You'll enter your token here.
DiscordClient.login(process.env.DISCORD_TOKEN);

