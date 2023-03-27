import livros from "../models/Livro.js";
//na parte de controlador se define a implementação do método... qual metodo
class livroController { //métodos organizados

    static listarLivros = (req, res) => {
        livros.find()
            .populate("autor")
            .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivros = (req,res) => {
        let livro= new livros(req.body)    //criar um novo modelo de livro de acordo com o que veio na quequisição

        livro.save((err)=>{ //o que vai acontecer caso erro no banco
            if (err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }


        })

    }

    static atualizarLivros = (req,res) => {
        const id = req.params.id // quando queremos obter algo passado pelo endereço da rota usamos params
        livros.findByIdAndUpdate(id,{$set: req.body},(err) => { // definimos o id que vai atuazar o que vai ser subtituido e erro
         if(!err){
             res.status(200).send({message:`Livro foi atualizado com sucesso`})
         }else{
           res.status(500).send({message: err.message})
         }

        })
    }

    static excluirLivros = (req, res) => {
        const id =req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `Livro excluído com sucesso!`})
            }else {
                res.status(500).send({message:err.message})
            }
        })
    }

    static listarLivrosPorEditora = (req,res) => {
        const editora = req.query.editora

        livros.find({'editora':editora}, {}, (err,livros) => {
         res.status(200).send(livros)
        })
    }



}

export default livroController