//EFEITOS NA PARTE DO SOBRE

const txt = document.getElementsByClassName("txt_sobreposto")
txt[0].addEventListener ("mouseenter",texto1)
txt[1].addEventListener ("mouseenter",texto2)

const imagem1 = document.getElementById("img01")
imagem1.addEventListener ("mouseenter", texto1)
imagem1.addEventListener ("mouseout", sair1)

const imagem2 = document.getElementById("img02")
imagem2.addEventListener ("mouseenter", texto2)
imagem2.addEventListener ("mouseout", sair2)

function texto1(){
    txt[0].style.opacity = '1';
    txt[0].style.visibility = 'visible';
}

function texto2(){
    const txt = document.getElementsByClassName("txt_sobreposto")
    txt[1].style.opacity = '1';
    txt[1].style.visibility = 'visible';
}

function sair1(){
    const txt = document.getElementsByClassName("txt_sobreposto")
    txt[0].style.opacity = '0';
    txt[0].style.visibility = 'hidden';
}

function sair2(){
    const txt = document.getElementsByClassName("txt_sobreposto")
    txt[1].style.opacity = '0';
    txt[1].style.visibility = 'hidden';
}

//EFEITOS NA PARTE DOS SERVIÇOS

const texto = document.getElementsByClassName("txtFlu")

texto[0].addEventListener ("mouseenter", entrar01)
texto[1].addEventListener ("mouseenter", entrar02)
texto[2].addEventListener ("mouseenter", entrar03)

const img = document.getElementsByClassName("luta")

img[0].addEventListener ("mouseenter", entrar01)
img[0].addEventListener ("mouseout", esconder01)

img[1].addEventListener ("mouseenter", entrar02)
img[1].addEventListener ("mouseout", esconder02)

img[2].addEventListener ("mouseenter", entrar03)
img[2].addEventListener ("mouseout", esconder03)

function entrar01() {
    texto[0].style.opacity = '1';
    texto[0].style.visibility = 'visible';
    img[0].style.width = "400px";
    img[0].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.42)";
}

function entrar02(){
    texto[1].style.opacity = '1';
    texto[1].style.visibility = 'visible';
    img[1].style.width = "400px"
    img[1].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.42)";
}

function entrar03(){
    texto[2].style.opacity = '1';
    texto[2].style.visibility = 'visible';
    img[2].style.width = "400px"
    img[2].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.42)";
}

function esconder01(){
    texto[0].style.opacity = '0';
    texto[0].style.visibility = 'hidden';
    img[0].style.width = "250px"
    img[0].style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.267)";
}

function esconder02(){
    texto[1].style.opacity = '0';
    texto[1].style.visibility = 'hidden';
    img[1].style.width = "250px"
    img[1].style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.267)";
}

function esconder03(){
    texto[2].style.opacity = '0';
    texto[2].style.visibility = 'hidden';
    img[2].style.width = "250px"
    img[2].style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.267)";
}