// const { Router } = require('express');

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    "name": "Fazt",
    "website": "faztweb.com",
  };
  res.json(data);
});

module.exports = router;
