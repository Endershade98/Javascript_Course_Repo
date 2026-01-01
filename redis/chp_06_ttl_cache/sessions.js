import {client} from "../chp_01_setup/index.js"

await client.set("session:abc123", "user42",{
    EX:10,
});

const ttl = await client.ttl("session:abc123");
console.log("TTL: ", ttl);