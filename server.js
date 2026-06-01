"use strict";

const express = require("express");
const app = express(); 
const port = 3000; 

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({exteded: false}));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to stop the server.");
});