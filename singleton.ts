const Sequelize = require('sequelize');

class SistemaSeguranca {
    senha: string;

    constructor(senha: string) {
        this.senha = senha;
        this.db = new Sequelize('techrepair', 'root', senha, { host: "localhost", dialect: "mysql" });
    }
    acessarBaseSecreta(): void {
        this.db.authenticate().then(function () {
            console.log("SENHA CORRETA, ACESSO CONCEDIDO!!!");
        }).catch(function () {
            console.log("ACESSO NEGADO!");
        })
    }
}

var suaSenha = '654321G'

var base = new SistemaSeguranca(suaSenha);
base.acessarBaseSecreta();