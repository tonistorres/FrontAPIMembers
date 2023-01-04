#! /usr/bin/zsh

# ---------------------------------------
# CONFIGURAÇÃO TOP DO esLint e Prettier #
# -----------------------------------------------------------------------
# https://gist.github.com/roger-dev-br/dc58777fdce9bfe42c96aaa6764a88d0 #
#-----------------------------------------------------------------------

#------------------------------------
# COMPLEMENTOS E FONTE DE PESQUISAS #
#------------------------------------------------------------------------
# SOBRE EDITOR CONFIG VIDEO: https://www.youtube.com/watch?v=duKqKhtZmPA
# DOCUMENTAÇÃO: EditorConfig is awesome: https://EditorConfig.org
# DOCUMENTAÇÃO: https://prettier.io/docs/en/install.html
#-------------------------------------------------------------------------
MENU="
-----------------------------------------
Instalação Projeto React Not Type Script
Configurações:
* Ambiente de Teste RTL;
* Prettier;
* Editor Config;
* EsLint;
-----------------------------------------
"

README(){

cat << EOF > README.md
<h3> Projeto:NOME DO PROJETO</h3>
<p>Breve Descirção sobre o Projeto</p>
<h4>Link Deploy:</h4>
<a href="#">Link Aplicação</a>
<h4> Link Apresentação das Funcionalidades implementadas no youtube</h4>
<a href="#">Ir Apresentação</a>
<h4>Especificações</h4>
<ol>
</ol>
<h4>O que será avaliado:</h4>
<ol>
    <li></li>
</ol>
![Nome do Projeto]()
#### Research Source:
<details>
<summary><strong>🔗 Links Importantes</strong></summary><br />
</details>
#### Rodar Projeto Localmente:
<details>
<summary><strong>🧞‍♂️ Resumo:</strong></summary><br />
<ul>
       <li>
            <h4>Baixe o projeto para sua máquina:</h4>
            <i> git clone git@github.com:tonistorres/mettzer-scientific-article.git</i>
      </li>
      <li>
            <h4>Acesse a pasta do projeto:</h4>
            <i> cd - caminho da pasta -</i>
      </li>
      <li>
            <h4>Dentro da pasta do projeto digite:</h4>
            <i>npm install</i>
      </li>
        <li>
            <h4>Apos instalar as dependências, rode o seguinte comando:</h4>
            <i>npm start</i>
      </li>
</ul>
</details>
#### Rodar  Testes Localmente:
<details>
<ul>
       <li>
            <h4>Baixe o projeto para sua máquina:</h4>
            <i> git clone git@github.com:tonistorres/mettzer-scientific-article.git</i>
      </li>
      <li>
            <h4>Acesse a pasta do projeto:</h4>
            <i> cd - caminho da pasta -</i>
      </li>
      <li>
            <h4>Dentro da pasta do projeto digite:</h4>
            <i>npm test</i>
      </li>
</ul>
</details>
EOF
}

REWRITING_PACKGE_JSON(){
pwd
cd
pwd
cd $HOME/app-finalizando
sed -i '21 i\    "lint": "eslint ./",' ./package.json
}

REWRITING_PACKGE_JSON

CREATE_PROJECT_REACT_NOT_TYPE_SCRIPT(){
echo --------------------------------------------------------
echo -e "\033[31m Deseja Criar um Projeto NPX \033[m"
read -p "s (SIM ) e n (NÃO) -->> " CONFIRM
echo --------------------------------------------------------
if [ "$CONFIRM" = s ];then
echo "$MENU_CREATE_PROJECT"
cd $HOME/nodeUnicRepository/backEndFolder1/
pwd
TIME
read -p "Digite o nome do projeto app-" PROJETO
npx create-react-app app-$PROJETO

DIR=$HOME/app-$PROJETO
if [ -d "$DIR" ]; then
cd app-$PROJETO
cd
cd $HOME/app-$PROJETO
README
GIT_IGNORE
else
echo "----------------------------------------"
echo "Houve algum erro com criação do template"
echo "           INSTALL CANCELED             "
echo "----------------------------------------"
fi
else
echo '------------------------------------------'
echo 'Você optou para não criar um projeto react'
echo '------------------------------------------'
TIME
echo 'Fim da execução'
fi
}

PREPARING_WORK_ENVIRONMENT(){
echo '------------------------------------------------------'
echo 'Antes de continuarmos verifique se tem a extensão do '
echo 'editor config instalado no seu VsCode.  '
echo '--------------------------------------------------------'
echo -e "\033[31m Caso tenha aperte s (SIM) e precione ENTER \033[m"
echo -e "\033[31m Caso contrario aperte n (NAO) e precione ENTER \033[m"
read -p "s (SIM ) e n (NÃO) -->> " CONFIRM
echo --------------------------------------------------------
if [ "$CONFIRM" = s ];then
CREATE_PROJECT_REACT_NOT_TYPE_SCRIPT

else
TIME
echo '--------------------------------------- '
echo 'Instale a extensão no vsCode e depois   '
echo 'execute o camando bash buildProject.sh  '
echo 'para iniciarmos o processo de instalação'
echo 'e configuração de um projeto NOT TS     '
echo '----------------------------------------'
fi
}


EXECUTE(){
TIME
echo "$MENU"
PREPARING_WORK_ENVIRONMENT
}


EXECUTE
