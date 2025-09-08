const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post ('/soma', (req, res) =>{
    try {
        const {dados} = req.body;
        console.log(dados)
        if (isNaN(dados.numUm) || dados.numUm == undefined || isNaN(dados.numDois) || dados.numDois == undefined || isNaN(dados.numTres) || dados.numTres == undefined ) {
            return res.status(400).send("Apenas números devem ser digitados!");
        }

        dados.resultado = Number(dados.numUm) + Number(dados.numDois) + Number(dados.numTres);

        res.status(201).json({message: `A soma dos dados é: ${dados.resultado} `});
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});