
PRETTIERRC_JSON(){

touch .prettierrc.json
touch .prettierignore

cat << EOF > .prettierrc.json
{
  "semi":true,
  "trailingComma":"es5",
  "singleQuote":true,
  "printWidth":80,
  "arrowParens":"avoid"
}
EOF


cat << EOF > .prettierignore
node_modules/
.env
build
dist
EOF


}

PRETTIERRC_JSON
