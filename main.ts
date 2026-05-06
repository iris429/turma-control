const tela = require("readline-sync")

function main() { 
	let loop = true

	while(loop) { 
	console.log("1 - Cadastrar aluno\n2 - Adicionar Notas\n 3 - Listar\n 0 - Sair") 
	const opção:string = tela.question("Deseja continuar? ")
	if(opção === "0") loop = false
	}
}

main() 




