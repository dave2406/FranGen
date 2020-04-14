#!/usr/bin/env node
const fs =require("fs");
var cowsay = require("cowsay");
const [,, ...args] = process.argv;
const default_fran = fs.readFileSync("./frans/default.fran", "utf-8")
const cowboy_fran = fs.readFileSync("./frans/cowboy.fran", "utf-8")
const astronaut_fran = fs.readFileSync("./frans/astronaut.fran", "utf-8")
const mario_fran = fs.readFileSync("./frans/mario.fran", "utf-8")

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
    else if (args[0]=="say" && args[1]=="frandom"){console.log([cowboy_fran, astronaut_fran,mario_fran][Math.floor(Math.random() * 3)].replace("$name", names[Math.floor(Math.random()*names.length)]))}
    else if (args[0]=="say"){console.log(default_fran.replace("$name", names[Math.floor(Math.random()*names.length)]))}
    else if (args[0]=="help"||args[0]=="-h"){console.log("Welcome to frangen! Available commands are: all, say (frandom/-r), cowsay, help/-h")}
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
