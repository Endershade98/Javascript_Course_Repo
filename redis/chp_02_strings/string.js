import {client} from "../chp_01_setup/index.js"

await client.set("visits", 0);
await client.incr("visits");
await client.incr("visits");
await client.decr("visits")

const visits = await client.get("visits");
console.log("Visits:", visits);