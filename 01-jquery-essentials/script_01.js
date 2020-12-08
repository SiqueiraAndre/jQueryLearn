// *** Forma Padrão de Inicializar o jQuery ***
// $(document).ready(function (){
//    $(".jquery_essentials").html("jQuery Iniado!")
// });

// *** Forma Padrão de Inicializar o jQuery Simplificada***
// $(function (){
//     $(".jquery_essentials").html("jQuery Iniciado Com Gatilho!");
// });

// *** Carregando Antes de Outra LIB ***
// jQuery(function ($) {
//     $(".jquery_essentials").html("jQuery antes de outra Lib!");
// })

// *** Carregando Depois de Outra LIB ***
// var $j = jQuery.noConflict();
// $j(document).ready(function () {
//     $j(".jquery_essentials").html("jQuery Depois de outra Lib!");
// });

$(function (){
    $(".jquery_essentials").html("jQuery Essentials!");
});

