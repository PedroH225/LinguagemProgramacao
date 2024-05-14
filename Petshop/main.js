load = function() {
fetch('https://663c040617145c4d8c34f89e.mockapi.io/Animal')
    .then(response => response.json())
    .then(data => {
        data.forEach(dat => {
            console.log(dat);
            document.querySelector("#animal").innerHTML += `<div class="itens">${dat.Nome} , ${dat.Idade} , ${dat.Raca} </div><br>`;
        }
        )
    });
}

load();

let button = document.querySelector("button");

button.onclick = function() {
    fetch('https://663c040617145c4d8c34f89e.mockapi.io/Animal', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        "Nome": 'Totó',
        "Idade": 12,
        "Raca": "dog"
        })
        })
        .then(response => response.json())
        .then(data => document.querySelector("#animal").innerHTML +=  `<div class="itens">${data.Nome} , ${data.Idade} , ${data.Raca} </div><br>`)
        .catch(error => console.error('Erro:', error));
        
        
}





