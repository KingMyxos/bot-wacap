/*
* "Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
* Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
* (QS ash-Shaff: 2-3).
*/
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const imageToBase64 = require('image-to-base64');
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const menu = require("./lib/menu.js");
const tambahan = require("./lib/tambahan.js")
const donasi = require("./lib/donasi.js");
const info = require("./lib/info.js");
/////////////////
const BotName = 'MYX BOT'; 
const instagram = 'https://instagram.com/haidar_myxos02'; 
const whatsapp = 'wa.me/6285693074454'; 
const kapanbotaktif = '08.00-18.00'; 
//const grupch1 = 'belum ada grup'; 
const grupch2 = 'https://www.youtube.com/channel/UCRAeMSOKytahwNoTrzYiHFw' ; 
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

// OCR Library
const readTextInImage = require('./lib/ocr')

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr dengan whatsapp!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated!`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log('Bot by ig:@haidar_myxos02')
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by ig:@haidar_myxos02`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   function rndm(isi){ return Math.floor(Math.random() * isi) + 1 }
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);


// Groups

if (text.includes("!buatgrup"))
   {
var nama = text.split("!buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("Grup telah dibuat dengan id: " + group.gid)
conn.sendMessage(group.gid, "Halo semua!!!", MessageType.extendedText) // say hello to everyone on the group
}

if (text.includes("%scdl")){
const fs = require("fs");
const scdl = require("./lib/scdl");
scdl.setClientID("iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX");
scdl("https://m.soundcloud.com/abdul-muttaqin-701361735/lucid-dreams-gustixa-ft-vict-molina")
    .pipe(fs.createWriteStream("mp3/song.mp3"));
}
 else if (text.includes("!tts")) {
  var teks = text.split("%ttsid ")[1];
  var path = require('path');
  var text1 = teks.slice(6);
  text1 = suara;
  var suara = text.replace(/%ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
  
  
/*
 * save audio file
 */

gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED=`)
});
await new Promise(resolve => setTimeout(resolve, 500));

	if(suara.length > 200){ // check longness of text, because otherways google translate will give me a empty file
  conn.sendMessage("Text kepanjangan bro!")
}else{

const buffer = fs.readFileSync(filepath)
	conn.sendMessage(id , buffer , MessageType.audio);

};
}
//chat
if (text == 'halo')
{
conn.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'hai')
{
conn.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'assalamualaikum')
{
conn.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'Night')
{
conn.sendMessage(id, '�Love You�💖' ,MessageType.text);
conn.sendMessage(id, 'Bye syg💖�' ,MessageType.text);
conn.sendMessage(id, 'Lop you💖�🌹😘' ,MessageType.text);
conn.sendMessage(id, 'Miss you😊💙😚�🌹💖' ,MessageType.text);
conn.sendMessage(id, 'See you tomorrow💖�🌹🐤💙😚😘' ,MessageType.text);
conn.sendMessage(id, 'Selamat Tidur Sayang 🌹🐤💙😚😘' ,MessageType.text);
conn.sendMessage(id, 'Good night, sleep, and nice dream💖�😘🌹💙😚��' ,MessageType.text);
conn.sendMessage(id, 'Gut naith 🌕🌹💖' ,MessageType.text);
conn.sendMessage(id, 'Lop you💖�' ,MessageType.text);
}
else if (text == 'Siapa pacarmu?')
{
conn.sendMessage(id, 'Merisca donk pacarku xixii��❤️' ,MessageType.text);
}
else if (text == 'bro')
{
conn.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'p')
{
conn.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'test')
{
  conn.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HALO')
{
conn.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Halo')
{
conn.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Hai')
{
conn.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'Assalamualaikum')
{
conn.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'Bro')
{
conn.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == '!B211KZ')
{
conn.sendMessage(id, '*📝Private Bot⚙*\n*Berikut Code-Code Private Bot Myxos🔐*\nCode[1] => !Nf8Jp4QLHb93HctI\nCode[2] => !J8NtQ5H2Jf77K2xI\nCode ini hanya bisa di pakai di PC Saja' ,MessageType.text); 
}
else if (text == 'P')
{
conn.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'Test')
{
  conn.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HAI')
{
conn.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'Bot')
{
conn.sendMessage(id, 'Bot sudah aktif ketik  command *!menu*' ,MessageType.text);
}
else if (text == 'ASSALAMUALAIKUM')
{
conn.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'BRO')
{
conn.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == '!private')
{
conn.sendMessage(id, '️*️⚙️Untuk Fitur Private Chat Author Untuk Meminta Codenya🔐*\nWa.me/6285693074454?text=Omm+Ganteng+Bagi+Code+Fitur+Privatenya+Donk', MessageType.text);
}
else if (text == 'TEST')
{
  conn.sendMessage(id, tambahan.test, MessageType.text);
}
// Fitur

if (text.includes('!nulis')){
  const teks = text.replace(/!nulis /, "")
axios.get(`https://st4rz.herokuapp.com/api/nulis?text={teks}`)
   .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image) })
         })

}

if(text.includes("!cek")){
var num = text.replace(/!cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`nomor hp ${gg} ${exists ? " tersedia " : " tidak tersedia"} di whatsapp`, MessageType.text)
}

if (text.includes("!say")){
  const teks = text.replace(/!say /, "")
conn.sendMessage(id, teks, MessageType.text)
}
if (text.includes("!H14M")){
      const teks = text.replace(/!H14M /, "")
    axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then ((res) => {
     let hasil = `${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!simsimi")){
    const teks = text.replace(/!simsimi /, "")
  axios.get(`https://arugaz.herokuapp.com/api/simisimien?text=${teks}+simi&apikey=BwMKNBsvljkMtd.mGJnGszTs4IH5cYq5YXyC_Zbn`).then ((res) => {
    let hasil = `${res.data.result}`;
     conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!spamcall")){
     const teks = text.replace(/!spamcall /, "")
   axios.get(`https://arugaz.herokuapp.com/api/spamcall?no=${teks}`).then ((res) => {
     conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
      let hasil = `*_${res.data.logs}_* \n_MYXOS BOT_`;
     conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!spamwa")){
    const teks = text.replace(/!spamwa /, "")
   axios.get(`https://m.redbus.id/api/getOtp?number=${teks}&cc=62&whatsAppOpted=true`).then ((res) => {
   conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Kalau Tidak Berhasil tunggu 24 jam lagi karena limit dri spam ini sangat sedikit`;
    conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!spamsms")){
     const teks = text.replace(/!spamsms /, "")
  axios.get(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0${teks}`)
      axios.get(`https://api.danacita.co.id/users/send_otp/?mobile_phone=0${teks}`).then ((result) => {
   conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
     let hasil = `Spam Sudah Di Proses`;
     conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!yts")){
    const teks = text.replace(/!yts /, "")
   axios.get(`https://mhankbarbar.herokuapp.com/api/ytsearch?q=${teks}&apiKey=lGjYt4zA5SQlTDx9z9Ca`).then ((res) => {
     conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = `Title:${res.data.result[0].title}\nChannel:${res.data.result[0].channel}\nDuration:${res.data.result[0].duration}\nLink:${res.data.result[0].link}`;
    conn.sendMessage(id, hasil, MessageType.text);
})
}
  if (text.includes("!resep")){
      const teks = text.replace(/!resep /, "")
   axios.get(`https://arugaz.herokuapp.com/api/resep?query=${teks}`).then ((res) => {
    conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
   let hasil = `Tingkat Kesulitan:${res.data.result[0].difficulty}\nTitle:${res.data.result[0].title}\nPorsi:${res.data.result[0].serving}\nLink:${res.data.result[0].thumb}\nWaktu:${res.data.result[0].times}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
   if (text.includes("!waifu")){
    axios.get(`https://arugaz.herokuapp.com/api/waifu`).then ((res) => {
  imageToBase64(res.data.image)
     .then(
        (ress) => {
     conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
   var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
      let hasil = `Name:${res.data.name}\nDesc:${res.data.desc}`;
   conn.sendMessage(id, hasil, MessageType.text);
})
})

}
   if (text.includes("!neko")){
    axios.get(`https://arugaz.herokuapp.com/api/nekonime`).then ((res) => {
  imageToBase64(res.data.result)
     .then(
        (ress) => {
     conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
   var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
})
})
}

 if (text.includes("!stalk")){
   const teks = text.replace(/!stalk /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${teks}`).then ((res) => {
 imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
    conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
   var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
   let hasil = `Nama: ${res.data.Name}\nBiodata: ${res.data.Biodata}\nUsername: ${res.data.Username}\nFolowers: ${res.data.Jumlah_Followers}\nFollowing: ${res.data.Jumlah_Following}\nPost: ${res.data.Jumlah_Post}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
})
}

 if (text.includes("!loli")){
 axios.get(`https://arugaz.herokuapp.com/api/randomloli`).then ((res) => {
 imageToBase64(res.data.result)
        .then(
          (ress) => {
    conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
   var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
})
})
}

if (text.includes("!ytmp3")){
const teks = text.replace(/!ytmp3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta2?url=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `✅Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!brainly")){
   const teks = text.replace(/!brainly /, "")
  axios.get(`https://rest.farzain.com/api/brainly.php?id=${teks}&apikey=aPgrnV8pfUZxOAvf07JqjsuVx`).then ((res) => {
  conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Title:${res.data[0].title}\nLink: ${res.data[0].url}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!J8NtQ5H2Jf77K2xI")){
   axios.get(`https://arugaz.herokuapp.com/api/cersex1`).then ((res) => {
 conn.sendMessage(id, '*⚙️Private Fitur MYX-BOT🛡*' ,MessageType.text);
let hasil = `Judul:${res.data.result.judul}\n\n${res.data.result.article}`;
    conn.sendMessage(id, hasil, MessageType.text);
})
}

if (text.includes("!corona")){
  const teks = text.replace(/!corona /, "")
 axios.get(`https://arugaz.herokuapp.com/api/corona?country=${teks}`).then ((res) => {
 conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
     let hasil = `📝Data Kasus COVID-19 ${teks}🌏\nActive: ${res.data.result.active}\nCases Per One Million: ${res.data.result.casesPerOneMillion}\nCountry: ${res.data.result.country}\nCritical: ${res.data.result.critical}\nDeath Per One Million: ${res.data.result.deathsPerOneMillion}\nRecovered: ${res.data.result.recovered}\nTest Per One Million: ${res.data.result.testPerOneMillion}\nToday Cases: ${res.data.result.todayCases}\nToday Death: ${res.data.result.todayDeath}\nTotal Cases: ${res.data.result.totalCases}\nTotal Death: ${res.data.result.totalDeath}\nTotal Test: ${res.data.result.totalTest}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!Nf8Jp4QLHb93HctI")){
  const teks = text.replace(/!Nf8Jp4QLHb93HctI /, "")
   axios.get(`https://arugaz.herokuapp.com/api/indohot`).then ((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
 let hasil = `*⚙️Private Fitur MYX-BOT🛡*️\nCountry:${res.data.result.country}\nDurasi:${res.data.result.durasi}\nGenre:${res.data.result.genre}\nJudul:${res.data.result.judul}\nLink:${res.data.result.url}`;
   conn.sendMessage(id, hasil, MessageType.text);
})
}

if (text.includes("!ytmp4")){
const teks = text.replace(/!ytmp4 /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv2?url=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `✅Video Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${res.data.title}\n\nUkuran video: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`https://arugaz.herokuapp.com/api/fb?url=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\nVideo sesuai kualitasnya\nLink:\nHD: ${res.data.result.hd}\nBurik: ${res.data.result.sd}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!ig")){
const teks = text.replace(/!ig /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/ig?url=${teks}&apiKey=lGjYt4zA5SQlTDx9z9Ca`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!twt")){
const teks = text.replace(/!twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=lGjYt4zA5SQlTDx9z9Ca`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `✅Berhasil silahkan klik link di bawah untuk mendownload hasilnya\nKlik link dibawah🗡️\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!doujin")){
  const teks = text.replace(/!doujin /, "")
 axios.get(`https://mhankbarbar.herokuapp.com/api/nhentai?type=search&query=${teks}&apiKey=lGjYt4zA5SQlTDx9z9Ca`).then ((res) => {
   conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
 let hasil = `Title:${res.data.result[0].title}\nLanguage:${res.data.result[0].lang}\nKode:${res.data.result[0].id}`;
    conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!tiktok")){
	const tictoc = text.replace(/!tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
     let titoe = `Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \n\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}
if (text.includes("!wikiin")){
const teks = text.replace(/!wikiin /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${teks}`).then ((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `📝Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
}
 if (text.includes("!wikien")){
const teks = text.replace(/!wikien /, "")
axios.get(`https://arugaz.herokuapp.com/api/wikien?q=${teks}`).then ((res) => {
   let hasil = `📝According to Wikipedia:\n\n${res.data.result}`;
     conn.sendMessage(id, hasil, MessageType.text);
    })
}
if (text.includes("!random")){
const teks = text.replace(/!random /, "")
axios.get(`https://rest.farzain.com/api/random.php?min=1&max=${teks}&apikey=aPgrnV8pfUZxOAvf07JqjsuVx`).then ((res) => {
    let hasil = `Random Number:${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
}
if (text.includes("!jam")){
const teks = text.replace(/!jam /, "")
axios.get(`https://rest.farzain.com/api/jam.php?id=${teks}&apikey=aPgrnV8pfUZxOAvf07JqjsuVx`).then ((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
	let hasil = `Location: ${res.data.data.timezone}\nDate: ${res.data.time.date}\nTime: ${res.data.time.time}\nLatitude: ${res.data.location.latitude}\nLongitude: ${res.data.location.longitude}\nAddress: ${res.data.location.address}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
}
if (text.includes("!short")){
const teks = text.replace(/!short /, "")
axios.get(`http://api.farzain.com/url.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`).then ((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `✅Link Berhasil Di Pendekkin!\nUrl :${res.data.url}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!nuklir")){
  const teks = text.replace(/!nuklir /, "")
  axios.get(`https://mhankbarbar.herokuapp.com/api/nhentai?type=download&nuklir=${teks}&apiKey=lGjYt4zA5SQlTDx9z9Ca`).then ((res) =>{
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
let hasil = `Kode Nuklir Sudah Di Convert Silahkan Download Sendiri Jan Manja :v\nID : ${teks}\nJudul : ${res.data.title}\nKategori : ${res.data.categories}\nTag : ${res.data.tags}\nLink : ${res.data.result}\nBahasa : ${res.data.languages}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
    }
   if (text.includes("!zodiak")){
       const teks = text.replace(/!zodiak /, "")
     axios.get(`https://arugaz.herokuapp.com/api/getzodiak?nama=Myxos&tgl-bln-thn=${teks}`).then ((res) =>{
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
     let hasil = `Lahir : ${res.data.lahir}\nUltah : ${res.data.ultah}\nUsia : ${res.data.usia}\nZodiak : ${res.data.zodiak}`;
    conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!cuaca")){
  const teks = text.replace(/!cuaca /, "")
  axios.get(`https://rest.farzain.com/api/cuaca.php?id=${teks}&apikey=aPgrnV8pfUZxOAvf07JqjsuVx`).then ((res) =>{
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = `Jadwal cuaca di ${teks} hari ini adalah\n\n Angin :  ${res.data.respon.angin}\nCuaca : ${res.data.respon.cuaca}\nDesk : ${res.data.respon.desk}\nKelembapan : ${res.data.respon.kelembapan}\nSuhu : ${res.data.respon.suhu}\nTempat : ${res.data.respon.tempat}\nUdara : ${res.data.respon.udara}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!gempa")){
  const teks = text.replace(/!gempa /, "")
  axios.get(`https://st4rz.herokuapp.com/api/infogempa`).then ((res) =>{
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = `Info gempa hari ini\nKedalaman :  ${res.data.kedalaman}\nKoordinat : ${res.data.koordinat}\nLokasi : ${res.data.lokasi}\nMagnitude : ${res.data.magnitude}\nMap : ${res.data.map}\nPotensi : ${res.data.potensi}\nWaktu : ${res.data.waktu}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!sholat")){
  const teks = text.replace(/!sholat /, "")
  axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${teks}`).then ((res) =>{
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\nImsyak : ${res.data.Imsyak}\nSubuh : ${res.data.Subuh} WIB\nDzuhur : ${res.data.Dzuhur}WIB\nAshar : ${res.data.Ashar} WIB\nMaghrib : ${res.data.Maghrib}\nIsya : ${res.data.Isya} WIB\nTengah malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text == '!menu'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif) ,MessageType.text);
}
else if (text == '!quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

else if (text == '!donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donasi.donasi(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif) ,MessageType.text);
}
else if (text == '!info'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif) ,MessageType.text);
}
else if (text == '!pict'){
conn.sendMessage(id, 'ulangi dengan  !pict cewek/cowok\n\nMisal: !pict cowok' ,MessageType.text);
}

  // Optical Character Recognition
  if (messageType == 'imageMessage')
   {
       let caption = imageMessage.caption.toLocaleLowerCase()
       if (caption == '!ocr')
       {
           const img = await conn.downloadAndSaveMediaMessage(m)
           readTextInImage(img)
               .then(data => {
                   console.log(data)
                   conn.sendMessage(id, `*Read Data Text in Image* \n\nHasil: \n\n${data}`, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
       }
  }

   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '!sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
}
  }

   if (messageType == 'imageMessage')
  {
     let caption = imageMessage.caption.toLocaleLowerCase()
const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '!stiker')
   {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }
   if (is == '!gombal')
   {

      fetch('https://raw.githubusercontent.com/KingMyxos/telegram-bot-mysql/main/a.txt')
         .then(res => res.text())
         .then(body =>
         {
            let tod = body.split("\n")
            let hdr = tod[Math.floor(Math.random() * tod.length)];
            let gombal = hdr.replace(/myxs-line/g, "\n");
            conn.sendMessage(id, gombal, MessageType.text)
         });
       }
   };
      if (text.includes("!covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n”Positif ==> ${positif} \nSembuh ==> ${sembuh} \n­Meninggal ==> ${meninggal}\nDirawat ==> ${dirawat}`, MessageType.text);
}
   if (text.includes("!quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
      Quotes untuk 
*${id.split("@s.whatsapp.net")[0]}*
     _${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }
   else if (text.includes("!nama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Halo *${id.split("@s.whatsapp.net")[0]}*
      Arti dari namamu adalah

  ***********************************
         Nama _*${nama}*_ ${h}
  ***********************************

`,
 MessageType.text);
  });
  }
  else if (text.includes("!pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

************************************

 *Kecocokan berdasarkan nama*


 ${d}



************************************
    `, MessageType.text);
  });
  }
   if (text.includes("!pict cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)    
    var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(

            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes("!pict cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }

        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
}
   if (text.includes("!meme")){
        var items = ["meme", "memes", "meme pict", "memes pict"];
        var memes = items[Math.floor(Math.random() * items.length)];
        var url = "https://api.fdci.se/rep.php?gambar=" + memes;
       
           axios.get(url)
               .then((result) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var t = JSON.parse(JSON.stringify(result.data));
            var memes = t[Math.floor(Math.random() * t.length)];
            imageToBase64(memes)
            .then(
               (response) => {
        var buf = Buffer.from(response, 'base64');
                   conn.sendMessage(
                  id,
                    buf,MessageType.image)
             
                   }

               )
               .catch(
                   (error) => {
                       console.log(error);
                   }
                 )
         
             });

}

   if (text.includes("!gambar"))
   {
    const teks = text.replace(/!gambar /, "");
    axios.get(`https://api.fdci.se/rep.php?gambar=${teks}`).then((result) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)

        var g = JSON.parse(JSON.stringify(result.data));
        var gmbar =  g[Math.floor(Math.random() * g.length)];
        imageToBase64(gmbar) 
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
}

if (text.includes("!animepict"))
    {    
    var items = ["loli", "anime cewek", "nekopoi", "anime neko", "anime cewek hd", "anime"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 else if (text.includes("!ttsid")) {
  var teks = text.split("!ttsid ")[1];
  var path = require('path');
  var text1 = teks.slice(6);
  text1 = suara;
  var suara = text.replace(/#ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
  
  
/*
 * save audio file
 */

gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED!`)
});
await new Promise(resolve => setTimeout(resolve, 500));

	if(suara.length > 200){ // check longness of text, because otherways google translate will give me a empty file
  conn.sendMessage("Text kepanjangan bro!")
}else{

const buffer = fs.readFileSync(filepath)
	conn.sendMessage(id , buffer , MessageType.audio);

};
}
if (text.includes("!lirik")){
	const teks = text.split("!lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
	 	let hasil = `LIRIK DARI LAGU ${teks} ADALAH\n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes("!alay")){
	const alay = text.split("!alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}










//AKHIRNYAAAAAAAA


})
