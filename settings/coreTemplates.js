function templates (name) {
	return __dirname.replace("/settings","") + "/application/templates/" + name + ".html";
}

module.exports = {
	template : templates,
}