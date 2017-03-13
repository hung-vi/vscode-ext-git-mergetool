'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.gitMergeTool', () => {
    // The code you place here will be executed every time your command is executed
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return; // No open text editor
    }
    let terminal = vscode.window.createTerminal();
    terminal.show();
    let fileName = vscode.window.activeTextEditor.document.fileName;
    terminal.sendText('git mergetool ' + fileName);
  });
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}