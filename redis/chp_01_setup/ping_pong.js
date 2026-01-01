import {client} from "../chp_01_setup/index.js"

const pong=await client.ping()
console.log(pong)