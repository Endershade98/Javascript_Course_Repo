import {client} from "../chp_01_setup/index.js"

await client.sAdd("online_users", "Alice", "Bob");
const online_users=await client.sMembers("online_users");
//console.log("Online users before adding new user: ", online_users);

const new_user="Carl";

await client.sAdd("online_users", new_user);
console.log("Online users after adding new user: ", online_users);