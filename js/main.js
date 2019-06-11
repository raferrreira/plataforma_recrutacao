// toggle dropdown profile

$(".profile-tab a").click(function(){
	$(".profile-tab ul").toggle();
})

// confirmacao genero

$(".nao-permitido").click(function(){
	$(".nao-permitido-text").addClass("active");
})

$(".close-btn-text").click(function(){
	$(".nao-permitido-text").removeClass("active");
})
 
 

// modal abrir e fechar

$(".open-modal").click(function(){
	$("body").addClass("modal-open");
	$(".modal-avaliacao-bg").addClass("active");
})

$(".close-btn").click(function(){
	$("body").removeClass("modal-open");
	$(".modal-avaliacao-bg").removeClass("active");
})

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
    }, false);
})();