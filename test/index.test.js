const pegaArquivo = require('../index');

const arraYResult = [
    {
        FileList : 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('pegaArquivo::', () => {
    it('deve ser uma funcao', () => {
        expect(typeof pegaArquivo).toBe('function');
    });

    it('deve retornar um array com resultados', async () => {
        const resultado = await pegaArquivo('/Users/glaudirschlemper/Desktop/curso/nodeJs/markDown/test/arquivos/arquivo.md')
        expect(resultado).toEqual(arraYResult);
    });

    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/Users/glaudirschlemper/Desktop/curso/nodeJs/markDown/test/arquivos/arquivo_semlinks.md');
        expect(resultado).toBe('Não há links');
    });
});