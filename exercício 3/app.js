const express = require('express'); 
const app = express();
const PORT = 8081;

app.use(express.json());

app.post ('/login', (req, res) =>{
    try {
        const {dados} = req.body; // constante criada e atribuída para requisição do corpo da página em JSON
        console.log(dados);

        if (dados.usuario == "Raíssa" && dados.senha == "Issa1412") {
            res.status(201).json(`Olá ${dados.usuario}`) // se o usuário digitar o usuário e senha correto no JSON, respota 201(senha e usuários corretos)
        } else {
            res.status(401).json("Senha ou usuário incorretas, por favor tente novamente"); //senão, retorna como resposta de erro 401(usuário e/ou senha incorretos)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error); // servidor não conectado
    }
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});