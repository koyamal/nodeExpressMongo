const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function run() {
  try{
    const db = client.db("sample");
    const products = db.collection("products");
    const filter = {name: "pen"};
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        price: 1330,
      }
    }
    const result = await products.updateOne(filter, updateDoc, options);
    console.log(`${result.matchedCount}  ${result.modifiedCount}`);
    console.log(result);
  } finally {
    console.log("finally");
  }
}

run().then(() => { console.log("OK")}).catch(() => {console.log("NG")});
