# Benchmarking

Foi realizado um processo de _Benchmarking_ com os sistemas e aplicações descritas e avaliados abaixo, os quais possuem contexto e funcionalidades semelhantes ao objetivo do nosso projeto. Essa análise serviu como embasamento para a elicitação dos requisitos, a partir dos quais foram construídos Épicos e Histórias, listados e desenvolvidos nas _Issues_.

## App Clique Escola
###  Funcionalidades de interesse

1. Apresentação de dados institucionais de escolas por gráficos e tabelas

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



## Site [SARESP](https://saresp.fde.sp.gov.br/ConsultaRede.aspx?opc=1&tipo=Rede+Estadual)

### Funcionalidades de Interesse

1.  Busca por nome da escola seus dados do ano selecionado.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
O site possui uma caixa de seleção para escolher um ano e ao lado um barra para escrever o nome da escola que deseja buscar as informações. Ao escrever um nome de escola incompleto e buscar, a pesquisa retorna escolas que possuem a palavra buscada. A busca retorna uma tabela com um documento pdf.

<p >
<img src="requirements_images\buscasaresp.JPG">
<img src="requirements_images\buscasaresp1.JPG">
</p>

<br /> 

2.  Apresentação de dados através de gráficos e tabelas.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
O pdf apresenta os dados de maneira simples, com a ajuda de gráficos e tabelas, deixando assim a visualização dos dados mais intuitiva.  A página inicial dos pdfs contém dados sobre a SARESP, como percentual de participação das escolas e alunos. As páginas seguintes mostram dados da escola em questão, como níveis de proficiência, notas em matérias como Língua Portuguesa, Matemática e Ciências da Natureza, utilizando tabelas e com classificações explicadas anteriormente no próprio pdf. No final existem gráficos e tabelas de comparação da escola em questão com ela mesma em anos anteriores, além de projetar uma meta.

<p >
<img src="requirements_images\Catabelasaresp.JPG" height="400">
<img src="requirements_images\graficoadoniran.JPG" height="400">
<img src="requirements_images\graficoadoniran1.JPG" height="400">
</p>

<br />

### Pontos positivos:
- Os gráficos comparativos das escolas entre os anos em que participaram da SARESP, para ver a evolução da escola com o passar do tempo.
- Tabelas comparativas com as médias das escolas da região.
- Busca dos dados das escolas por ano.

### Pontos negativos:
- Possui uma “Busca por escola” na página de busca que não funciona, a pesquisa retorna vazia.
- A quantidade de dados apresentados, até mesmo dados repetidos, pode tornar um pouco confusa a experiência do usuário.
- Alguns gráficos e tabelas possuem espaços vazios e que poderiam não estar ali. Nos gráficos comparativos, mostram dados do 5° EF, 9° EF e 3° EM, porém nem sempre existem dados de alguns desses, então nos gráficos apresentados fica apenas um espaço em branco.
- Os gráficos ficam separados das tabelas, então alguns dados são apresentados em forma de tabela mais de uma vez para ajudar na leitura do gráfico, poluindo um pouco o documento e aumentando seu tamanho.

## [Raio-x das escolas](https://especiais.g1.globo.com/educacao/raio-x-das-escolas-do-brasil/)

### Funcionalidades de Interesse

1.  Filtros por cidade/estado/escola 

Para encontrar escolas, é obrigatório dizer o estado e a cidade para buscar escolas. A partir disso, é possível ter uma lista com todas as escolas ou buscar diretamente a escola que você quer (e ela encontra nomes similares do que você está buscando). 

<img src="requirements_images\filtro-estado-cidade.PNG" height="400">
<img src="requirements_images\todas-escolas.PNG" height="400">

2.  Gráficos que comparam uma escola com Cidade ou estado ou país

Após encontrar uma escola, para visualizar os dados de uma escola é necessáiro comparar a escola com parâmetros que são: Cidade, estado ou país. E tais parâmetros variam de ENEM, IDEB, Índices de Educação, Línguas e Infraestrutura.

<img src="requirements_images\exemplo-comparacao.PNG" height="400">

### Pontos positivos: 
- Site single-page, faz com que o usuário não precise dar muitos cliques para encontrar sua informação
- Fácil encontrar escolas
- Gráficos bem intuitivos e simples de se ler
- Comparações escola x cidade/estado/país é um padrão interessante

### Pontos negativos:
- Não é possível visualizar apenas os dados de uma escola, é sempre um comparativo e dependendo pode ter muita informação
- Alguns dados nunca estão presentes (como é o caso do ENEM) e mesmo assim o site mantém a opção para visualização dos dados.
- Não é possível comparar escola x escola


