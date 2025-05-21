//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255697693737";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "H4sIAAAAAAAAA5VU2ZKiSBT9l3zFaFkE1IiKGMSFxQUFtHRiHlJIIIudTEDs8N8nsLq662Gmp4anJJd7zz3n3PsdZDkmyEQdmH4HRYUbSFG/pF2BwBTM6iBAFRgAH1IIpmA0h63rigbiolOa6HNTWV+2PB+7UdIcvOXq2Mx4ZoTSwPVewGMAivqaYO83AcXL+agIxl5yRG6JTuW2S4JW1vkyO89VI9Sct8zcnA/L7HZ+AY8+IsQVzsJFEaEUVTAxUWdBXH0Nfq3KSlbWgihPloiputSMtPnIrF1FZWz30sba0AncNXtefRH+kI80JThcPXnxipLzIZpxUmLeGWZlTU4Ln5TbkbD08zVvs+/wCQ4z5Os+yiim3Zd51y1W5sLkVeOO1i3ft2XaaWN36MXnbby1CTS78B6HVVPEyteAY7ebbwLpejZn0vXGprvdfeE50AmXuQazxn7l0GpoiiRh9c/ArerDK/H/4V1ZBqGGCoZRGujiS2knw9IO3hwzjiPPcqLFNbNLSeGt9IvwXSMep7bEWhJniZkobjSGueNJKrYG0+4FB6EmTSaz6MZ+4h3Suvodyi7uziUT7Qp2Ro5lttbDfNmkY0dpaMwJa3UVztNdftxfdcG9z9JD4ll3ibSnsRzOuS1r0+pWktWmDl1mZGLL7zw5i5SXZ0Ux6nQfTLnHAFQoxIRWkOI8e+4J4wGAfmMjr0L0SS9Y42hC07FlOSwTHvM2zg2XlpyY6eeuyXV86aLX+rJfNoz7AgagqHIPEYJ8DROaV90GEQJDRMD0z78GIEM3+i5cn07gBiDAFaFuVhdJDv0PVT8OoefldUbtLvPUfoEqMGV/bSNKcRaSnsc6g5UX4QapEaQETAOYEPSzQlQhH0xpVaOfXavmfk/8fGwK5lowwACkT0GwD6aAF0VpIksTQRbkqST9Qb61fVhYFN8yRMEAZLC/DQpEIlQgiipeFMEAJM/X4pjlOV4Q+Ekfpn/f7z9+4u7T+IhCnBAwBapVeexOny2Me1JvFquVooeKGirgV50fhnkXhF+rx4lRuqc7Gg6z9Er92LwkitptAsTpxdya2SJjJfr1EL78QxAwBQ5OVOF8NjmD5l7bSGZXH+R7FWqsslH3bmjraTvKjjd6jT0j0ByjyjMnvLbuCV/I3Ralbbz0FvZ+V0bmuCCTGQxrdf/SZ/NRgz30ORmz4uVX/HrylHhxOt5lWhvXNjo2iaG19wIlkrpa86tqZ4/fdoUzynausy9WpTt3nehU6mFibh0zPjA8NfykiFWDZSFu3638bKXkxwjDT5P1Cva/AUbPifBDqf9U9B14bzz2MfgU48eM+Zc+nfm4TQIbJksiNENRTOXXi5pe9gp50wRqm/t769bBm2iv2DN4PP4agCKBNMirFEwBSa8QDECV172N9SzIf5NJVVh9Eb6XnUBClV+t4eAUEQrTAkw5eSSPxTE7Ft9vWVVeaJBEPQOrkZLWvc87pShsCulHpwGl/xajFDz+Bj/xiWOFBwAA"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
