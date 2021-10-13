const express = require('express')
const request = require("request");


const url = "http://localhost:3000/getDate&Time";

// Requests the getDate&Time API running on the localhosts
request.get(url, (error, response, body) => {
let json = JSON.parse(body);
console.log(body);
});