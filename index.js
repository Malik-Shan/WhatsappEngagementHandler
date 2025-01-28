const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready.");
});

client.on("message", (message) => {
  const from = message.from;
  const content = message.body;
  console.log("================================================");
  console.log(message);
  //console.log("Type-------------------");
  //console.log(message.type);
  //console.log("Name-------------------");
  //console.log(message.notifyName);
  //console.log("Message-------------------");
  //console.log(content);
  if ((content = "nonu")) {
    client.sendMessage(message.from, "kaka kaka");
  }
});

client.initialize();
