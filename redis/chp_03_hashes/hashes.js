import {client} from "../chp_01_setup/index.js"

await client.hSet("user:1",
    {
        name:"Mario",
        surname:"Rossi",
        age:23
    }
);

const user = await client.hGetAll("user:1");
console.log(user);