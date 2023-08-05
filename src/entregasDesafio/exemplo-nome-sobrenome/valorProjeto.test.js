const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

it('calcularValorPorHoraTest', () => {
    expect(calcularValorTotalProjeto(['responsividade', 'ssr'], 120)).toBe(3168);
})