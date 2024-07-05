const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348101646723";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_53_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMUQwOVU3MnBFb1BObHRvam5aNVJySmY2QzZSb2wxNExzY1FNTmx6dHd0OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTAxNjQ2NzIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMEY1MTA1QjIxODEyNkY1RTA3NTAyRDNFQUMyNkYyQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMzcyMTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTAxNjQ2NzIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRDBEQUI1NjFGMDUzRUYzRDUyMjU1ODNFRTMyNDcxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMzcyMTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYzhlWG5ZMTdSb21NRFFIM3JlZGF0UVwiLFxuICBcInBob25lSWRcIjogXCI4NGE5Mzk1Yi0zZWRlLTQwYjQtYmViOC1iM2U2OTZmOGQxODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgNDIsXG4gICAgICAyNDksXG4gICAgICA5MixcbiAgICAgIDIxNyxcbiAgICAgIDcyLFxuICAgICAgMjEwLFxuICAgICAgOTgsXG4gICAgICAxMzYsXG4gICAgICAxNzYsXG4gICAgICAxMTgsXG4gICAgICAxNTgsXG4gICAgICA1NixcbiAgICAgIDEzNCxcbiAgICAgIDgyLFxuICAgICAgMjA4LFxuICAgICAgNTUsXG4gICAgICAxMjMsXG4gICAgICAxMjMsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTIsXG4gICAgICAxMTMsXG4gICAgICA0LFxuICAgICAgMTYxLFxuICAgICAgOTEsXG4gICAgICAyNTEsXG4gICAgICA5LFxuICAgICAgMTMwLFxuICAgICAgMTA3LFxuICAgICAgMTM4LFxuICAgICAgODUsXG4gICAgICA4NyxcbiAgICAgIDE4OSxcbiAgICAgIDE0MCxcbiAgICAgIDY1LFxuICAgICAgMjE1LFxuICAgICAgMTAyLFxuICAgICAgMTQzLFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkMyNUFaQTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDE2NDY3MjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzM4NDM5MjY0MjE1OTI6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLT2lxMk1ROE91Y3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRYcEJUWS9Bd3VVSlJ0Um0yTFZrOVhaOVpIakwvYUt5YzhlYTBMU1dEVFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWklnSUloRTdjL0tWMjhDdVRmSStVUjY3VGNEZGxwWmtyN0p3R2RaYm0xQ2xmVk1SS283OHA4Z0NjZHFxZlNMRjczVUdzOWdrMkRwVmw1ZlI0Ryt5Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR3VIb0dob0VPM2FWdkp2L3NrMFVPMVB2N3QySGJsRHR5T09Ic2lWMWIxSFZVdTZWVnc3K1VBNlJwNmZYU01UcDZBNmpNNmNqVTgxK1JsRlRPOUlqakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMTY0NjcyMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMzcyMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCOG5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI4bi5qc29uIjogIntcImtleURhdGFcIjpcIkdSRWNWakZ5bHdTQSsvWmhFV3hSWWgxV3hxUWtNMGUrV0Nvb1lMOEZ3QXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4MzI2OTQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMzcyMTA4MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
