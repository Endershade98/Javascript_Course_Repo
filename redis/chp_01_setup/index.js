
import {createClient} from "redis"

export const client=createClient({
    url:"redis://localhost:6379",
});

client.on("error", (err) => console.log("Redis error", err));

await client.connect();
