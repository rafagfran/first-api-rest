import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {

    //quando se trabalha com requisições assíncronas (sem tempo determinado) é necessario indicar que a função é async e dizer para ela aguardar os dados com await
    async index(request, response){
        const result = await SelecaoRepository.findAll()
        response.json(result)
    }

    async show(request, response){
        const id = request.params.id;
        const result = await SelecaoRepository.findById(id)
        response.json(result)
    }

    async store(request, response) {
        const selecao = request.body;
        const result = await SelecaoRepository.create(selecao);
        response.json(result)
    
    }

    async update(request, response){
        const id = request.params.id
        const selecao = request.body;
        const result = await SelecaoRepository.update(selecao, id)
        response.json(result)
    }

    async delete(request, response){
        const id = request.params.id;
        const result = await SelecaoRepository.delete(id)
        response.json(result)
    }

}

//padrão Singleton
export default new SelecaoController()
