# Referências:
# https://matheusteixeirajs.medium.com/como-configurar-eslint-e-prettier-para-seus-projetos-em-react-nodejs-e-typescript-53a2c0b9f5d4#:~:text=ESLint%20%2D%20Visual%20Studio%20Marketplace&text=Para%20isso%2C%20aperte%20CTRL%2DSHIFT,editar%20a%20op%C3%A7%C3%A3o%20%22CodeActionsOnSave%22.&text=Caso%20voc%C3%AA%20n%C3%A3o%20tenha%20esta,se%20livre%20para%20adicion%C3%A1%2Dla.
# https://gist.github.com/roger-dev-br/dc58777fdce9bfe42c96aaa6764a88d0
# https://pt-br.reactjs.org/docs/hooks-rules.html

MENU_RESULT="
How would you like to use ESLint? Como você gostaria de usar o ESLint? Escolha a terceira opção:
To check syntax, find problems, and enforce code style.
What type of modules does your project use? Qual tipo de modulo você usa no seu projeto?
Escolha a primeira opção:
JavaScript modules (import/export)
Which framework does your project use? Qual framework você usa no projeto? Escolha a primeira opção:
React
Does your project use TypeScript? Você usa TypeScript no projeto? Escolha a primeira opção:
No
Where does your code run? Onde seu código vai executar? Escolha a primeira opção.
Browser
How would you like to define a style for your project? Como você gostaria de definir um estilo
para seu projeto? Vamos escolher a primeira opção:
Use a popular style guide
Which style guide do you want to follow? Qual guia de estilo você deseja seguir?
Airbnb.
What format do you want your config file to be in? Em que formato você deseja que o
arquivo de configuração esteja?
Escolha a primeira.
JSON
Por fim, o ESLint vai verificar as dependências do setup que você escolheu e perguntar:
Would you like to install them now with npm? Você gostaria de instalá-los agora com o NPM?
Escolha não, faremos isso depois com o Yarn.
"



MENU="
-----------------------------------------
Instalando Dependências de Desenvolvimento
* Axios;
* React-icons;
* React-router-dom;
* React-toastify;
* esLint;
* eslint-config-prettier;
* eslint-plugin-prettier;
* eslint-plugin-react;
* eslint-plugin-react-hooks;
* prettier;
* prop-types
-----------------------------------------
"


INSTALL_ESLINT(){
echo "[ ins 1s eslint ] "
sleep 1
npm install eslint --save-dev #1
echo "Configurando EsLint"
sleep 1
echo "[ ins 1s eslint ] "
sleep 1
echo "$MENU_RESULT"
npx eslint --init
echo "[in 1s config-airbnb]"
sleep 1
npm i eslint-config-airbnb --save-dev #2
echo "[ in 1s eslint-config-prettier ]"
sleep 1
npm install eslint-config-prettier --save-dev #3
echo "[ in 1s eslint-plugin-prettier ]"
sleep 1
npm install eslint-plugin-prettier --save-dev #4
echo "[ in 1s eslint-plugin-react ]"
sleep 1
# https://pt-br.reactjs.org/docs/hooks-rules.html
npm install eslint eslint-plugin-react --save-dev # 5
echo "[ in 1s eslint-plugin-react-hooks ]"
sleep 1
npm install eslint-plugin-react-hooks --save-dev #6
echo "[ in 1s prettier ]"
sleep 1
npm install prettier --save-dev #7
echo "[ in 1s eslint-plugin-import ]"
sleep 1
npm i eslint-plugin-import #8 observar
echo "[in 1s eslint eslint-plugin-jsx-a11y]"
sleep 1
npm i eslint-plugin-jsx-a11y --save-dev #9
}


INSTALLDEPENDECIES(){
INSTALL_ESLINT
echo "$MENU"
sleep 1
sleep 1
echo "[ in 1s axios]"
sleep 1
npm install axios
echo "[ in 1s react-icons ]"
sleep 1
npm install react-icons --save
echo "[ in 1s react-router-dom ]"
sleep 1
echo "[ in 1s prop-types ]"
sleep 1
npm install prop-types
echo -------------------------
}

INSTALLDEPENDECIES
