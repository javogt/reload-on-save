var vscode = require('vscode');

function activate(context) {

    vscode.workspace.onDidSaveTextDocument(function () {
        console.log('trigger reload');
    });

    var startServer = vscode.commands.registerCommand(
        'extension.startServer',
        function () {
            console.log('start server');
        }
    );

    var stopServer = vscode.commands.registerCommand(
        'extension.stopServer',
        function () {
            console.log('stop server');
        }
    );

    var restartServer = vscode.commands.registerCommand(
        'extension.restartServer',
        function () {
            console.log('restart server');
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