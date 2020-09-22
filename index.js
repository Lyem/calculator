var ultimo = 0;

function trataClick(content){
    let tela = document.getElementById("resp");
    if(tela.value == "undefined"){tela.value = null;}
    if(ultimo == '-' && content == '-');
    else if(ultimo == '*' && content == '*');
    else if(ultimo == '+' && content == '+');
    else if(ultimo == '/' && content == '/');
    else if (tela.value == ""){if(content == '-' | content == '+' | content == '*' | content == '/');else{tela.value += content;}}
    else{tela.value += content;}
    ultimo = content;
}

function limpa(){
    let tela = document.getElementById("resp");
    tela.value = null;
}

function calcular(){
    let tela = document.getElementById("resp");
    tela.value = eval(tela.value);
}