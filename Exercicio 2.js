// Velocidade máxima de até 70km/h
// A cada 5km acima do permitido recebe 1 ponto na carteira
// Pontos recebidos maior que 12 => "Carteira suspensa".
// Função Math.floor = Arredondamento do número.

verificarVelocidade(180);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima )
        console.log('OK');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto ));
        if ( pontos >= 12)
        console.log('Carteira Suspensa');
        else{
            console.log('Pontos',pontos);
        }
    }
}