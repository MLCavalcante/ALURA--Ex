import autores from "../models/Autor.js";
//na parte de controlador se define a implementação do método... qual metodo
class AutorController { //métodos organizados

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do autor não localizado.`})
            }else{
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor = (req,res) => {
        let autor= new autores(req.body)    //criar um novo modelo de autor de acordo com o que veio na quequisição

        autor.save((err)=>{ //o que vai acontecer caso erro no banco
            if (err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }


        })

    }

    static atualizarAutor = (req,res) => {
        const id = req.params.id // quando queremos obter algo passado pelo endereço da rota usamos params
        autores.findByIdAndUpdate(id,{$set: req.body},(err) => { // definimos o id que vai atuazar o que vai ser subtituido e erro
            if(!err){
                res.status(200).send({message:`Autor foi atualizado com sucesso`})
            }else{
                res.status(500).send({message: err.message})
            }

        })
    }

    static excluirAutor = (req, res) => {
        const id =req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `Autor excluído com sucesso!`})
            }else {
                res.status(500).send({message:err.message})
            }
        })
    }



}

export default AutorController