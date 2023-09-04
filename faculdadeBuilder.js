class NomeEstudante {
    constructor(nome) {
        this.nome = nome;
    }
}

class MatriculaEstudante {
    constructor(matricula) {
        this.matricula = matricula;
    }
}

class IdadeEstudante {
    constructor(idade) {
        this.idade = idade;
    }
}

class CursoEstudante {
    constructor(curso) {
        this.curso = curso;
    }
}

class PeriodoEstudante {
    constructor(periodo) {
        this.periodo = periodo;
    }
}

class AlunoBuilder {
    constructor() {
        this.nomeEstudante = null;
        this.matriculaEstudante = null;
        this.idadeEstudante = null;
        this.cursoEstudante = null;
        this.periodoEstudante = null;
    }

    adicionarNomeEstudante(nome) {
        this.nomeEstudante = new NomeEstudante(nome);
        return this;
    }

    adicionarMatriculaEstudante(matricula) {
        this.matriculaEstudante = new MatriculaEstudante(matricula);
        return this;
    }

    adicionarIdadeEstudante(idade) {
        this.idadeEstudante = new IdadeEstudante(idade);
        return this;
    }

    adicionarCursoEstudante(curso) {
        this.cursoEstudante = new CursoEstudante(curso);
        return this;
    }

    adicionarPeriodoEstudante(periodo) {
        this.periodoEstudante = new PeriodoEstudante(periodo);
        return this;
    }

    matricular() {
        return new Aluno(this.nomeEstudante, this.matriculaEstudante, this.idadeEstudante, this.cursoEstudante, this.periodoEstudante);
    }
}

class Aluno {
    constructor(nomeEstudante, matriculaEstudante, idadeEstudante, cursoEstudante, periodoEstudante) {
        this.nomeEstudante = nomeEstudante;
        this.matriculaEstudante = matriculaEstudante;
        this.idadeEstudante = idadeEstudante;
        this.cursoEstudante = cursoEstudante;
        this.periodoEstudante = periodoEstudante;
    }

    mostrarDetalhes() {
        console.log(`Nome do aluno ${this.nomeEstudante.nome}, matrícula nº: ${this.matriculaEstudante.matricula}, idade: ${this.idadeEstudante.idade}, curso: ${this.cursoEstudante.curso}, período: ${this.periodoEstudante.periodo}.`);
    }
}

// EXEMPLO DE USO

const builder = new AlunoBuilder();

const alunoFatecDiadema = builder
    .adicionarNomeEstudante('Lucas')
    .adicionarMatriculaEstudante('228899675')
    .adicionarIdadeEstudante(22)
    .adicionarCursoEstudante('Cosméticos')
    .adicionarPeriodoEstudante('Noite')
    .matricular();

const alunoFatecZS = builder
    .adicionarNomeEstudante('Felipe')
    .adicionarMatriculaEstudante('55667799')
    .adicionarIdadeEstudante(23)
    .adicionarCursoEstudante('DSM')
    .adicionarPeriodoEstudante('Manhã')
    .matricular();

alunoFatecDiadema.mostrarDetalhes();
alunoFatecZS.mostrarDetalhes();

function processarAluno(nome, matricula, idade, curso, periodo) {
    // Aqui você pode usar a lógica do seu faculdadeBuilder.js para criar um aluno
    // e realizar qualquer processamento adicional necessário.

    // Por exemplo:
    const builder = new AlunoBuilder();

    const aluno = builder
        .adicionarNomeEstudante(nome)
        .adicionarMatriculaEstudante(matricula)
        .adicionarIdadeEstudante(idade)
        .adicionarCursoEstudante(curso)
        .adicionarPeriodoEstudante(periodo)
        .matricular();

    // Agora você pode fazer o que quiser com o objeto "aluno", como exibir informações ou enviá-lo para um servidor.

    // Exibir informações do aluno
    aluno.mostrarDetalhes();

    // Enviar o aluno para um servidor
    // ...

    // Limpar o formulário (opcional)
    document.getElementById("formularioAluno").reset();
}
