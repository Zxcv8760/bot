import { googleIt } from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';

let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  let fkontak = { 
    "key": { 
      "participants": "0@s.whatsapp.net", 
      "remoteJid": "status@broadcast", 
      "fromMe": false, 
      "id": "Halo" 
    }, 
    "message": { 
      "contactMessage": { 
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
      } 
    }, 
    "participant": "0@s.whatsapp.net" 
  };

  if (!text) return conn.reply(m.chat, ` *🦦اكتب الي عايز تبحث عليه يحب زي كده*\n\n*.بحث اي حاجه* `, m, { contextInfo: { externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: mg, body: wm, previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom() }}});

  try {
    const url = 'https://google.com/search?q=' + encodeURIComponent(text);
    google({ 'query': text }).then(res => {
      let teks = `\`🔍 *نتايج البحث عن* ` ${text}\n\n*${url}*\n\n`;
      for (let g of res) {
        teks += `_${g.title}_\n_${g.link}_\n_${g.snippet}_\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
      }
      const ss = `https://image.thum.io/get/fullpage/${url}`;
      conn.sendFile(m.chat, ss, 'error.png', teks, fkontak, false, fake);
      handler.limit = 1;
    });
  } catch {
    handler.limit = 0;
  }
};

handler.help = ['google', 'googlef'].map(v => v + ' <بحث>');
handler.tags = ['بحث'];
handler.command = /^بحث?$/i;
handler.register = true;

export default handler;
