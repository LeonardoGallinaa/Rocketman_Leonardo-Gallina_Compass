// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não Divisível por 3 e 5 => Entrada
// Não é um número => "Não é um número"

const resultado = fizzbuzz(11);
console.log(resultado);

function fizzbuzz(entrada){
    if ( typeof entrada != 'number')
        return 'Não é um número';
    if ( entrada % 3 === 0 && entrada % 5 === 0 )
        return 'fizzbuzz';
    if ( entrada % 3 === 0 )
        return 'fizz';
    if ( entrada % 5 === 0 )
        return 'buzz';
    
    return entrada;
}