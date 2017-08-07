// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

function activate(context) {

    console.log('Congratulations, your extension "reload-on-save" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand(
        'extension.sayHello',
        function () {
            // The code you place here will be executed every time your command is executed

            // Display a message box to the user
            vscode.window.showInformationMessage('Hello World!');
        }
    );


    var triggerReload = vscode.commands.registerCommand(
        'extension.triggerReload',
        function () {
            console.log('triggering');
        }
    );

    context.subscriptions.push(disposable);
    context.subscriptions.push(triggerReload);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;