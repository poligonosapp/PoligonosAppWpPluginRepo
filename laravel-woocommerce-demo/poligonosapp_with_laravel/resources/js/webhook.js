// webhook
const { IncomingWebhook } = require('@slack/webhook');

// Read a url from the environment variables
const url = process.env.SLACK_WEBHOOK_URL;

// Initialize
const webhook = new IncomingWebhook(url);