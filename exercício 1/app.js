const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());


app.post ('/mensagem', (req, res) =>{
    try {
        const {dados} = req.body; // constante criada e atribuída para requisição do corpo da página em JSON
        console.log(dados)
        res.status(201).json({message: `Olá ${dados.nome}, você tem ${dados.idade} e torce para o ${dados.time}!`}) // os dados enviados no corpo foram reconhecidos e retornou como 201(message)
    } catch (error) {
        console.log(error);
        res.status(500).json(error); // servidor não conectado
    }
})


app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});