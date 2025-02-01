require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn")
const DefaultData=require("./defaultdata")
const cors=require("cors")
const router=require("./routes/router");
const cookieParser = require("cookie-parser");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json())
app.use(cookieParser())
const PORT = 8005;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server was listeninin on  ${PORT}`);
});

DefaultData()