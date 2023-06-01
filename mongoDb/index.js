const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function run() {
  try{
    const db = client.db("sample");
    const products = db.collection("products");
    const doc = {
      name: "pencil",
      price: 110,
    };
    const result = await products.insertOne(doc);
    console.log(`id: ${result.insertedId}`);
  } finally {
    console.log("finally");
  }
}

run().then(() => { console.log("OK")}).catch(() => {console.log("NG")});
