const mongoClient = require("mongodb").MongoClient;

async function connect(mongoUrl, dbName) {
  // create a client
  const client = await mongoClient.connect(mongoUrl, {
    useUnifiedTopology: true,
  });
  // use a database;
  const db = client.db(dbName);
  console.log("Database connected");
  return db;
}

// we are exporting the connect function
module.exports = {
  connect,
};
