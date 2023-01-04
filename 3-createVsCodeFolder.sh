

CREATE_VSCODE_FOLDER(){
mkdir .vscode
cd .vscode
touch settings.json

cat << EOF > settings.json
{
  "editor.formatOnSave":false,
  "editor.codeActionsOnSave":{
    "source.fixAll.eslint":true
  }
}
EOF

}
CREATE_VSCODE_FOLDER
