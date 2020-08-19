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
  <p style="margin-left: 1rem">:seedling: |---src - nossa pasta raiz de desenvolvimento, é nela onde estão todas as outras pastas com seus correspondentes conteúdos brutos.<p>
    <p style="margin-left: 2rem">:package: |---assets - comporta a pasta de imagens e a pasta de videos utilizadas no projeto.</p>
      <p style="margin-left: 3rem">:card_file_box: |---images - armazena as imagens do projeto.</p>
      <p style="margin-left: 3rem">:card_file_box: |---videos - armazena os videos do projeto.</p>
    <p style="margin-left: 2rem">:mag: |---js - guarda todo nosso conteúdo de javascript.</p>
    <p style="margin-left: 2rem">:pushpin: |---pages - onde ficam nossas páginas e a pasta de componentes (arquivos HTML).</p>
      <p style="margin-left: 3rem">:pencil: |---components - os componentes de cada página, por exemplo: header.html/footer.html.</p>
    <p style="margin-left: 2rem">:lipstick: |---scss - todo o conteúdo relacionado a sass ficam nessa pasta.</p>

Ao realizar o comando yarn build ou alterar o código em modo de desenvolvimento, obterá uma estrutura semelhante a src. <br />
  <p style="margin-left: 1rem">:tada: |---build - nossa pasta disponível para subir para a produção, contendo todas as outras pastas necessárias e nossos páginas HTML com seus componentes incluídos.</p>
    <p style="margin-left: 2rem">:package: |---assets - sem mudanças.</p>
      <p style="margin-left: 3rem">:card_file_box: |--images - pode possuir a mesma estrutura ou as imagens estão minificadas se você usar o comando yarn imagemin após o comando yarn build.</p>
      <p style="margin-left: 3rem">:card_file_box: |---video - sem mudanças.</p>
    <p style="margin-left: 2rem">:mag: |---js - arquivos javascripts transpilados, minificados, comprimidos e com o sufixo min.</p>
    <p style="margin-left: 2rem">:art: |---css - arquivo css, todo o código sass é compilado para css, minificado, autoprefixado, comprimido e adota o sufixo min.</p>
