import { Client } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import "dotenv/config";

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  console.error("Missing BOT_TOKEN environment variable");
  process.exit(1);
}
console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

void client.login(TOKEN);

console.log(client);
