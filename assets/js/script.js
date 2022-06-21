class Pessoa {
    constructor(nome, sobrenome, dataDeNascimento, email, contato, telefone, cargo) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataDeNascimento = dataDeNascimento
        this.email = email
        this.contato = contato
        this.telefone = telefone
        this.cargo = cargo
    }
    
    static #cadastros = []

    static cadastro() {
        const nome = document.querySelector("#nome").value     
        const sobrenome = document.querySelector("#sobrenome").value
        const dataNascimento = document.querySelector("#dataNascimento").value 
        const email = document.querySelector("#email").value
        const contato = document.querySelector("#contato").value
        const telefone = document.querySelector("#telefone").value
        const cargo = document.querySelector("#cargo").value

        if (Pessoa.cadastros.some(pessoa.email))
        const novoCadastro = new Pessoa(nome, sobrenome, dataNascimento, email, contato, telefone, cargo)
        
        Pessoa.cadastros.push(novoCadastro)
        this.atualizaTotalDeCadastros()
    }

    static filtro(){
        const option = document.querySelector("#cargoOption")
        const pesquisar = document.querySelector("#btn")
        
        pesquisar.addEventListener("click", (e) => {

            if (option.value == "Aluno") {
                const lista = Pessoa.cadastros.filter(pessoa => pessoa.cargo == "Aluno")
                this.atualizaTotalDeCadastros(lista)
            }
            if (option.value == "Facilitador") {
                const lista = Pessoa.cadastros.filter(pessoa => pessoa.cargo == "Facilitador") 
                this.atualizaTotalDeCadastros(lista)
            }
            if (option.value == "Instrutor") {
                const lista = Pessoa.cadastros.filter(pessoa => pessoa.cargo == "Instrutor")
                this.atualizaTotalDeCadastros(lista)
            }
            if (option.value == "Todos") {this.atualizaTotalDeCadastros()}
        })

    }


    static atualizaTotalDeCadastros(lista=Pessoa.cadastros) {
        const ul = document.querySelector("#lista-de-cadastros")
        const total = document.querySelector("#total-alunos")
        
        total.innerText = lista.length
        ul.innerHTML = ""

        lista.forEach(element => {
            const li = document.createElement('li')
            
            li.addEventListener("dblclick", event => {event.target.remove() 
                lista.splice(lista.indexOf(element), 1)
                total.innerText = lista.length})

            li.innerText = `${element.nome} ${element.sobrenome} - ${element.cargo}`
            ul.appendChild(li)
        });
    }

    static get cadastros() {
        return this.#cadastros
    }

    static set cadastros(value) {
        return this.#cadastros.push(value)
    }   
}


document.querySelector("#register-button").addEventListener("click", event => {
    event.preventDefault()
    Pessoa.cadastro()
    Pessoa.filtro()
})
