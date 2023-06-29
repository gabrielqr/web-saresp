# web-saresp
Projeto para disciplina MC426

Aplicação Web com Dados de Rendimento Escolar de Escolas do Estado de SP (SARESP)

Todos os dados são disponibilizado publicamente na internet em diversos formatos:
* .csv - um arquivo por ano
* relatórios sobre todas as escolas - porém, quando entramos no site, vários relatórios já não são disponíveis, outros precisam de senha. E quando abrimos esses relatórios, eles não tem fácil visualização de dados que possam dar insights para a escola, ou para o secretário de educação municipal/estadual. 
* revistas eletrônicas - esses está em formato científico. Isto significa que não é tão inteligível aos não-estudiosos. 

A ideia do projeto é democratizar e facilitar a visualização desses dados, seja para tomadas de decisões de coordenadores escolares (professores, coordenadores, diretores, secretários da educação, etc) mas também para o público em geral, como pais e mães de alunos para por exemplo selecionar uma escola.

## Descrição da Arquitetura (Avaliação 4.1)

<img src="requirements_images\diagrama.png" height="470">

O estilo utilizado para a construção dessa arquitetura é baseada no Shared Repository. Como as funcionalidades do sistema são baseadas em manipulação e visualização de dados, a arquitetura consiste no conjunto de requisições da página Web ao Banco de Dados e atualização de informações ao mesmo Banco de dados pelo script acionado no GitHub Actions.

O programa, da forma que foi estruturado e devido às funcionalidades desejadas, tem sua maior parte computacional centrada no Front-End e não possibilitaria a divisão internamente em maiores subcomponentes a nível de código além destes apresentados. Por exemplo, a página Web, pela similaridade de todas as funcionalidades de apresentação de dados, é estruturada como componente único, sem subdivisões, e ainda, não há necessidade de outros componentes em um Back-End. Portanto, apesar diagrama acima não parecer propriamente um diagrama a nível de componentes do programa, mas sim da arquitetura geral, ele conta com todos as subunidades presentes.

Uma descrição textual dos componentes (GitHub e GitHub Actions, Firebase e Página Web) e suas responsabilidades e apresentada nos próprios blocos do diagrama.

