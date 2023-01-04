ESLINT_IGNORE(){
touch .eslintignore
cat << EOF > .eslintignore
node_modules/
.env
build
dist
EOF
}

ESLINT_IGNORE
