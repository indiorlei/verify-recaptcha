const cors = require("cors");
const express = require("express");
const verify = require("./recaptcha/verify");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use("/recaptcha/verify", verify);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
