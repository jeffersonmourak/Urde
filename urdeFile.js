var settings = require("./settings/settings"),
	express = require("express");

var data = new settings.data(express,{
	port: 3000,
});