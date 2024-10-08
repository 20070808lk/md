const { cmd } = require('../command');
const { conn } = require('../config');  // Make sure you have the proper connection setup

// Voice message URLs
const voiceMessages = {
    palayan: 'https://github.com/Sithuwa/SITHUWA-MD/blob/main/media/palayan.mp3?raw=true',
    bye: 'https://github.com/Sithuwa/SITHUWA-MD/blob/main/media/Bye.mp3?raw=true',
    gm: 'https://github.com/Sithuwa/SITHUWA-MD/blob/main/media/Gm.mp3?raw=true',
    hi: 'https://github.com/Sithuwa/SITHUWA-MD/blob/main/media/Hi.mp3?raw=true',
    gn: 'https://github.com/Sithuwa/SITHUWA-MD/blob/main/media/Gn.mp3?raw=true',
    hmm: 'https://github.com/Sithuwa/SITHUWA-MD/blob/main/media/Hmm.mp3?raw=true'
};

// Function to send voice message
async function sendVoice(conn, chatId, voiceUrl) {
    try {
        await conn.sendMessage(chatId, { audio: { url: voiceUrl }, mimetype: 'audio/ogg; codecs=opus' });
    } catch (error) {
        console.error('Error sending voice message:', error);
    }
}

// Command handlers for sending voice messages
cmd({
    pattern: "palayan",
    desc: "Send the palayan voice message.",
    category: "media",
    react: "🔊",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    await sendVoice(conn, from, voiceMessages.palayan);
});

cmd({
    pattern: "bye",
    desc: "Send the bye voice message.",
    category: "media",
    react: "🔊",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    await sendVoice(conn, from, voiceMessages.bye);
});

cmd({
    pattern: "gm",
    desc: "Send the good morning voice message.",
    category: "media",
    react: "🔊",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    await sendVoice(conn, from, voiceMessages.gm);
});

cmd({
    pattern: "hi",
    desc: "Send the hi voice message.",
    category: "media",
    react: "🔊",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    await sendVoice(conn, from, voiceMessages.hi);
});

cmd({
    pattern: "gn",
    desc: "Send the good night voice message.",
    category: "media",
    react: "🔊",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    await sendVoice(conn, from, voiceMessages.gn);
});

cmd({
    pattern: "hmm",
    desc: "Send the hmm voice message.",
    category: "media",
    react: "🔊",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    await sendVoice(conn, from, voiceMessages.hmm);
});
