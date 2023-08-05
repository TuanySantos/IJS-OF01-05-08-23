const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

it('calcularValorPorHoraTest', () => {
    expect(calcularValorPorHora(1000)).toBe(6);
})

  