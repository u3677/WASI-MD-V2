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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUU2aStiZjh6UUw4Y1dGTXpxdzJwaEthVUxmMmhidTQ2MjBob0ZSUFVXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlMya1BpMGF6Rmgxb2RYSVcvT2JyK1V3ZVV4L0tGa2NKTFpvdFF1bk1BUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRGlFUVBUOHVpckFFZWIwY1NMUjJsZjd6MVdFVGdhRWhuWU9vZkptWG5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMDVkd2ErSUgyRnBMMWM5M2dQQmNBdTRiRmZ6NmFPTFhtZExNa1FUeTEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DTUg0S3JHbHcrL2JxbEFXOUZVT2d6NWoyMGJSekxsbmVnNm9DZ0RvVzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVEamp0aVZXeEI2TmsxUXV2Y25TT2YxWEpPMmlWWlU3ZGNBVjdmUnRuakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5weThNZFczdkRubFQ2M25UOEZrS2hmdnVmYUp5UThpeUJpUCtmU1NXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmZVMTZ4Tm5BY2tvZ0xIM1JlWVQ2cXVVTEpianRCVGN4N1ZDL1YybWRHaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY2MDBJMURFWGU2d0tWNFBoUFV0RXpSNERWOFpEL1UrUW5tcXVQYUsxYkVZRk5QRmcweU5BQ3hUQWxjVGNxN1FFTTQwTU1yMS9WbWRqdUNzOENITEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IkRPMjZOdjl2Y3N0M3MwVWRSd09mQjMvSmVVTmV2NmRkSnpmZUF3VWdxLzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ill5TjlKdzhBVF8yR0hIcmViSFRQRHciLCJwaG9uZUlkIjoiY2ZkMmFjYjctYzcyOS00YmZhLThmYmQtN2Q4MGY3NzE1MTk1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBTZW9BelhRNE1nSGxMY2lCcThDbXp5SndHOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWbXZWUDd0UzBUeVUrUmh3NUkyZDdMZEszUWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0JCVzNSRDciLCJtZSI6eyJpZCI6IjIyMzYyNDUxODM1OjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xicytBMFEydEN6dEFZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVHVWZKcGE2T2pTTzR3eFF3NXIraXRHRXNGQUxlYXZPRjBqT2RpWkFlaXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRqeTU0dE03V0lOYnZlRGEwYXhjRFh5OXFPTmJwU05oWmx0bVNpdzdpaXIvR0dKZWQxSU43bUwrV1lmaTl1Y2RYOW14Si9yeUp0MlYrUmFrRDAwWkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuTCs4akdYckk5SXFtYjVib2VBY1hhMXFyOGlPc2JJTDF4bzRYRnJKTzVzZWFKakEwbVhOUFoyY29NeHZTb2lyT3E0Q0h3cjdWNGdmRTFoc0ZiNWxCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMzYyNDUxODM1OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmhsSHlhV3VqbzBqdU1NVU1PYS9vclJoTEJRQzNtcnpoZEl6blltUUhvcyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDUxMDU2OH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
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
