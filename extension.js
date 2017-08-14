var vscode = require('vscode');
var livereload = require('livereload');
var server;


function activate(context) {

    vscode.workspace.onDidSaveTextDocument(function () {
        server.refresh('');
        vscode.window.showInformationMessage('Triggered reload server');
    });

    var startServer = vscode.commands.registerCommand(
        'extension.startServer',
        function () {
            server = livereload.createServer();
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