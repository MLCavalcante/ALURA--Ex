import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

// criar conexão e  metodo on p saber se está funcionando
//caso aconteça algum erro poderemos ver pelo console
db.on("error", console.log.bind(console,"erro de conexão" )) // mostra msg de erro console paralela a do banco
 //abrir conexão once  
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')  
})

const app = express()   // subir um servidor e ver as rotas acontecendo

app.use(express.json()) //recurso do express para interpretar o que chega via post/put
//// e tranformar num obj p sera visualizado e manipulado aqui
routes(app)



//para outro arquivo utilizar esse arquivo é preciso exportar o arquivo para o uso no server
export default app // incluir linha  "type": "module" no json pra sinalzar o trabalho com import export



//get é a operação por trás da requisição de prencher endereço no navegador
// o que eu quero que aconteça quando eu faço uma requisição para determinada rota:
// req, res = parâmtros de requisição e resposta