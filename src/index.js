class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago")
            ataque = "magia"
        else if (this.tipo === "guerreiro")
            ataque = "espada"
        else if (this.tipo === "monge")
            ataque = "artes marciais"
        else if (this.tipo === "ninja")
            ataque = "shuriken"
        console.log("O " + this.tipo + " atacou usando " + ataque);
    }
}

let heroi1 = new Heroi("Amara", 20, "guerreiro");
let heroi2 = new Heroi("Anabel", 30, "mago");

heroi1.atacar();
heroi2.atacar();