# **Boilerplate**

Este é um boilerplate criado principalmente para ser utilizado no meu ambiente de trabalho, pronto para lidar com novos projetos e projetos já iniciados.

## Funcionalidades
- [x] Minificação de arquivos javascript, CSS e imagens;
- [x] Fileinclude HTML;
- [x] Transpilação do código javascript (babel);
- [x] Concatenação e autoprefixer (compatibilidade) do arquivo CSS;
- [x] Reload ao atualizar arquivos html, javascript ou css;
- [x] Cachebusting, isso é, o paramêtro de arquivos importados é sempre atualizado ao buildar, sem a necessidade de ficar atualizando manualmente;
- [x] Padronização do estilo utilizado no código por meio de lints, como prettier, eslint e editorconfig;

## Comandos
yarn - nesse projeto utilizamos o yarn, para que instale as dependências utilizadas rode este comando.

yarn dev - esse comando inicia o projeto em modo de desenvolvimento por padrão na rota 3000 se a mesma não estiver sendo usada. Em modo de desenvolvimento, todas as mudanças nos arquivos serão observadas e compiladas. Link completo do ambiente: [http://localhost:3000](http://localhost:3000).

yarn build - comando que realiza todas as funcionalidades listadas, criando a pasta pronta para enviar para produção.

yarn imagemin - minifica as imagens da pasta src.
