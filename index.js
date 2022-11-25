require("dotenv").config();
const express = require("express");
const MongoUtil = require("./MongoUtil");
const mongoUrl = process.env.MONGO_URL;
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

(async () => {
  const db = await MongoUtil.connect(mongoUrl, "halal_eateries");

  // GET
  try {
    app.get("/halal-eateries", async (req, res) => {
      const result = await db.collection("details").find({}).toArray();
      res.send(result);
    });
  } catch (e) {
    res.send(
      `Apologies. API was not consumed successfully. Please contact the administrator at Github`
    );
    console.log(e);
  }
})();

app.listen(process.env.PORT || 8080, () => console.log("Server is running..."));
