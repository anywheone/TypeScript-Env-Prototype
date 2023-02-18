"use strict";
exports.__esModule = true;
var item_1 = require("./item");
var elem = document.getElementById('output');
var aBook = new item_1.Item('はじめてのTypeScript', 2980);
aBook.say(elem);
