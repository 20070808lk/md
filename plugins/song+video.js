//=============BhashiMDSongDL=============

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `‎ 
*┏━━━━━┫  𝗕𝗛𝗔𝗦𝗛𝗜 𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗟*
*┃*
*┃* 🎧 𝗧𝗮𝘁𝗶𝗹𝗲 : ${data.title}
*┃* ⏰ 𝗧𝗶𝗺𝗲 : ${data.timestamp}
*┃* 📆 𝗔𝗴𝗼 : ${data.ago}
*┃* 🪩 𝗩𝗶𝗲𝘄𝘀 : ${data.views}
*┗━━━━━━━━━━━━━━━━━━━━━━━━━━━*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"𝗕𝗛𝗔𝗦𝗛𝗜 𝗠𝗗"},{quoted:mek})





}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=============BhashiMDVideoDL=============

cmd({
    pattern: "video",
    desc: "download videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `‎ 
*┏━━━━━┫  𝗕𝗛𝗔𝗦𝗛𝗜 𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗟*
*┃*
*┃* 🎧 𝗧𝗮𝘁𝗶𝗹𝗲 : ${data.title}
*┃* ⏰ 𝗧𝗶𝗺𝗲 : ${data.timestamp}
*┃* 📆 𝗔𝗴𝗼 : ${data.ago}
*┃* 🪩 𝗩𝗶𝗲𝘄𝘀 : ${data.views}
*┗━━━━━━━━━━━━━━━━━━━━━━━━━━━*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video+ document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"𝗕𝗛𝗔𝗦𝗛𝗜 𝗠𝗗"},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
