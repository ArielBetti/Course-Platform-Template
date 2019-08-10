$(document).ready((e) => {
    $("#btnmenu").mouseover((e) => {
        $("#anime").css("opacity", "1");
    });
    $("#btnmenu").mouseout((e) => { 
        $("#anime").css("opacity", "0");
    });
});

btnmenu.addEventListener('click', (e) => {
    btnmenu.classList.toggle("_arrowleft");
    menu.classList.toggle("_activemenu");
    iconmenu.classList.toggle("_rotation");
});

fechamenu.addEventListener('click', (e) => {
    btnmenu.classList.toggle("_arrowleft");
    menu.classList.toggle("_activemenu");
    iconmenu.classList.toggle("_rotation");
});

function next() {
    aula1.classList.add("_opacity");
    aula2.classList.add("_opacity");
    window.scrollTo(0, 0);
    setTimeout((e) => {
        aula2.classList.remove("_hideon");
        aula1.classList.add("_hideon");
        aula2.classList.remove("_opacity");
    }, 900);
}

function undo() {
    aula2.classList.add("_opacity");
    aula1.classList.add("_opacity");
    window.scrollTo(0, 0);
    setTimeout((e) => {
        aula1.classList.remove("_hideon");
        aula2.classList.add("_hideon");
        aula1.classList.remove("_opacity");
        window.scrollTo(0, 0);
    }, 900);
}

a1.addEventListener('click', (e) => {
    aula2.classList.add("_opacity");
    aula1.classList.remove("_opacity");
    window.scrollTo(0, 0);
    setTimeout((e) => {
        aula2.classList.add("_hideon");
        aula1.classList.remove("_hideon");
        aula2.classList.add("_opacity");
    }, 900);
});

a2.addEventListener('click', (e) => {
    aula2.classList.remove("_opacity");
    aula1.classList.add("_opacity");
    window.scrollTo(0, 0);
    setTimeout((e) => {
        aula2.classList.remove("_hideon");
        aula1.classList.add("_hideon");
        aula2.classList.remove("_opacity");
    }, 900);
});

function validarRespostas() {

    let total = 0;

    if (document.querySelector('input[name = questao1]:checked')) {
        if (document.querySelector('input[name = questao1]:checked').value == "op2") {
            total = total + 1;
        }
    }

    if (document.querySelector('input[name = questao2]:checked')) {
        if (document.querySelector('input[name = questao2]:checked').value == "op1") {
            total = total + 1;
        }
    }

    if (document.querySelector('input[name = questao3]:checked')) {
        if (document.querySelector('input[name = questao3]:checked').value == "op1") {
            total = total + 1;
        }
    }

    if (document.querySelector('input[name = questao4]:checked')) {
        if (document.querySelector('input[name = questao4]:checked').value == "op1") {
            total = total + 1;
        }
    }

    if (document.querySelector('input[name = questao5]:checked')) {
        if (document.querySelector('input[name = questao5]:checked').value == "op1") {
            total = total + 1;
        }
    }

    if (document.querySelector('input[name = questao6]:checked')) {
        if (document.querySelector('input[name = questao6]:checked').value == "op1") {
            total = total + 1;
        }
    }

    ptotal.innerText = "Você fez o total de " + total + " pontos";

    controle.classList.remove("_hideon");

}