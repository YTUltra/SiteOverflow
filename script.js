function atualizarSlider(){
    document.getElementById("LVGC").innerHTML = document.getElementById("SliderGC").value;
    document.getElementById("LVFI").innerHTML = document.getElementById("SliderFI").value;
}
function enviarFormulario(){
    var nome = document.getElementById("Nome").value;
    var email = document.getElementById("Email").value;
    var steam = document.getElementById("Steam").value;
    var funcao = document.getElementById("Funcao").value;
    var rankCS = document.getElementById("RankCS").value;
    var rankFI = document.getElementById("SliderFI").value;
    var rankGC = document.getElementById("SliderGC").value;
    if (nome && email && steam && funcao && rankCS && rankFI && rankGC) {
        fetch('http://localhost:3000/formulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                steam: steam,
                funcao: funcao,
                rankCS: rankCS,
                rankFI: rankFI,
                rankGC: rankGC
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Formulário enviado com sucesso!");
            } else {
                alert("Erro ao enviar o formulário.");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}