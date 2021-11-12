const express = require('express');
const MongoUtil = require('./MongoUtil');
const mongoUrl = process.env.MONGO_URL;

// Add in the missing requires for the API to work
const cors = require('cors');

// create an instance of express app
let app = express();

// Add in the missing express.use() for the API to work
app.use(express.json());
app.use(cors());

async function main() {
  const DBNAME = 'halal_eateries';
  let db = await MongoUtil.connect(mongoUrl, DBNAME);

  // GET
  try {
    app.get('/halal-eateries', async (req, res) => {
      let result = await db.collection('details').find({}).toArray();
      res.send(result);
    });
  } catch (e) {
    res.send(
      `Apologies. API was not consumed successfully. Please contact the administrator at Github`
    );
    console.log(e);
  }
}

main();

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'));
