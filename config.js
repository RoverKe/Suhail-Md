const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://github.com/SuhailTechInfo/Suhail-Md"                       // put your app url here,
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_25_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICA0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2M2RmSFNNM0RTdHo0Z09DM0lHd3ZkTkNTOFhFS2lueGVxbEZnUlJaM1YwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwNjM4MDU2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTYzM0M3QjBGMjIzQjc3NkY4RDkyNUVFNUVDRkUxNkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjIzMTE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRncTFIcFdyUjNPYWZKQlROenk0WEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2JiNzJmNjktYjZlZC00ZDFlLTk4YWEtN2M1NjZiNmUxZWVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDIzMCxcbiAgICAgIDEyNSxcbiAgICAgIDMyLFxuICAgICAgNzMsXG4gICAgICAyNCxcbiAgICAgIDEzLFxuICAgICAgMTg4LFxuICAgICAgMjE5LFxuICAgICAgNzgsXG4gICAgICA4OSxcbiAgICAgIDIxNixcbiAgICAgIDU0LFxuICAgICAgODEsXG4gICAgICAxMDUsXG4gICAgICAyMzIsXG4gICAgICAxMzEsXG4gICAgICAyNDIsXG4gICAgICA5MSxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgMjIsXG4gICAgICAxMjAsXG4gICAgICAyMjEsXG4gICAgICAxNDcsXG4gICAgICAxNTgsXG4gICAgICAyMixcbiAgICAgIDc4LFxuICAgICAgMjQyLFxuICAgICAgMTE0LFxuICAgICAgNzAsXG4gICAgICAxMjYsXG4gICAgICAyMzksXG4gICAgICA1MyxcbiAgICAgIDYxLFxuICAgICAgMjE5LFxuICAgICAgMTg2LFxuICAgICAgNDYsXG4gICAgICAyMzEsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeVEvSVFERUlMSnRMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwZXZLYUNVWnREbWJuNEVxNmNlUjdQcHptR21uWUFkbDNhVFlMaVdwMk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1kwZXEvbDlkdngwd3Nka2tGc05qSUtWUnVhamRobTh6SytMKzUrSnNBQVIyMG8vVkN5c1JaS2JwYXZxNUpXSkoxVkh2ZnZuZ2k4aGdlNnhBV21PQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWZ2eS93SFhKRlZtTzAzUzV1RWNlVS8wcGhqamhyR2Q1d1EzYWxiUE5hcERTYlR3UkV5T2diWDdOZVFhVkxwWkJ1MDZRb1lrVGN4YlhYVjVoT0dKaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDYzODA1NjM6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzc1NjY3ODEzOTkxMjoxOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNjM4MDU2MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjIzMTEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnZUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCdlMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaM2J4V3pmQW9LajhlZ3lNNmpneDRmRmVSUW9CZDNLZlVsVzNlNTdiYWlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgxNTcyODczMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnZULmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzlra0xPOWk0d2x1TWE4eElzdjBzM2ZhbW9CM1lXOTlRRm9IWHNRTmZ0ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTU3Mjg3MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MTg3NzI4NzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCdlUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkZEJWbmYvMktaSDRNVlMyN3I4eW5JK0pVTFZSV1lteWpEdHZVK0NPUVpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgxNTcyODczMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnZWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYVc1Q29XNjMxcGxOeDREbndOeDZ1Q25LbXpLSVNjem5JcTRSYUd3Um0rcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTU3Mjg3MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MjMwNjU0MzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
