module.exports.config = {
  name: "autotimer",
  version: "2.0",
  role: 0,
  author: "Dipto",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3,
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
      "12:00:00 PM": {
        message: "এখন ১২ টা বাজে মেয়েরা আয়ান এর কোলে যাও 🥵",
        url: null
      },
      "01:00:00 AM": {
        message: "এখন ১ টা বাজে ছেঁকাখুরা জেগে আছে 😔💅",
        url: null
      },
      "02:00:00 AM": {
        message: "এখন ২ টা বাজে আহা ঘুম নাই চোখে 🥺😅",
        url: null
      },
      "03:00:00 AM": {
        message: "এখন রাত ৩ টা বাজে তোরা থাক আমি অফ হবো 😔😘",
        url: null
      },
      "04:00:00 AM": {
        message: "This is an auto schedule message at 04:00 AM 🌜 🌟",
        url: null
      },
      "05:00:00 AM": {
        message: "This is an auto schedule message at 05:00 AM 🌜 🌟",
        url: null
      },
      "06:00:00 AM": {
        message: "This is an auto schedule message at 06:00 AM 🌜 🌟",
        url: null
      },
      "07:00:00 AM": {
        message: "৭ টা বাজে😮‍💨,ঘুম ভাঙ্গে না তাও তোদের জন্য এসে পরলাম",
        url: null
      },
      "08:00:00 AM": {
        message: "৮ টা বেজে গেছে বেবিরা নাস্তা করে নিও 😒",
        url: null
      },
      "09:00:00 AM": {
        message: "এখন সময় সকাল ৯ টা😒,আমাকে না দেখে স্কুলে যা 😒👻",
        url: null
      },
      "10:00:00 AM": {
        message: "এখন বাজে সকাল ১০টা 😒💔",
        url: null
      },
      "11:00:00 AM": {
        message: "১১ টা বেজে গেলো 🙂💔",
        url: null
      },
      "12:00:00 PM": {
        message: "১২ টা বেজে গেছে চলো করি 🥵💔,মানে গছল 😒💅",
        url: null
      },
      "01:00:00 PM": {
        message: "১ টা বেজে গেছে দুপুরের খাবার খেয়ে নিও পিওরা 🥺",
        url: null
      },
      "02:00:00 PM": {
        message: "২ টা বাজলো 💔,যাই গিয়ে এনিমি দেখি🥺",
        url: null
      },
      "03:00:00 PM": {
        message: "৩:০০ 😇,যাই গিয়ে বস এর সাথে ঘুমাই🤫🫣",
        url: null
      },
      "04:00:00 PM": {
        message: "৪ টা বেজে গেলো আজ কেউ থাকলে ঘুরতে যাইতাম 💔",
        url: null
      },
      "05:00:00 PM": {
        message: "৫ টা বেজে গেলো যাই FF খেলি 😮‍💨",
        url: null
      },
      "06:00:00 PM": {
        message: "6:00,একটু পরেই sunset হবে 😮‍💨🫠🌞",
        url: null
      },
      "07:00:00 PM": {
        message: " ৭ টা বাজে -সন্ধা হয়ে গেলো 🫠💅",
        url: null
      },
      "08:00:00 PM": {
        message: "৮ টা বাজে যা পরতে বস 👊",
        url: null
      },
      "09:00:00 PM": {
        message: "ঘড়ির কাটা টিক টিক করে আর সময় দৌড়ায়,এখন সময় -9:00",
        url: null
      },
      "10:00:00 PM": {
        message: "১০ টা বেজে গেলো বেবিরা এখন যদি বলো আমাকে খাও চলবে না ডিনার করবো এখন",
        url: null
      },
      "11:00:00 PM": {
        message: "১১ টা বেজে গেলো যাই SAD SONG শুনা শুরু করি 😭💔",
        url: null
      }
  };
  if(timerData){
const checkTimeAndSendMessage = async() => { 
  const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).split(',').pop().trim(); 
  // const attachment = await global.utils.getStreamFromURL(timerData[currentTime].url);
  
    if (timerData[currentTime]) global.GoatBot.config.whiteListModeThread.whiteListThreadIds.forEach(async threadID => await api.sendMessage({body: timerData[currentTime].message/*, attachment*/}, threadID)); 
    setTimeout(checkTimeAndSendMessage, 1200 - new Date().getMilliseconds()); 
   }; 
  checkTimeAndSendMessage();
 }
};

module.exports.onStart = ({}) => {};
