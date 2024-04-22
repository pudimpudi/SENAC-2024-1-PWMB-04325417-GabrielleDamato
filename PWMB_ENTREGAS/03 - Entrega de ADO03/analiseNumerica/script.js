let numeros = [];

function incluirNumero() {
  const inputNumero = document.getElementById('numero');
  const valor = parseInt(inputNumero.value);

  if (isNaN(valor) || valor < 1 || valor > 100 || numeros.includes(valor)) {
    alert("Número informado inválido (Deve ser entre 1 e 100 e não pode ser repetido).");
    return;
  }

  numeros.push(valor);

  const selectNumeros = document.getElementById('numerosSelecionados');
  const option = document.createElement('option');
  option.text = `Valor ${valor} adicionado`;
  selectNumeros.add(option);
}

function finalizar() {
  if (numeros.length === 0) {
    alert("Adicione valores antes de finalizar.");
    return;
  }

  const estatisticas = document.getElementById('estatisticas');
  estatisticas.innerHTML = `
    <p>Ao todo, temos ${numeros.length} elementos cadastrados.</p>
    <p>O maior valor informado foi ${Math.max(...numeros)}.</p>
    <p>O menor valor informado foi ${Math.min(...numeros)}.</p>
    <p>A soma dos valores é ${numeros.reduce((acc, curr) => acc + curr, 0)}.</p>
    <p>A média dos valores informados é ${numeros.reduce((acc, curr) => acc + curr, 0) / numeros.length}.</p>
  `;
}
