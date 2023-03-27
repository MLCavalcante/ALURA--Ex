import app from "./src/app.js"

//quando subimos a app por um servidor que não é local colocamos a constante process.env.PORT para identificar
// que é a contante que vai idenficar porta que tá sendo escutada a requisiç que o servidor subiu ou a
// porta local onde o servidor "escuta" requisições // ex 3000 4000 8080 servidor local pode definir
// porta de ambiente de produção || porta fixa
const port = process.env.PORT || 3000 //27017 3000



app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

// server fica com uma funcionalidade definida que é só iniciar o servidor e ficar escutando requisições
// já o app tem as rotas