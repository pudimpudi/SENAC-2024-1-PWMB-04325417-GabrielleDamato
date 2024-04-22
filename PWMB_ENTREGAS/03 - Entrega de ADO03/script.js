
// Função para ser chamada quando a página é carregada
function carregar() {
    // Selecione o botão de verificar
    var btnVerificar = document.getElementById('btn-verificar');

    // Adicione um ouvinte de evento para o clique no botão
    btnVerificar.addEventListener('click', function() {
        // Obtém o ano de nascimento do input
        var anoNascimento = document.getElementById('ano-box').value;

        var idade = new Date().getFullYear() - parseInt(anoNascimento);
        var genero = document.querySelector('input[name="genero"]:checked').value;

        // Mensagem baseada na idade
        var mensagem = "";
        if (idade <= 10 && genero == "masculino" || genero == "feminino") {
            console.log("Gênero: $genero , com $idade anos de idade.");
            if (genero == masculino){
                imagemSrc = "img/menino.jpeg";
            } else {
                imagemSrc = "img/menina.jpg";
            }
        } else if (idade <= 25 && genero == "masculino" || genero == "feminino") {
            console.log("Gênero: $genero , com $idade anos de idade.");
            if (genero == masculino){
                imagemSrc = "img/adolmasc.png";
            } else {
                imagemSrc = "img/adolfem.png";
            }
        } else if (idade <= 60 && genero == "masculino" || genero == "feminino") {
            console.log("Gênero: $genero , com $idade anos de idade.");
            if (genero == masculino){
                imagemSrc = "img/adulmasc.png";
            } else {
                imagemSrc = "img/adulfem.png";
            }
        } else {
            console.log("Gênero: $genero , com $idade anos de idade.");
            if (genero == masculino){
                imagemSrc = "img/velmasc.png";
            } else {
                imagemSrc = "img/velfem.png";
            }
        }

        // Exibe a mensagem e foto
        document.getElementById('msg').textContent = mensagem;
        document.getElementById('imagem').src = imagemSrc;

        // Exibe a div da mensagem e da imagem
        document.getElementById('msg').style.display = "block";
        document.getElementById('foto').style.display = "block";
    });
}
