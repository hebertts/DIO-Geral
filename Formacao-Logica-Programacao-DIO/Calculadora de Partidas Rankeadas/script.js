const Players = {"JoãoMatador": [20,50],
				"Vitor122": [500,300],
                "Caetando Velozo": [100,20],
                "João do Petroleo":[20,9],
                "Joviano":[99,9]
                
};
for(const player in Players){
    let score = Players[player][0]-Players[player][1]; 
    let elo = ranking(score); 
	console.log(`O Héroi: ${player} tem o saldo de ${score}, está no elo ${elo}`);
};
function ranking(score){
    let elo = score <= 10 ? "Ferro":
    score <= 20 ? "Brnze":
    score <= 50 ? "Prata":
    score <= 80 ? "Ouro":
    score <= 90 ? "Diamante":
    score <= 100 ? "Lendário":
    "Imortal";
	return  elo
};

