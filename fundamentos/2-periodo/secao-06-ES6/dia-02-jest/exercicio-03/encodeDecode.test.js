const {encode, decode} = require('./encodeDecode');

describe('Funções encode e decode', () => {
    it('encode é uma função', () => {
      expect(typeof encode).toEqual('function');
    });
    it('converte apenas a vogal "a" no número 1', () => {
      expect(encode('amanda')).toBe('1m1nd1'); // '1m1nd1' tem que ser string pq a função retorna string? Inicialmente seria só 'a' toBe 1, mas teve que mudar pra '1'. 
    });
    it('converte a vogal "e" no número 2', () => {
      expect(encode('nerd')).toEqual('n2rd'); // 1 O fato de estar escrevendo palavras com outras consoantes, já atende ao requisito "Teste se as demais letras e os demais números não são convertidos para cada caso"?
    });
    it('converte a vogal "i" no número 3', () => {
      expect(encode('Bird')).toEqual('B3rd');
    });
    it('converte a vogal "o" no número 4', () => {
      expect(encode('book')).toEqual('b44k');
    });
    it('converte a vogal "u" no número 5', () => {
      expect(encode('course')).toEqual('c45rs2'); // 2 requisito "Teste se as demais letras e os demais números não são convertidos para cada caso"
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(encode('string').length).toEqual(6);
    });
  
    it('decode é uma função', () => {
      expect(typeof decode).toEqual('function');
    });
    it('converte apenas o número 1 na vogal a', () => {
      expect(decode('1m1nd1')).toBe('amanda');
    });
    it('converte apenas o número 2 na vogal e', () => {
      expect(decode('s2rv2r')).toBe('server');
    });
    it('converte apenas o número 3 na vogal i', () => {
      expect(decode('sh3rt')).toEqual('shirt');
    });
    it('converte apenas o número 4 na vogal o', () => {
      expect(decode('D4g')).toEqual('Dog');
    });
    it('converte apenas o número 5 na vogal u', () => {
      expect(decode('5niversity')).toEqual('university'); // 2 requisito "Teste se as demais letras e os demais números não são convertidos para cada caso" Pq aqui funciona e em cima não?
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(decode('string').length).toEqual(6);
    });
  });