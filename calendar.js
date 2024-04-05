// Função para colorir o dia selecionado com a cor escolhida
function colorirDia() {
    var dia = parseInt(document.getElementById("day").value); // Obtém o valor do dia
    var color = document.getElementById("color").value; // Obtém a cor selecionada
    var calendar = document.getElementById("calendar");
    var tds = calendar.getElementsByTagName("td");
   
    // Verifica se o dia é válido
    if (isNaN(dia) || dia < 1 || dia > 30) {
        alert("Dia inválido! Por favor, insira um número de dia válido (entre 1 e 30).");
        return; // Encerra a execução da função se o dia for inválido
    }

    // Subtrai 1 do valor do dia porque os arrays em JavaScript começam com índice 0
    var index = dia - 1;

    // Verifica se o índice está dentro do intervalo válido
    if (index >= 0 && index < tds.length) {
        tds[index].style.backgroundColor = color; // Pinta o dia com a cor selecionada
    } else {
        alert('Dia selecionado está fora do intervalo válido.');

        // Função para colorir o dia selecionado com a cor escolhida
function colorirDia() {
    var dia = parseInt(document.getElementById("day").value); // Obtém o valor do dia
    var color = document.getElementById("color").value; // Obtém a cor selecionada
    var calendar = document.getElementById("calendar");
    var td = calendar.querySelector("td:nth-child(" + (dia + 1) + ")"); // Seleciona o td correspondente ao dia (adicionado +1 para corresponder ao índice do dia no calendário)

    // Verifica se o dia é válido
    if (isNaN(dia) || dia < 1 || dia > 30) {
        alert("Dia inválido! Por favor, insira um número de dia válido (entre 1 e 30).");
        return; // Encerra a execução da função se o dia for inválido
    }

    td.style.backgroundColor = color; // Altera o fundo do td para a cor selecionada
}
    }
}