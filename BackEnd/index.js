const express = require("express");
const dbConnect = require("./databse/db");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
require("dotenv").config()
const cors = require("cors");

const app = express();
app.use(cookieParser());
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

dbConnect();
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started at : ${PORT}`));
