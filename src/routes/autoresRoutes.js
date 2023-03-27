import express from "express"; // aqui se concentra os métodos que precisam ser chamados segundo suas rotas
import AutorController from "../controllers/autoresController.js";



const router = express.Router() // usar roteamento do express

router  // 2 parmans: pra essa rota se acontecer um get para /livros , acontece livros controller.listarlivros
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)
export default router