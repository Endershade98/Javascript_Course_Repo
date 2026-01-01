import {client} from "../chp_01_setup/index.js"

const key = "rate:user42";

const attempts = await client.incr(key);

if (attempts === 1) {
  await client.expire(key, 60);
}

if (attempts > 3) {
  console.log("Too many requests");
} else {
  console.log("Request allowed");
}
