import { Client } from "discord.js";
import ready from "./listeners/ready";

const TOKEN =
  "MTE3NjgxMzMyMjQ0ODk0MTA2Ng.G8MX6q.Iv2IOxl9hoC9kq0rrXhdfXUVgVBS9xtm1Lj4HI";

console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

ready(client);

void client.login(TOKEN);

console.log(client);
