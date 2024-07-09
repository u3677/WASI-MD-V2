//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/01fe26431772d04aec992.jpg";
global.devs = "22362451835";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "22362451835";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2 eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUtSencrczJGTU9EbFplRTBCNmF6OFR2YzIxeXhLclZGT0lscXpoUm9WYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmw4WHI2RDFjdWZDVERXZEtvV1BxMFY1bXJnTzhVUThFOWtOK1hiMlpSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTGcrdFBHYU8vVGUrRk11emUyNTY2dnhpOFdKdnYvY0J0N3ZLWis4NzBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJcENtSHR4SmxxMmNLY3BxVEJHWkUxaG9aVmRUMWdoRytqVFd3RUVEU2tjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJYmx4cVRwTVJONnhjSDJFd2pEZWpmSEhjaGY1YlVIN1FjMHBJUjl4bnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNaQklydGxTNEs4VlU3cWhBZkU0VklCYVEvRGZhKzV3Ymp5cG4wdXVRM2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZiWndybnlKZVRxTlVmd3JOQlQ5aitkNFQ5aTJiblpXNkhDeTJXZ0VFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEMvNGxzMXY1bklMZTZKT0FLd0JWUy9UWEd6T1pjeFhFekxndHYzMlUxOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFaRytiRktlaXdDb1hqTGpudVoyMXpkaXFwQlVOaGozU2ZkVEpUWUhBemd1OU1aKy9BNkhROGF6WDI3RFozc1RrMzN2VkdLZnYvOUtXbTlOeHAvcEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6Imd2cUFsMnVYU1RlOEw5Sk5OcURubVF6OVhjUGRhNXQ0QThCT0NnMHBLS0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlN0Q0tBeV9kVGZDWU1vSmVOVEdZdlEiLCJwaG9uZUlkIjoiZDdkMjdiOWUtNGYzYy00NDFhLTgzN2YtOGQ4ODgxNWYzZTc5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inhrbk10aTFZa0ZZLzFpanhXdXFLK2RRTDd2UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtYmR3TjNqN3Q0TE9xeFdjdUh1Ykc3RktKVUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOThQUEpKOVMiLCJtZSI6eyJpZCI6IjI0Mzk3NjI2OTA1NToyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik5ldGZsaXggTW9kZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmJmcC9vSEVQaXd0YlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmlXNEkwa2xLV3J4TnIxQ0xWcHlGdi9aUi93TExPdXRZbkp6Z0ZDWTlUTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiem1SNUF5b1czMEs3TElsUTE1cWlsRG00cmJmMys5WFY5bTFpQzEvN3hTcUZEREJscEFNTDRwalpOZUxaRXk0K0FPcllaSSt2bE5kODV6cllIclRWQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilk3Tmhzcno2cGNpVmRxR212blJwYUpOYkVTZCttS003TGhXWXBKWjdKSEVtTnZ1Q21ZTFFPWFN1ci80ZFp1dXJIQkFHaHhSdlRPd3d3WWJOWGgzdUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQzOTc2MjY5MDU1OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFlsdUNOSkpTbHE4VGE5UWkxYWNoYi8yVWY4Q3l6cnJXSnljNEJRbVBVeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDUzOTI3MH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "&",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣",
  packname: process.env.PACK_NAME || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣 22362451835♥️",
  botname: process.env.BOT_NAME || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣",
  errorChat: process.env.ERROR_CHAT || "22362451835",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-VnmYbM6IS40UIdoTeWM2T3BlbkFJ8fsekyLg6mC5ETHo80Mj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
