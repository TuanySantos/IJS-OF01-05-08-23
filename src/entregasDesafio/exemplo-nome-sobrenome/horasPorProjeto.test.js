const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')


it('calcularHorasDeProjetoTest', () => {
    expect(calcularHorasDeProjeto(['responsividade', 'ssr'])).toBe(24);
})
