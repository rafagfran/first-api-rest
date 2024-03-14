import { consult } from "../database/connection.js"

class SelecaoRepository{
    //CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return consult(sql, selecao, 'Não foi possivel cadastarar')
    }

    findAll() {
        const sql = "SELECT * FROM selecoes"
        return consult(sql, 'Not found')
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?"
        return consult(sql, id,'Not found') 
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consult(sql, [selecao,id], 'error update')
    }

    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?"
        return consult(sql, id, 'Error delete')
    }
}

export default new SelecaoRepository();
