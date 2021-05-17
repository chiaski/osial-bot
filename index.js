require('dotenv').config()
const {
  Client
} = require('@notionhq/client');

const client = new Client({
  auth: process.env.NOTION_TOKEN
});

// Import discord.js and create the client
const Discord = require('discord.js')
const DiscordClient = new Discord.Client();

// Register an event so that when the bot is ready, it will log a messsage to the terminal
DiscordClient.on('ready', () => {
  console.log(`Logged in as ${DiscordClient.user.tag}!`);
  DiscordClient.user.setActivity('!khaenriah', {
    type: 'PLAYING'
  });
})

// I AM SORRY

const moe = ["https://i.imgur.com/G06IKOL.png", "https://i.imgur.com/OWahzuf.png", "https://i.imgur.com/Ybl0ttp.png", "https://i.imgur.com/FsQVHW1.png", "https://i.imgur.com/T1Ru01p.png"]
const love = ["I love you always, darling.", "I think I love you more and more each day.", "I love you, I love you, I love you, I love you, I love you! *(Each of the heads says I love you!)*", "you make every single day worth living.", "I love you so much more than my bullshit ex Zhongli. Don't even worry about him, baby."]

const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#53FEB6')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS NO SPOILERS')
  .setDescription('Archon quest discussion in <#830963701414363136> **only** until 7 days has passed since release.')
  .setFooter('Love, Osial Overlord of the Vortex');


const libraryE = new Discord.MessageEmbed()
  .setColor('#e342d3')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS WE HAVE A LORE LIBRARY')
  .setURL('https://khaenriah.com/library')
  .setDescription(`Khaenri'ah hosts a **Lore Library and Database** curating fan theories from all over the internet. \u200B \u200B 

      :star: https://khaenriah.com/library \u200B 
      :pencil: Submit a theory/essay to our Library at <#823831293825384468> \u200B 
      :bookmark: Use this reaction to highlight posts on <#828101027273900044>\u200B \u200B 
      `)
  .setFooter('Love, Osial Overlord of the Vortex');


const sourcesE = new Discord.MessageEmbed()
  .setColor('#e342d3')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS WE HAVE RECOMMENDED SOURCES')
  .setDescription(`Looking for quest logs, item descriptions, or other facts? Aside from bringing up your Archive, we have some recommended resources. \u200B \u200B 

      :star: https://genshin-impact.fandom.com/ (Descriptions/logs, not summaries) \u200B 
      Use \`[[Wiki Page Name]]\` (case-sensitive) to bring up Wiki pages.
      :star: https://genshin.honeyhunterworld.com/ (Datamined database items, books, quests) \u200B 
      :star: https://www.gensh.in/ (Database) \u200B \u200B 
      `)
  .setFooter('Love, Osial Overlord of the Vortex');


const socialsE = new Discord.MessageEmbed()
  .setColor('#e342d3')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS THIS IS KHAENRI\'AH')
  .setDescription(`We create content and archive Genshin lore. Follow us across our pages!\u200B \u200B 

    :star: https://khaenriah.com · our website\u200B 
    :books: https://khaenriah.com/library · lore library\u200B 
    :pencil: https://khaenriah.com/contribute · contribute to khaenri\'ah\u200B 
    :bird: https://twitter.com/khaenriahcom · tweet tweet\u200B \u200B 
     \u200B 
    `)
  .setFooter('Love, Osial Overlord of the Vortex');


const libraryAdding = new Discord.MessageEmbed()
  .setColor('#e342d3')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS ADD TO THE LIBRARY')
  .setDescription(`You can add to the Khaenri'ah Library with a Discord command. Our contributors will help tidy up the link after.\u200B \u200B 

    :books: https://khaenriah.com/library · lore library\u200B 
    
    **DATABASES: WORLD & CHARACTERS**\u200B 
    :globe_with_meridians: *WORLD* refers to general game theories, while *CHARACTERS* refer to playable/NPC character analyses, discoveries, etc.\u200B
    Use ~addworld to add to the world database, and ~addcharacters for the character database.\u200B \u200B 
    
    **THEORY, ANALYSIS, SATIRE**\u200B  
    Please tag your theory accordingly. Theory means there's speculative and unconfirmed material, Analysis is objective (like translations, summaries), and Satire is for jokes!\u200B \u200B 
  
    **USAGE**\u200B 
    \` ~addworld <Theory/Analysis/Satire> <Entry Title> <Entry Summary (Optional)> <Entry Link>\`\u200B 


     \u200B 
    `)
  .setFooter('Love, Osial Overlord of the Vortex');


const librarySuccess = new Discord.MessageEmbed()
  .setColor('#57ebde')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS THANK YOU!')
  .setDescription(`Osial has successfully added your entry to the Lore Libra
ry!
\u200B Please wait for a contributor to clean things up...\u200B\u200B\u200B

  :books: https://khaenriah.com/library
     \u200B 
    `)
  .setFooter('Love, Osial Overlord of the Vortex');


// Register an event to handle incoming messages
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
  
  var entry = "";

  switch (command) {

    case 'libraryhelp':
      msg.channel.send(libraryAdding);
      break;

    case 'addworld':

      entry = (msg.content.substr(10)).split("|");

      console.log(entry[0], entry[1], entry[2]);

      if (entry.length == 4) {
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
                  name: entry[0].replace(/\s+/g, '')
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
            msg.channel.send(librarySuccess);
          }
        })();
      } else if (entry.length == 3) {

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
                  name: entry[0].replace(/\s+/g, '')
                }
              },
              Link: {
                url: entry[2].replace(/\s+/g, '')
              }
            }
          });
          
          if(response.length != 0){
            msg.channel.send(librarySuccess);
          }
          
        })();
      }

      break;

    case 'addcharacters':

      entry = (msg.content.substr(15)).split("|");

      console.log(entry[0], entry[1], entry[2]);

      if (entry.length == 4) {
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
                      content: entry[1]
                    }
              }
            ]
              },
              Type: {
                select: {
                  name: entry[0].replace(/\s+/g, '')
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
            msg.channel.send(librarySuccess);
          }
        })();
      } else if (entry.length == 3) {

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
                      content: entry[1]
                    }
              }
            ]
              },
              Type: {
                select: {
                  name: entry[0].replace(/\s+/g, '')
                }
              },
              Link: {
                url: entry[2].replace(/\s+/g, '')
              }
            }
          });
          
          if(response.length != 0){
            msg.channel.send(librarySuccess);
          }
        })();
      }

      break;


    case 'library':
      msg.channel.send(libraryE);
      break;

    case 'socials':
      msg.channel.send(socialsE);
      break;

    case 'sources':
      msg.channel.send(sourcesE);
      break;

    case 'ref':
      msg.channel.send(sourcesE);
      break;

    case 'spoiler':
    case 'aq':
    case 'spoilers':
      msg.channel.send(exampleEmbed)
      break;

      // FILES

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
      const randommoe = moe[Math.floor(Math.random() * moe.length)];
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

    case 'i love you':
      const randomlove = love[Math.floor(Math.random() * love.length)];
      msg.reply(randomlove);
      break;

  }

})

// client.login logs the bot in and sets it up for use. You'll enter your token here.
DiscordClient.login(process.env.DISCORD_TOKEN);
