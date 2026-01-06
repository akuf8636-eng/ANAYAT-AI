const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0NFWHd2cThHV0JkdDk3TytKc1dyZ2hLM3FWMjFuaFhsSlIxL2hhUTJsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJZR2pVV21GbEZraEI4NkoreWhQejNRRWRVVmlIU3BjdXcrL2RjTDdqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRnl1VzU1VFJTNmEyNlhkaEFCVnp1dWR2M2xuNHdkYStuSmpxTU5HWkY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTmh4NlluWk85ekRBOEZSTE1UeW1DUW1jN3MrRGYzSldYdGw5UlU2S2tJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEamxTUmE5ZGM4WEJZZ1R1emgyeHlvVS92K3BJT0NLVWhGdnB5Mk8rbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEvdDFQeTVIVFJYWDd0bVhzWVI4alVTR1FXQ0NhbFRvUUFTVUpBcUVYQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFZR1JwZ281VlF6bWhuZmFkVDQ4M2dSOFo5WVk3TGZMbWUvdm5vV3FFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjVCdEVDYWJIbG5Wcm9iUUpwYkpqalRsNDZNN2ozOGcxTE9xeUZXRFFDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlvK3RVUTZ1SkgxMFBzK0gwTUl4NFFWTC9GQWoyc2ZzT05mN20yeU5yY3k0Qk5GNU9yVFFyQUZFZXJocWlOZm1jdUNXRmp1WklMRHhZTmRHSDlQVUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IjBYQ0ZqOTdjMWlDWjBUZXNuWFpNZkJ1aEZsTlFGdUpyUjBsV0xIMjNLWkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4MTMyMTI0NDAyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUFGRkY0NEI3M0UzMDk0QjFDNjZBQURDQjg2QzI5NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY3NjU5OTAyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI2MjgxMzIxMjQ0MDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MTg4QzQ1MkVFQTBFQzMwNkQwMTNFOTQ1Q0U1NERGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njc2NTk5MDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjYyODEzMjEyNDQwMjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU2NDBBMzg3RDMzREQ5MDkzOThGMDA5QTg0OTdGRTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzY1OTkwM30seyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4MTMyMTI0NDAyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTY2QzEzRTgxNEYwQjdEOUJDRUQzN0E3NzI4OUY5RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY3NjU5OTA0fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjMsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiI2MjgxMzIxMjQ0MDIzOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InAiLCJsaWQiOiIyNDIwNTYzMzczMjIxMDE6MTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcWU5MXdRN2JMeHlnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJURGdCZXlKZE5OTm91ajcyT2JBMkYwWVpHS0F2M0hxblFUVGFxMjJTRnk4PSIsImFjY291bnRTaWduYXR1cmUiOiJ2MG1qaG9jWmlmd1ZEZzNGQ2pOR2JEd3QzUllnQW1nMDFkM1ZFZi9QNTI0ZFJQUW0va2FJNmdpbkROdWpnQS9IMzhQMUFuK00wU0JUWlZYejFVYkFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZndXZFRZZ0Yra3ZTcHFnVjgxVjVNSUFSWFVoL2VidFF3bGtBM00zblAyT3NRUkY3cjVGRjQ3RXFEYlhlWnhwaFdxNkVJOEh0MWc1dnc4NnVVVnljQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MjgxMzIxMjQ0MDIzOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlV3NEFYc2lYVFRUYUxvKzlqbXdOaGRHR1JpZ0w5eDZwMEUwMnF0dGtoY3YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZ2dGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzY1OTkwMCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFNEQifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
