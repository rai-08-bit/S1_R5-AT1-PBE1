const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());


app.post ('/mensagem', (req, res) =>{
    try {
        const {dados} = req.body;
        console.log(dados)
        res.status(201).json({message: `Olá ${dados.nome}, você tem ${dados.idade} e torce para o ${dados.time}!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});