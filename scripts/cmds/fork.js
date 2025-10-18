module.exports.config = {
  name: "fork",
  version: 0.2,
  author: "MEHERAZ",
  category: "npx",
  description: "FORK",
  countdown: 5,
  role: 0,
};

module.exports.onStart = ({}) => {};

module.exports.onChat = async ({ api, event, args }) => {
  try {
    const msg = event.body.toLowerCase();

    if (msg === "/fork" || msg === "fork") {
      api.sendMessage(
        {
          body: 
 `https://github.com/chisty-57/FACEBOOK-BOT.git
`,
        },
        event.threadID,
        event.messageID
      );
    }
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};
