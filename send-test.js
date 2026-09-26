require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function sendTestMessage() {
  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER || 'whatsapp:+14155238886',
      to: 'whatsapp:+2348106170404',
      body: '🛡️ *VerifEye Notification*\n\nThis is a test notification from your VerifEye Bot server. Your WhatsApp integration is working!'
    });

    console.log('✅ WhatsApp message sent successfully!');
    console.log('Message SID:', message.sid);
  } catch (error) {
    console.error('❌ Failed to send WhatsApp message:');
    console.error(error.message);
  }
}

sendTestMessage();
