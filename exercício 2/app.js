const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post ('/soma', (req, res) =>{
    try {
        const {dados} = req.body; // constante criada e atribuída para requisição do corpo da página em JSON
        console.log(dados)
        if (isNaN(dados.numUm) || dados.numUm == undefined || isNaN(dados.numDois) || dados.numDois == undefined || isNaN(dados.numTres) || dados.numTres == undefined ) { // verificação de números, se realmente números foram digitados
            return res.status(400).send("Apenas números devem ser digitados!");
        }

        dados.resultado = Number(dados.numUm) + Number(dados.numDois) + Number(dados.numTres); // os dados da JSON são atribuídos à uma soma, juntando todos os números digitados e criando um resultado

        res.status(201).json({message: `A soma dos dados é: ${dados.resultado} `}); // resposta do resultado da soma, retorno 201(a soma foi um sucesso!)
    } catch (error) {
        console.log(error);
        res.status(500).json(error); // servidor não conectado
    }
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});