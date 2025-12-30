const { connect, JSONCodec } = require('nats');
const axios = require('axios');

const jc = JSONCodec();
const natsUrl = process.env.NATS_URL || 'nats://my-nats.default.svc.cluster.local:4222';
const webhookUrl = process.env.WEBHOOK_URL;

async function start() {
  try {
    const nc = await connect({ servers: natsUrl });
    console.log(`Connected to NATS at ${natsUrl}`);

    // The "queue" option is CRITICAL for Exercise 4.6. 
    // It ensures that even with 6 replicas, only ONE sends the message.
    const sub = nc.subscribe("todo_notifications", { queue: "broadcaster-group" });

    for await (const m of sub) {
      const todo = jc.decode(m.data);
      console.log(`Received todo: ${todo.message}`);

      if (webhookUrl) {
        await axios.post(webhookUrl, {
          content: todo.message // This format works for Discord
        });
      }
    }
  } catch (err) {
    console.error('NATS connection failed:', err);
  }
}

start();
