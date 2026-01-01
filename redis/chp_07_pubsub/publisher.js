import {client} from "../chp_01_setup/index.js"

await client.publish("notifications", "User logged in");
