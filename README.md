# Basement Quiz

Uma aplicação Quiz feita com Next.js, Styled Components and TypeScript.

## Início rápido

- Clone o projeto
- Rode ```npm i``` ou ```yarn``` dentro da pastas do projeto
- Rode ```yarn dev``` or ```npm dev```
- Umz vez executados os passos acima, está tudo pronto para usar a aplicação!

## Link do app em produção:
 https://basementquiz.vercel.app/


### Bonuses checklist

[ - ] - Atomic Design;  
[ x ] - Criação dos próprios componentes em detrimento de utilização de bibliotecas externas (ex: MUI);  
[ x ] - Utilização de React Hooks e Context API em detrimento de bibliotecas externas de gerenciamento de estados (ex: Redux, Recoil e Mobx);  
[ x ] - Utilização de SCSS ou Styled Components;  



### Seria impressionante
[ x ] -Utilização do Next.js;  
[ x ] - Testes automatizados;  
[ x ] - Utilização de ferramenta ESLint para padronização de código;  

      [-] = Partially done
      [X] = Done
      [] = Not done at all

# Nos bastidores:

Inicialmente, concentrei meus esforços em configurar o ambiente de desenvolvimento, que consiste de:

- Configurar projeto (Next JS)  
- Configurar ambiente de testes (Jest) e biblioteca de testes para o React (React Testing Library)  
- Configurar git hooks (Husky, lint-staged e @commitlint)  
- Configurar estilos globais (como por exemplo css reset) com Styled Components  
- Configurar o \_app.tsx page, que é um entrypoint customizado para aplicações Next.  
- Configurar Cypress.  
- Configurar jobs de CI/CD (GitHub Actions) no arquivo yml.  


Após a conclusão dos passos acima é que comecei a codificar de verdade. Comecei com a "documentação" dos tipos. Para isso, vi o que os endpoints retornavam e assim, criei os tipos deles, num arquivo de tipos global. Após isso, olhei para o protótipo e mentalizei quais telas precisaria codificar, e como elas trocariam dados entre si. 

Logo de cara, identifiquei que o que mudava, era basicamente o conteúdo na parte de dentro da página, mas a página em si, não mudava, logo, não precisava de sistema de rotas. Olhando com mais calma, também descartei o uso de ```Context API``` ou gerenciadores de estado, e o motivo disso é que o fluxo é relativamente simples, tudo o que precisei foi criar callbacks no componente filho (por exemplo, InitialStep), para que quando o usuário interagisse com a UI, ele mandar os dados para o componente pai (index.tsx), que recebe esses dados, e a partir disso, guia o usuário pelas telas e faz a troca de dados entre elas. Com isso em mente, criei o que seriam as 3 etapas da aplicação: 

  - 1: Etapa inicial (InitialStep.tsx) - Onde o usuário inicia o jogo, colocando seu nome e escolhendo o tipo de pergunta.
  - 2: Etapa de perguntas (QuestionsStep.tsx) - Onde o usuário interage com as perguntas do tipo que ele selecionou na etapa inicial. Aqui, o usuário manda vários dados para o backend, e obtém a resposta quase que instantaneamente, e a aplicação já renderiza se ele acertou a questão ou não.
  - 3: Etapa de resultado (ResultStep.tsx) - Onde o usuário vê um componente CircularProgress, contendo seus acertos, a abaixo, um rating de sua performance, onde foi utilizado FontAwesome para a renderização das estrelas.

Uma vez criados o scaffold das etapas, foquei em construir uma função que criasse uma instância do axios e disponibilizar isso para que seja consumida pelos componentes. Aqui, pensei em deixar bem flexível, deixando a cargo do componente injetar os dados necessários.

Então, adicionei vários componentes feitos com Styled Components, para compor a UI. Fiz também um arquivo que armazena os media queries, que é bem fácil de se extender e dar manutenção, por se tratar de um objeto com várias strings que descrevem os possíveis tamanhos de displays.

Por fim, fui atacando cada passo individualmente, uma vez que os esboços já estavam feitos, implementei os passos, onde no fim, os componentes sempre mandam um callback para o componente pai, que é notificado, e imediatamente, recebe esses dados, injeta esses dados como props para o componente do passo seguinte, e então, renderiza o componente da próxima etapa.

Espero que tenham gostado ;)

#####Italo Chagas - Front End Technical Leader
