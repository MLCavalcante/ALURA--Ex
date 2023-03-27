import express from "express";    //redirecionamento ele vai checar aqui o caminho pra chegar no método que sera exec
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js";

//vai chegar uma instancia do proprio app
const routes = (app) => { //concentra as rotas usadas e quando for usada no app se passa os params
  app.route('/').get((req, res) => { // se chegar no caminho inicial '/' eu vou fazer um get
      res.status(200).send({titulo: "Curso de Node"}) // devolve resposta json com titulo curdo node
  })

  app.use( // usar outras rotas // usar rota de livros e indicar que trabalho com json
      express.json(),
      livros,
      autores
  )
}

export default routes