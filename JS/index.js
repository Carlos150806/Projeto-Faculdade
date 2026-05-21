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
    txt[0].style.display = "block"
}

function texto2(){
    const txt = document.getElementsByClassName("txt_sobreposto")
    txt[1].style.display = "block"
}

function sair1(){
    const txt = document.getElementsByClassName("txt_sobreposto")
    txt[0].style.display = "none"
}

function sair2(){
    const txt = document.getElementsByClassName("txt_sobreposto")
    txt[1].style.display = "none"
}