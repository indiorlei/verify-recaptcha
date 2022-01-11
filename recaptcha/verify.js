const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  const { token } = req.query;
  const url = "https://www.google.com/recaptcha/api/siteverify";
  const secret = process.env.SECRET_KEY;

  try {
    const { data } = await axios(url, {
      method: "post",
      params: {
        secret,
        response: token,
      },
    });

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
