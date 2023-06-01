const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function run() {
  try{
    const db = client.db("sample");
    const products = db.collection("products");
    const query = {name: "pen"};
    const result = await products.deleteOne(query);
    console.log(result);
  } finally {
    console.log("finally");
  }
}

run().then(() => { console.log("OK")}).catch(() => {console.log("NG")});
