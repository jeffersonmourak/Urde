var vm = require('vm'),
    fs = require('fs'),
    views = require("../application/views");

function data(express, options) {
    options = options || {};
    options.port = options.port || 3000;

    var app = express(),
        http = require('http').Server(app);

    var code = fs.readFileSync(__dirname + "/urls.js", 'utf-8');

    vm.runInThisContext(code,"./urls.js");

    app.use('/static', express.static(__dirname.replace("settings","") + '/static'));

    GLOBAL["routes"](app,__dirname.replace("settings","") + "application/",views);

    http.listen(options.port, function() {
        console.log("Running in port " + options.port);
    });
}

module.exports = {
    data: data,
}
