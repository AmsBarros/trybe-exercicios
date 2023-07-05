const myFizzBuzz = require('./myFizzBuzz');

describe('Função myFizzBuzz', () => {
    it('retorna "fizzbuzz" caso num seja divísel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
    })
    it('retorna "fizz" caso num seja divisível apenas por 3', () => {
        expect(myFizzBuzz(3)).toBe("fizz");
    })
    it('retorna "buzz" caso num seja divisível apenas por 5', () => {
        expect(myFizzBuzz(10)).toBe("buzz");
    })
    it('retorna o próprio num caso num não seja divisível nem por 3 e nem por 5', () => {
        expect(myFizzBuzz(7)).toBe(7);
    })
    it('retorna "false" caso num não seja um número', () => {
        expect(myFizzBuzz('a')).toBe(false);
    })
})

describe('testa a função myFizzBuzz', () => {
    it('verifica se, de acordo com o parâmetro recebido, retorna o valor esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
      expect(myFizzBuzz(3)).toBe('fizz');
      expect(myFizzBuzz(5)).toBe('buzz');
      expect(myFizzBuzz(1)).toBe(1);
      expect(myFizzBuzz('2')).toBeFalsy();
    });
  });