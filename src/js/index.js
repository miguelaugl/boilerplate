console.log('Teste...');

setTimeout(() => {
  console.log('Testando...');
}, 2000);

const variableTest = 'Testando variáveis...';

(async () => {
  await console.log('Testando o polyfill...');
})();
