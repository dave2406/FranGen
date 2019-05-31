#!/usr/bin/env node
const fs =require("fs");
fs.readFile(`${__dirname}/names.txt`, (err, data) => { 
    if (err) throw err;
    var names = data.toString().split(",");
    console.log(names[Math.floor(Math.random()*names.length)]);
}) 