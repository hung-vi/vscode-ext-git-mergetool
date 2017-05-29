## (Terminal: Git mergetool)
Merge conflicted file(s) with 3rd merge tool with command `>git: mergetool`.

## How to run?

### 1. Git configuration: Set BeyondCompare (or another tool) as default mergetool

`git config --global merge.tool bc3`

`git config --global merge.bc3.trustExitCode true`

`git config --global diff.tool bc3`

`git config --global difftool.bc3.trustExitCode true`

### 2. Open conflicted files in vs

### 3. Select & execute command

Press hotkey `Ctrl + P` (for windows or Unix) or `Command + P` (for Mac OS) to open search box

Type command: `>git: mergetool`

Select and execute `Terminal: Git mergetool`

### 4. Any questions, comments or suggestions are welcome!
**Any questions, comments or suggestions are welcome!**

[Fork me on GitHub](https://github.com/hung-vi/vscode-ext-git-mergetool)