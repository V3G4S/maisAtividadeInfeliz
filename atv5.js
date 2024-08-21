
let pessoa = {
    nome: "João Silva",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        rua: "Rua das Flores, 123",
        cidade: "São Paulo",
        estado: "SP"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`
    }
}

console.log("Cidade do endereço:", pessoa.endereco.cidade)

pessoa.profissao = "Gerente de Projetos"
console.log("Objeto atualizado após mudança de profissão:", pessoa)

pessoa.telefone = "1234-5678"
console.log("Objeto atualizado após adicionar telefone:", pessoa)