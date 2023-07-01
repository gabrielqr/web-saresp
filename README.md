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

O programa, da forma que foi estruturado e devido às funcionalidades desejadas, tem sua maior parte computacional centrada no Front-End e foi dividido internamente em dois componentes: um componente responsável pela obtenção de dados pela comunicação direta com a API do Firebase e outro componente responsável pela disposição desses dados na página Web. Ainda, para a funcionalidade de upload facilitado dos arquivos .csv ao banco de dados, é utilizada a ferramenta do GitHub Actions que terá seu _trigger_ assim que um novo CSV é adicionado ao repositório, acionando um script (_Uploader_) para filtrá-lo e adicioná-lo ao BD.

Uma descrição textual dos componentes (GitHub e GitHub Actions, Firebase, FirebaseAdapter e Apresentador) e suas responsabilidades também é apresentada nos próprios blocos do diagrama.

