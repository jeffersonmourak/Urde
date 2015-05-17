var coreTemplates = require("../settings/coreTemplates");


function routeTest(req, res){
	res.sendFile(coreTemplates.template("index"));
}


module.exports = {
	routeTest : routeTest,
}