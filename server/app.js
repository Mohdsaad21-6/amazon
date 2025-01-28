require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn")
const DefaultData=require("./defaultdata")
const cors=require("cors")
const router=require("./routes/router");

app.use(cors());
app.use(express.json())
const PORT = 8005;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server was listeninin on  ${PORT}`);
});

DefaultData()