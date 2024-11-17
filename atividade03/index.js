document.querySelector('.botao').addEventListener('click', async ()=>{
    const cepInput = document.querySelector('.campoText');
    const cep = cepInput.value;

    
    if (cep.length !== 8 || isNaN(cep)) {
        alert("CEP informado é inválido\nPor favor, insira um CEP válido com 8 números.");
        cepInput.value = '';
        return; 
    }

    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.querySelector('.infos').innerHTML = `
                    <p>logradouro: ${data.logradouro}</p>
                    <p>bairro: ${data.bairro}</p>
                    <p>cidade: ${data.localidade}</p>
                    <p>estado: ${data.uf}</p>
                `;
            } else  alert("CEP não encontrado!");
                
            
        })
        .catch(error => {
            alert("Erro ao consultar o CEP!"+error);
        })
        .finally(() => {
            cepInput.value = '';
        });
});