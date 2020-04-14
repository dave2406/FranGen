#!/usr/bin/env node
const fs =require("fs");
var cowsay = require("cowsay");
const [,, ...args] = process.argv;

fs.readFile(`${__dirname}/names.txt`, (err, data) => { 
    if (err) throw err;
    var names = data.toString().split(/\r?\n/);
    if (args.length==0){console.log(names[Math.floor(Math.random()*names.length)]);}
    else if (args[0]>0){
        for (i=0; i<args[0];i++)
            console.log(names[Math.floor(Math.random()*names.length)]);
        }
    else if (args[0]=="all"){console.log(names)}
    else if (args[0]=="cowsay"){console.log(cowsay.say({text : names[Math.floor(Math.random()*names.length)], e : "oO", T : "U "}))}
    else console.log("Unrecognised command line option");
    }
);
module.exports.getFran = () => {
    fs.readFile(`${__dirname}/names.txt`, (err, data) => { 
    if (err) throw err;
    var names = data.toString().split(/\r?\n/);
    return names[Math.floor(Math.random()*names.length)];
    }
);
}
