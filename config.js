const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94742200945,94786728789")
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:cCBe2fBeA26f4eEbDbC2gD64226EHFg3@viaduct.proxy.rlwy.net:34483"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.blockJids = process.env.BLOCK_JID ||'120363165030810524@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363165030810524@g.us' ;
global.github = 'https://github.com/CYBER-THUSHAN/SHENU-QUEEN-V1'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94742200945'
global.devs = '94742200945';
global.INBOX_BLOCK = 'false'
global.TIMEZONE = 'Asia/Colombo' 
global.website = 'https://chat.whatsapp.com/K7bTUJHHsbr2RhWPPiJnhX
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/9bb9ec1d4baf8b7f498be.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 ▎▎🧡🍃' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ɪᴛᴢ ᴍᴇ ꜱᴀʜᴀɴ' : process.env.OWNER_NAME,
  ownernumber: process.env.OWNER_NUMBER === undefined ? '94742200945' : process.env.OWNER_NUMBER,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 🧡🍃▎ᴵᵀᶻ ᴹᴱ ˢᴬᴴᴬᴺ' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 ▎▎🧡🍃' : process.env.PACK_INFO.split(";")[1],	
  dl_limit: process.env.DL_SIZE || '350',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,xxx,sex,fucked,Brazzers,pronhub,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  HANDLERS:  process.env.PREFIX === undefined ? ['#','!','.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 1 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main',
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '𝐇𝐄𝐘___
𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 ▎▎🧡🍃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓😾💖
𝐈𝐒 𝐎𝐍𝐋𝐈𝐍𝐄 𝐍𝐎𝐖🌝🌺
𝐘𝐎𝐔 𝐂𝐀𝐍 𝐆𝐄𝐓 𝐒𝐎𝐍𝐆𝐒 𝐕𝐈𝐃𝐄𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐀𝐍𝐃 𝐏𝐇𝐎𝐓𝐎𝐒 𝐍𝐎𝐖
𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 ▎▎🧡🍃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
𝐒𝐓𝐀𝐘 𝐏𝐋𝐄𝐀𝐒𝐄...🙊❤️' : process.env.ALIVE_MESSAGE,
  caption :process.env.CAPTION || "  \t🧚 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴛᴢ ᴍᴇ ꜱᴀʜᴀɴ*",
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
