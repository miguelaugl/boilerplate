# :card_file_box: **Boilerplate para projetos**

Este é um boilerplate criado principalmente para ser utilizado no meu ambiente de trabalho, pronto para lidar com novos projetos e projetos já iniciados.

### Funcionalidades

- [x] Minificação de arquivos _javascript, CSS e imagens;
- [x] Fileinclude HTML;
- [x] Transpilação do código javascript (babel);
- [x] Concatenação e autoprefixer (compatibilidade) do arquivo CSS;
- [x] Reload ao atualizar arquivos html, javascript ou css;
- [x] Cachebusting, isso é, o paramêtro de arquivos importados é sempre atualizado ao buildar, sem a necessidade de ficar atualizando manualmente;
- [x] Padronização do estilo utilizado no código por meio de lints, como prettier, eslint e editorconfig;

### Comandos

:sparkles: yarn - nesse projeto utilizamos o yarn, para que instale as dependências utilizadas rode este comando.

:rocket: yarn dev - esse comando inicia o projeto em modo de desenvolvimento por padrão na rota 3000 se a mesma não estiver sendo usada. Em modo de desenvolvimento, todas as mudanças nos arquivos serão observadas e compiladas. Link completo do ambiente: [http://localhost:3000](http://localhost:3000).

:fire: yarn build - comando que realiza todas as funcionalidades listadas, criando a pasta pronta para enviar para produção.

:construction_worker: yarn imagemin - minifica as imagens da pasta images dentro de src.

### Estrutura de pastas

A divisão de pastas desse boilerplate é feita da seguinte maneira: <br />
&nbsp;:seedling: |---src - nossa pasta raiz de desenvolvimento, é nela onde estão todas as outras pastas com seus correspondentes conteúdos brutos. <br />
&nbsp;&nbsp;:package: |---assets - comporta a pasta de imagens e a pasta de videos utilizadas no projeto.<br />
&nbsp;&nbsp;&nbsp;:card_file_box: |---images - armazena as imagens do projeto.<br />
&nbsp;&nbsp;&nbsp;:card_file_box: |---videos - armazena os videos do projeto.<br />
&nbsp;&nbsp;:mag: |---js - guarda todo nosso conteúdo de javascript.<br />
&nbsp;&nbsp;:pushpin: |---pages - onde ficam nossas páginas e a pasta de componentes (arquivos HTML).<br />
&nbsp;&nbsp;&nbsp;:pencil: |---components - os componentes de cada página, por exemplo: header.html/footer.html.<br />
&nbsp;&nbsp;:lipstick: |---scss - todo o conteúdo relacionado a sass ficam nessa pasta.<br />

Ao realizar o comando yarn build ou alterar o código em modo de desenvolvimento, obterá uma estrutura semelhante a src.<br />
&nbsp;:tada: |---build - nossa pasta disponível para subir para a produção, contendo todas as outras pastas necessárias e nossos páginas HTML com seus componentes incluídos.<br />
&nbsp;&nbsp;:package: |---assets - sem mudanças.<br />
&nbsp;&nbsp;:card_file_box: |--images - pode possuir a mesma estrutura ou as imagens estão minificadas se você usar o comando yarn imagemin após o comando yarn build.<br />
&nbsp;&nbsp;:card_file_box: |---video - sem mudanças.<br />
&nbsp;&nbsp;:mag: |---js - arquivos javascripts transpilados, minificados, comprimidos e com o sufixo min.<br />
&nbsp;&nbsp;:art: |---css - arquivo css, todo o código sass é compilado para css, minificado, autoprefixado, comprimido e adota o sufixo min.<br />
