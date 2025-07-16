"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *𝛭𝑅 𝐵²_𝑴𝑫* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *𝛭𝑅 𝐵²*';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/0kz48q.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *𝛭𝑅 𝐵²* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *𝛭𝑅 𝐵²*'
      let varmess=z+d
      var img='https://telegra.ph/file/5a0a3058b3949a15b3501.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
