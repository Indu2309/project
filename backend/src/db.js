import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://indukethireddy:indu23@indu23.nhrx6lq.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("21B91A04A8");
    cb();
}
export { connectToDB, db };