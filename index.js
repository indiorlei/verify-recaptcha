const express = require("express");
const verify = require("./api/verify");

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/api/verify", verify);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
