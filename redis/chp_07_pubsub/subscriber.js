import { subscribe } from "node:diagnostics_channel";
import { createClient } from "redis";

const sub=createClient();
await sub.connect();


await sub.subscribe("notifications", (message) => {
  console.log("Received:", message);
});