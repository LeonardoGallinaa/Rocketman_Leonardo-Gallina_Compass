import assert from 'assert'
import chai from 'chai'

const expect = chai.expect

describe('Meu primeiro teste', () => {
    it('Verificar a variavel aux', () => {
        let aux = 2
        //assert.strictEqual(aux, 2)
        expect(aux).to.be.equals(2).and.to.be.a('number')
    })
    it('Verificar outra igualdade', () => {
        let aux = 'carro'
        //assert.strictEqual(aux, 'carro')
        expect(aux).to.be.equals('carro').and.to.be.a('charrete')
    })
})