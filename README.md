# Biblioteca - Extrair links de arquivo markdown/string

## Descrição
Implementa um módulo de Node.js que receba uma string (em formato Markdown) e extraia todos os links encontrados. A implementação é uma função que recebe uma string e devolve um vetor de objetos.

### Documentação
- [x] Função getLinksFromMd sendo string o texto que será analisado. A função irá retornar uma array de objetos com os links e os nomes dos mesmos.

#### Instalação
- É necessário ter o node + npm instalados. Para guia de instalação, visite o [site oficial](https://nodejs.org/en/download/).
- A seguir, instale $npm install cmg-url-of-string

##### Versão 1.0.0
1. Testes: A biblioteca será testada através da função getLinksFromMd()
- [x] Quando não houver parâmetro lançar um erro.
- [x] Quando o texto for um numero deve lançar um erro.
- [x] Quando o texto for uma string e não houver url deve retornar um array vazio.
- [x] Quando o texto for uma string e houver uma url deve retornar um array com o objeto com a url e o link do markdown.
- [x] Quando o texto for uma string e houver três urls diferentes deve retornar o objeto dentro do array.

2. README.md com
      - [x] descrição do módulo
      - [x] instruções de instalação
      - [x] instruções de uso
      - [x] documentação da API.
3. index.js:
      - [x] Biblioteca exportar uma função ou objeto no escopo global (window) e
      - [x] usa features de ES6 onde é apropriado.
4. package.json com
      - [x] nome,
      - [x] versão,
      - [x] descrição,
      - [x] autores,
      - [x] licença,
      - [x] dependências,
      - [x] scripts (pretest, test, ...)
5. test/index.spec.js: com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementado
      - [x] com Mocha
      - [] e NYC
6. .gitignore
      - [x] para ignorar node_modules ou outras pastas que não devem ser incluídas no controle de versões (git).
teste
7. .eslintrc
    - [x] com configuração para linter (com guia de estilo de JavaScript)
