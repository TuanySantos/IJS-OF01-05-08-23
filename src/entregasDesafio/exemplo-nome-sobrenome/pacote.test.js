const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')


it('calcularPacoteTest', () => {
    expect(calcularPacote(120)).toEqual('pacote_premium');
})
