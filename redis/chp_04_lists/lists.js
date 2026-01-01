import {client} from "../chp_01_setup/index.js"

await client.lPush("queue", "job1");
await client.rPush("queue", "job2");

const jobs = await client.lRange("queue", 0, -1);
console.log(jobs);

const processed=await client.rPop("queue");
console.log("Processed:", processed)