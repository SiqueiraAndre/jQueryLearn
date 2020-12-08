$(function () {
    $(".jquery_essentials").html("jQuery Essentials!");

    console.group("Mensagens Gerais");
    console.log("jQuery Essentials");
    console.info("O jQuery foi carregado com sucesso!");
    console.warn("Um Alerta");
    console.error("Um  erro");
    console.groupEnd();

    var cadastro = false;

    console.group("Cadastro de usuário");
    console.info("Cadastro iniciado!");

    if(cadastro === true){
        console.log("Cadastro Realizado");
    } else {
        console.warn("Erro ao cadastrar")
    }

    console.assert(cadastro === true, "Cadastro Não Realizado");
    console.groupEnd();

});