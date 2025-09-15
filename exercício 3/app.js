const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post ('/login', (req, res) =>{
    try {
        const {dados} = req.body;
        console.log(dados)

        if (dados.usuario == "Raíssa" && dados.senha == "Issa1412") {
            res.status(201).json(`Olá ${dados.usuario}`)
        } else {
            res.status(401).json("Senha ou usuário incorretas, por favor tente novamente")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});