const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function run() {
  try{
    const db = client.db("sample");
    const data = await db.listCollections();
    console.log(data);
    console.log("get db");
  } finally {
    console.log("finally");
  }
}

run().then(() => { console.log("OK")}).catch(() => {console.log("NG")});