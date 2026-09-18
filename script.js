const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventeListener9("click", curtir);
function curtir(){
    const contador = botapCutir.querySelector("span");
    if(curtiu === false){
        contador.textContent++;
        curtiu = true;}
        else{
            contador.textContent--;
            curtiu = false;
        }
}
});
