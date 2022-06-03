exports.handler = async (event, context) => {
  require('dotenv').config();
  const line = require('@line/bot-sdk');
  const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
  };
  const userId = process.env.USER_ID;
  const client = new line.Client(config);
  const res = await client.pushMessage(userId, { type: 'text', text: 'hello, world' });

  return {
    statusCode: 200,
    body: JSON.stringify(res)
  };
};
