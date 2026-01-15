const line = require('@line/bot-sdk');

// LINE Messaging API Configuration
const config = {
    channelAccessToken: "iDbKpjHfHIEJJcwfRD0l/G2EWpu2aCiC5iwSWaw7ChEWXt4OfCzyz5m1EOslVEw1ozniwHCKIlgADlcyr98Pl+felKWdiJQbFphN+/9Wt+IxQPEGV0jCSyq5Ew3IIhf+hOvsxEq7vaSBd86tcFAsJwdB04t89/1O/w1cDnyilFU=",
    channelSecret: "644dbdca0f6698752059fe01d12ef623"
};

const client = new line.Client(config);

const userId = ""; // LINE User ID

if (!userId) {
    console.error("Error: TARGET_USER_ID is not set in .env file.");
    process.exit(1);
}

async function sendMessage() {
    try {
        await client.pushMessage(userId, {
            type: 'text',
            text: 'これはNode.jsスクリプトから送信されたメッセージです！'
        });
        console.log(`Message sent successfully to ${userId}`);
    } catch (error) {
        console.error('Error sending message:', error);
        if (error.originalError && error.originalError.response) {
            console.error('Response data:', error.originalError.response.data);
        }
    }
}

sendMessage();