# Benchmarking

## App Clique Escola
###  Funcionalidades de interesse

1. Apresentação de dados institucionais de escolas por gráficos e tabelas_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Como apresentado nos _Screenshots_ abaixo, a aplicação apresenta os dados das escolas organizados em gráficos e tabelas, de forma que, visualmente, a compreensão dos dados é facilitada. 

<p >
<img src="requirements_images\appgrafico1.jfif" height="400">
<img src="requirements_images\appgrafico2.jfif" height="400">
<img src="requirements_images\apptabela.jfif" height="400">
</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
São utilizados diferentes tipos de apresentações gráficas, adequadas aos diferentes tipos de dados sobre uma mesma escola. Por exemplo, é utilizado um gráfico de linhas para apresentar o desempenho da escola na _Prova Brasil_ ao decorrer dos anos, um gráfico de rosca para a porcentagem de alunos aprovados e uma tabela para indicação do número de estudantes por turma.

<br /> 

2.  Seleção de escolas a partir de filtros (Estado, Município ou Nome)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para selecionar a escola para a qual se deseja analisar os dados descritos no item anterior, a aplicação permite que as escolas sejam buscadas por um sistema de filtros que reduz a lista de escolas, apresentando somente as escolas do estado e/ou município indicado. Ainda, é possível refinar a busca selecionando o tipo de instituição ou digitando, parcialmente ou integralmente, o nome da escola no campo destinado.

<img src="requirements_images\appselecao.jfif" height="400">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O sistema também permite favoritar uma ou mais escolas, de forma que as escolas "curtidas" ficarão na página inicial, facilitando o acesso de um usuário que deseja revisitar os dados de determinada escola com frequência. No entanto, esse recurso é exclusivo para usuários logados.

<br />

3.  Apresentação de dados gerais por localidade

Na aba _Redes de Ensino_ é possível visualizar os dados gerais médios de todo o país ou de determinado estado ou município. O dado que deseja ser visualizado pode ser escolhido por meio de um menu suspenso com os atributos disponíveis.

<img src="requirements_images\appgeral.jfif" height="400">
<br />

### Pontos positivos
- Gráficos comparativos das escolas com as médias estaduais e nacionais.

- Gráficos comparativos com outros anos.

- sistema de filtros eficiente.

### Pontos negativos
- Frequentemente, há grande tempo de espera para carregamento dos dados e transição de páginas.

- Nos gráficos de linhas, não é possível ver exatamente qual o valor marcado pelos pontos.

- Funcionalidade de "favoritar" restrita a usuários logados.

