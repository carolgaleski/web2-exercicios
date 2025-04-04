interface IPessoa {
    nome: string;
    readonly endereço: string;
}

abstract class Funcionario implements IPessoa{
    nome: string;
    readonly endereço: string;
    matricula: number;

    constructor(nome: string, endereço: string, matricula: number) {
        this.nome = nome;
        this.endereço = endereço;
        this.matricula = matricula;
    }

    abstract departamento(): void;
    abstract get salario(): number;
    abstract mostrar(): string;
}

class Gerente extends Funcionario {
    constructor(matricula: number, nome: string, endereço: string) {
        super(nome, endereço, matricula);
    }

    departamento(): void {
        console.log("Departamento: Gerência");
    }

    get salario(): number {
        return 5000.0;
    }

    mostrar(): string {
        return `Gerente - Nome: ${this.nome}, Matricula: ${this.matricula}, Endereço: ${this.endereço}, Salário: ${this.salario}`;
    }
}

class Analista extends Funcionario {
    senioridade: string;

    constructor(matricula: number, senioridade: string, nome: string, endereço: string) {
        super (nome, endereço, matricula);
        this.senioridade = senioridade;
    }

    departamento(): void {
        console.log("Departamento: Analista")
    }

    get salario(): number {
        switch (this.senioridade.toLowerCase()) {
            case "sênior": return 4000.0;
            case "pleno": return 3000.0;
            default: return 2500.0;
        }
    }

    mostrar(): string {
        return `Analista (${this.senioridade}) - Nome: ${this.nome}, Matricula: ${this.matricula}, Endereço: ${this.endereço}, Salário: ${this.salario}`;
    }
}


//para funcionar certinho com DOM

document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("form-funcionario") as HTMLFormElement;
const nomeInput = document.getElementById("nome") as HTMLInputElement;
const enderecoInput = document.getElementById("endereço") as HTMLInputElement;
const matriculaInput = document.getElementById("matricula") as HTMLInputElement;
const cargoInput = document.getElementById("cargo") as HTMLSelectElement;
const senioridadeInput = document.getElementById("senioridade") as HTMLInputElement;
const campoSenioridade = document.getElementById("campo-senioridade") as HTMLDivElement;
const lista = document.getElementById("lista-funcionarios") as HTMLUListElement;

    cargoInput.addEventListener("change", () => {
        if (cargoInput.value === "analista") {
            campoSenioridade.style.display = "block";
        }
        
        else {
            campoSenioridade.style.display = "none";
        }
    });


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const endereço = (document.getElementById("endereço") as HTMLInputElement).value;
        const matricula = parseInt((document.getElementById("matricula") as HTMLInputElement).value);
        const cargo = cargoInput.value;
        const senioridade = (document.getElementById("senioridade") as HTMLInputElement).value;

        let funcionario: Funcionario;

        if(cargo === "gerente") {
            funcionario = new Gerente(matricula, nome, endereço); 
        }

        else {
            funcionario = new Analista(matricula, senioridade, nome, endereço);
        }

        const item = document.createElement("li");
        item.textContent = funcionario.mostrar();
        lista.appendChild(item);

        form.reset();
        campoSenioridade.style.display = "none";
} );
});