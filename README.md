# Test App

Bem-vindo! Esta é uma tediante aplicação de teste.

O que deverá ser feito: uma página principal contendo links de navegação e em
cada um uma barrinha de busca.

Você pode clonar este repositório como ponto de partida e modificá-lo para
atender ao que é pedido, ou pode começar do zero.

## Navegação

Na página principal deve existir uma navegação fixa contendo links para os três
arquivos Markdown.

Exemplo de como esses links de navegação poderiam ficar arranjados:

```
Markdown | América | Tipografia
```

Sinta-se livre pra estilizar essa navegação como quiser (horizontal, vertical,
você decide!).

Sinta-se livre pra usar qualquer fonte e cores (mas mantenha um nível de
contraste saudável entre cores).

Esses links vão levar para as páginas que mostram o código de um arquivo
Markdown correspondente (eles estão em `static/`).

Parta do princípio que os arquivos são fixos mas seu conteúdo poderia variar
caso alguém os editasse; ou seja, não é necessário gerar essa barra de navegação
dinamicamente conforme os arquivos presentes (é uma lista estática).

Não é necessário renderizar o arquivo em HTML (é suficiente colocar o arquivo
direto numa tag `<pre>`). Mas, novamente, fuja dos estilos básicos do navegador
e defina ao menos `font-family` para essa tag! (Escolha uma fonte monoespaçada
para isso.)

Exemplo de URL para uma página de um arquivo:

```
http://localhost:5173/tipografia
```

## Contagem de ocorrências

Deve existir um campo de busca na página de cada arquivo. Conforme o usuário
digita, deve haver um indicador que conta a quantidade de ocorrências da palavra
no texto do arquivo.

Exemplo ASCII art de como ficaria a barra de pesquisa e o contador de
ocorrências:

```
+-------------------------+
| Colombo                 | 3 ocorrências
+-------------------------+
```

O campo pode ficar antes do conteúdo do arquivo ou depois, tanto faz. Estilize o
campo.

A busca deve afetar a URL. Exemplo usando uma query string:

```
http://localhost:5173/america?q="Colombo"
```

Se o usuário entrar com essa URL de exemplo acima, a barra deve ser mostrada
preenchida com o texto e o indicador de ocorrências deve apresentar o número de
ocorrências.

Quando não há texto de busca o contador de ocorrências deve ser omitido.

Não precisa se preocupar com desempenho -- cada arquivo é pequeno. Basta olhar o
conteúdo deles "na marra".

## FAQ

- _posso usar Typescript?_: pode (faça as modificações necessárias).

- _posso usar JS Doc?_: pode (faça as modificações necessárias).

- _posso usar Svelte 5?_: pode (faça as modificações necessárias).

- _posso usar fontes (typefaces) do Google Fonts?_: pode.

- _posso usar SASS/LESS/Tailwind/Bootstrap/Normalize.css/reset/etc?_: não, só
  CSS puro, feito por você.

- _tab ou espaços?_: os arquivos default do SvelteKit são indentandos com tab,
  mas nos arquivos feitos por você tanto faz, basta ser consistente.

- _precisa se preocupar com tratamento de erros (404 e afins)?_: não.

- _precisa lintar os arquivos ou aderir a algum padrão?_: não, basta ser
  consistente.

- _precisa ter algum teste automatizado?_: não.

- _precisa se preocupar com desempenho de carregamento da página?_: não.

- _precisa se preocupar em mostrar "nenhuma ocorrência" vs "1 ocorrência" vs "N
  ocorrências"?_: não, basta observar que é necessário ocultar o contador de
  ocorrências quando não há texto na caixa de busca.

- _precisa se preocupar com maiúsculas/minúsculas ou formatação dentro do
  conteúdo do arquivo?_: não, basta buscar pelo texto literalmente.

## É isso!

Se você chegou até aqui sem dormir de tédio, parabêns! #   v o l t e r a - t e s t     
