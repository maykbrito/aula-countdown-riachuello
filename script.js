// Tenho que fazer uma contagem regressiva

// data do lançamento: 11/03/2022
const dataDoLancamento = new Date(2022, 02, 11)

// Variáveis: ms = milissegundos
const segundoEmMs = 1000
const minutoEmMs = segundoEmMs * 60
const horaEmMs = minutoEmMs * 60
const diaEmMs = horaEmMs * 24

// Funcionalidade
function fazerContagemRegressiva() {
  const diaDeHoje = new Date()

  const tempoRestanteParaOLancamentoEmMs = dataDoLancamento - diaDeHoje

  // converter milissegundos para o seu respectivo tempo
  const dias = String(Math.floor(tempoRestanteParaOLancamentoEmMs / diaEmMs))
  const horas = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % diaEmMs) / horaEmMs)
  )
  const minutos = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % horaEmMs) / minutoEmMs)
  )
  const segundos = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % minutoEmMs) / segundoEmMs)
  )

  document.querySelector('div').textContent = `${dias} dias ${horas.padStart(
    2,
    '0'
  )}:${minutos.padStart(2, '0')}:${segundos.padStart(2, '0')}`
}

setInterval(fazerContagemRegressiva, 1000)
