import assert from 'assert'
import chai from 'chai'
import calculadora from '../src/calculadora.js'

const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando e, 9', () =>{
        let resultando = calculadora.soma(4, 5)
        expect(resultando).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () =>{
        let resultando = calculadora.soma(-4, 5)
        expect(resultando).to.be.eq(1)
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () =>{
        let resultando = calculadora.sub(4, 5)
        expect(resultando).to.be.eq(-1)
    })
})