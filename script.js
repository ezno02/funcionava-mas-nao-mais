function thanks(){

    let resposta = document.getElementById("sim")
    let texto = document.getElementById("h2Big")
    let nome = document.getElementById("inputNome").value

    if(resposta.checked === true){
        texto.innerHTML = "Muito obrigado por Responder "+ nome+ "!"
    } else{
        texto.innerHTML = "Va toma nucu disgrasa, para de mentir " + nome + "🤬"
    }
}
