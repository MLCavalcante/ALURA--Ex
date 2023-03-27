import express from "express"; // aqui se concentra os métodos que precisam ser chamados segundo suas rotas
import LivrosController from "../controllers/livrosController.js";
import livrosController from "../controllers/livrosController.js";

const router = express.Router() // usar roteamento do express

 router  // 2 parmans: pra essa rota se acontecer um get para /livros , acontece livros controller.listarlivros
     .get('/livros', LivrosController.listarLivros)
     .get('/livros/busca', LivrosController.listarLivrosPorEditora)// essa busca precisa vir antes da busca por id
     .get('/livros/:id', LivrosController.listarLivrosPorId)
     .post("/livros", LivrosController.cadastrarLivros)
     .put("/livros/:id", LivrosController.atualizarLivros)
     .delete("/livros/:id", LivrosControll er.excluirLivros)

 export default router