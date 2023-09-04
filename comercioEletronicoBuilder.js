class Roupa {
    constructor(tipo, tamanho, cor, preco) {
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.cor = cor;
        this.preco = preco;
        
    }
    mostrarDetalhes() {
        console.log(`Roupa ${this.tipo}, Tamanho ${this.tamanho}, Cor ${this.cor} Preço R$ ${this.preco}.`);
    }
}

class RoupaBuilder {
    constructor() {
        this.tipo = null;
        this.tamanho = null;
        this.cor = null;
        this.preco = null;
    }

    definirTipo(tipo) {
        this.tipo = tipo;
        return this;
    }

    definirTamanho(tamanho) {
        this.tamanho = tamanho;
        return this;
    }

    definirCor(cor) {
        this.cor = cor;
        return this;
    }

    definirPreco(preco) {
        this.preco = preco;
        return this;
    }

    construir() {
        return new Roupa(this.tipo, this.tamanho, this.cor, this.preco);
    }
}

// EXEMPLO DE USO

const builder = new RoupaBuilder();

const blusa = builder
    .definirTipo('Gola V')
    .definirTamanho('G')
    .definirCor('Preto')
    .definirPreco(129.99)
    .construir();

const calca = builder
    .definirTipo('jeans')
    .definirTamanho('42')
    .definirCor('branca')
    .definirPreco(89.99)
    .construir();

blusa.mostrarDetalhes();
calca.mostrarDetalhes();
