import {client} from "../chp_01_setup/index.js"

const info = await client.info("memory");
console.log(info);

const keys = [];
for await (const key of client.scanIterator()) {
  keys.push(key);
}
console.log(keys);
