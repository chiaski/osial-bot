const Discord = require('discord.js')

// KHAENRI'AH

const _sources = new Discord.MessageEmbed()
.setColor('#e342d3')
.setTitle('<:osial:830785268461994024> OSIAL SAYS WE HAVE RECOMMENDED SOURCES')
.setDescription(`Looking for quest logs, item descriptions, or other facts? Aside from bringing up your Archive, we have some recommended resources. \u200B \u200B 

    :star: https://genshin-impact.fandom.com/ (Descriptions/logs, not summaries) \u200B 
    Use \`[[Wiki Page Name]]\` (case-sensitive) to bring up Wiki pages.
    :star: https://genshin.honeyhunterworld.com/ (Datamined database items, books, quests) \u200B 
    :star: https://www.gensh.in/ (Database) \u200B \u200B 
    `)
.setFooter('Love, Osial Overlord of the Vortex');


const _socials = new Discord.MessageEmbed()
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



// LIBRARY

const _sample = new Discord.MessageEmbed()
.setColor('#53FEB6')
.setTitle('<:osial:830785268461994024> OSIAL SAYS NO SPOILERS')
.setDescription('Archon quest discussion in <#830963701414363136> **only** until 7 days has passed since release.')
.setFooter('Love, Osial Overlord of the Vortex');


const _library = new Discord.MessageEmbed()
.setColor('#e342d3')
.setTitle('<:osial:830785268461994024> OSIAL SAYS WE HAVE A LORE LIBRARY')
.setURL('https://khaenriah.com/library')
.setDescription(`Khaenri'ah hosts a **Lore Library and Database** curating fan theories from all over the internet. \u200B \u200B 

    :star: https://khaenriah.com/library \u200B 
    :pencil: Submit a theory/essay to our Library at <#823831293825384468> \u200B 
    :bookmark: Use this reaction to highlight posts on <#828101027273900044>\u200B \u200B 
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
  \` ~<addworld/addcharacters> <Theory/Analysis/Satire> | <Entry Title> | <OPTIONAL: Entry Summary> | <Entry Link>\`\u200B 


   \u200B 
  `)
.setFooter('Love, Osial Overlord of the Vortex');


const librarySuccess = new Discord.MessageEmbed()
.setColor('#57ebde')
.setTitle('<:osial:830785268461994024> OSIAL SAYS THANK YOU!')
.setDescription(`Osial has successfully added your entry to the Lore Library!

\u200B Please wait for a contributor to clean things up...\u200B\u200B\u200B

:books: https://khaenriah.com/library
   \u200B 
  `)
.setFooter('Love, Osial Overlord of the Vortex');

// JOKEY

const moe = ["https://i.imgur.com/G06IKOL.png", "https://i.imgur.com/OWahzuf.png", "https://i.imgur.com/Ybl0ttp.png", "https://i.imgur.com/FsQVHW1.png", "https://i.imgur.com/T1Ru01p.png"]
const love = ["I love you always, darling.", "I think I love you more and more each day.", "I love you, I love you, I love you, I love you, I love you! *(Each of the heads says I love you!)*", "you make every single day worth living.", "I love you so much more than my bullshit ex Zhongli. Don't even worry about him, baby."]


exports._library = _library;
exports._libraryadding = libraryAdding;
exports._librarysuccess = librarySuccess;

exports._khaenriahsocials = _socials;
exports._sources = _sources;

exports._moe = moe;
exports._love = love;