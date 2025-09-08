const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post ('/login', (req, res) =>{
    try {
        const {dadosUsuario} = req.body;
        console.log(dadosUsuario)

        if (dadosUsuario == true) {
            
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});