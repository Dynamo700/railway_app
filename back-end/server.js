const express = require('express');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken')
const multer = require("multer");
const mongo = require("mongodb")
const {MongoClient} = require("mongodb");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server now listening on ${PORT}`);
});