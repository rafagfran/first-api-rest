import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'dbcopa'
})

connection.connect()

/**
 * Executa o código sql com ou sem valores
 * @param {String} sql instrução sql a ser executada
 * @param {String=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consult = (sql, valores='', mensagemReject) =>{
    return new Promise((resolve, reject) => {
        connection.query(sql, valores, (error, result) =>{
            if(error) return reject(mensagemReject)
            const convert = JSON.parse(JSON.stringify(result))
            return resolve(convert)
        })
    })
}

export default connection
