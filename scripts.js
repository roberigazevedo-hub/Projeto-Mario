/*
objectivo: Criar uma função que redirecione o usuário para o formulário de contato ao clicar no botão "Entre em contato".
1-QUAL BOTÃO CLICAR
2-QUAL FORMULÁRIO REDIRECIONAR
3- QUAL A MASCARA
4- O QUE MOSTRAR PARA O USUÁRIO
    
*/
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostraFormulario() {
    formulario.style.left = "55%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function escondeFormulario() {
    formulario.style.left = "-260px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}