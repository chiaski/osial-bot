
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

// Check reactions
DiscordClient.on('messageReactionAdd', (reaction, user) => {
  let limit = 2; // number of thumbsdown reactions you need
  if (reaction.emoji.id == '872368749997621308' && reaction.count >= limit){
    reaction.message.delete();
    reaction.message.channel.send("<@&836063350882173018> <@&821568630873260112>");
    reaction.message.channel.send(discord_embeds._noleaks).then(embedMessage => {
      const url = embedMessage.url;
      DiscordClient.channels.cache.get('836320566800547881').send("Time to send someone to prison: " + url);  
    })
  }
});


// Check on message sent
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

  // LORE FEED
  if(msg.channel.id === '866560628944535563'){
    var copymsg = msg.content.toString();

    const _copyembed = new Discord.MessageEmbed()
      .setColor("#FF5BEF")
      .setTitle(msg.author.username)
      .setThumbnail(msg.author.avatarURL())
      .setDescription(copymsg)
      .setFooter('Submitted from #theorists·submit');

    // send to lore feed channel
    DiscordClient.channels.cache.get('866474611587809351').send(_copyembed);  
    return;  
  }


  // actual useful commands
  let command = msg.content.toLowerCase().split(' ')[0].slice(1);

  //command messages

  if (!msg.content.startsWith('~'))
    return;

  switch (command) {

    case 'libraryhelp':
      msg.channel.send(discord_embeds._libraryadding);
      break;

    case 'search':
      
      // Testing if search works
      entry = (msg.content.substr(8));
      
      const _query = entry.trim();
      var _results = "";

      (async () => {
        const response = await client.databases.query({
          database_id: "5a09576eb613458f992e91fbfb5c29b3",
          filter: {
            or: [
              {
                property: 'Tags',
                multi_select: {
                  contains: _query,
                },
              },
            ],
          },
          page_size: 10
        });

        var entries = "";

        if( (response.results).length != 0 ){

        }

        (response.results).forEach(function (item, index) {

          entries += (" · [" + item.properties.Name.title[0].plain_text + "]" + "(" +  item.properties.Link.url + ")" + "\n");

        });
        

        if( (response.results).length != 0 ){
          entries += "\n";
          _results = _results.concat(entries);
          
          const e = new Discord.MessageEmbed()
          .setColor('#e342d3')
          .setTitle('WORLD')
          .setDescription(entries)
          .setThumbnail('https://cdn.discordapp.com/attachments/851140549411209237/857734184306475018/64.png')
          .setFooter('See more at khaenriah.com/library');
          
          msg.channel.send(e);
        }

      })();

      (async () => {
        const response = await client.databases.query({
          database_id: "b75a49686d3544c19bf53fbad370df35",
          filter: {
            or: [
              {
                property: 'Tags',
                multi_select: {
                  contains: _query,
                },
              },
            ],
          },
          page_size: 10
        });

        var entries = "";

        (response.results).forEach(function (item, index) {

          entries += (" · [" + item.properties.Name.title[0].plain_text + "]" + "(" +  item.properties.Link.url + ")" + "\n");

        });

        if( (response.results).length != 0 ){
          entries += "\n";
          _results = _results.concat(entries);

          const e = new Discord.MessageEmbed()
          .setColor('#e342d3')
          .setTitle('CHARACTERS')
          .setDescription(entries)
          .setThumbnail('https://cdn.discordapp.com/attachments/851140549411209237/857734184306475018/64.png')
          .setFooter('See more at khaenriah.com/library');
          
          msg.channel.send(e);
        }

      })();

      console.log(_results);

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


    case 'spoilers':
      msg.channel.send("<@&836063350882173018> <@&821568630873260112>");
      msg.channel.send(discord_embeds._spoilers).then(embedMessage => {
        const url = embedMessage.url;
        DiscordClient.channels.cache.get('836320566800547881').send("Time to send someone to prison: " + url);  
      })
      break;
      
    case 'library':
      msg.channel.send(discord_embeds._library);
      break;

    case 'inazuma':
      msg.channel.send(discord_embeds._inazuma);
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

    case 'beginner':
      msg.channel.send("Khaenri'ah's Beginner's Guide to Genshin Lore: https://khaenriah.com/beginners");
      break;

  }

  // meme

  switch (command) {
    case 'gm':
      msg.reply("good morning baby. How has your morning been?");
      break;
              
    case 'gn':
      msg.reply("*smooch smooch smooch smooch smooch* five smooches, one to tuck you in bed, one to bring you warmth, one for sweet dream, one to keep you safe and lastly one to make sure you sleep well!");
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

    case 'pat':
      const randompat = discord_embeds._pat[Math.floor(Math.random() * (discord_embeds._pat).length)];
      msg.reply(randompat);
      break;

  }

})

// client.login logs the bot in and sets it up for use. You'll enter your token here.
DiscordClient.login(process.env.DISCORD_TOKEN);

