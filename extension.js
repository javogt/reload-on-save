var vscode = require('vscode');
var http = require("http");

function server() {
    var server = http.createServer(function (request, response) {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write('{"tinylr": "Welcome","version": "0.0.5"}');
        response.end();
    });

    server.listen(35729);
    console.log("Server is listening");
}



function activate(context) {

    vscode.workspace.onDidSaveTextDocument(function () {
        vscode.window.showInformationMessage('Triggered reload server');
    });

    var startServer = vscode.commands.registerCommand(
        'extension.startServer',
        function () {
            server();
            vscode.window.showInformationMessage('Reload server started');
        }
    );

    var stopServer = vscode.commands.registerCommand(
        'extension.stopServer',
        function () {
            vscode.window.showInformationMessage('Stopped reload server');
        }
    );

    var restartServer = vscode.commands.registerCommand(
        'extension.restartServer',
        function () {
            vscode.window.showInformationMessage('Restarted reload server');
        }
    );

    context.subscriptions.push(startServer);
    context.subscriptions.push(stopServer);
    context.subscriptions.push(restartServer);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
    console.log('stop server');
}
exports.deactivate = deactivate;