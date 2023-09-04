class SaborPizza {
    constructor(sabor) {
        this.sabor = sabor;
    }
}

class BordaPizza {
    constructor(borda) {
        this.borda = borda;
    }
}

class BebidaPizza {
    constructor(bebida) {
        this.bebida = bebida;
    }
}

class SobremesaPizza {
    constructor(sobremesa) {
        this.sobremesa = sobremesa;
    }
}

class PizzaBuilder {
    constructor() {
        this.saborPizza = null;
        this.bordaPizza = null;
        this.bebidaPizza = null;
        this.sobremesaPizza = null;
    }

    adicionarSaborPizza(sabor) {
        this.saborPizza = new SaborPizza(sabor);
        return this;
    }

    adicionarBordaPizza(borda) {
        this.bordaPizza = new BordaPizza(borda);
        return this;
    }

    adicionarBebidaPizza(bebida) {
        this.bebidaPizza = new BebidaPizza(bebida);
        return this;
    }

    adicionarSobremesaPizza(sobremesa) {
        this.sobremesaPizza = new SobremesaPizza(sobremesa);
        return this;
    }

    pedido() {
        return new Pizza(this.saborPizza, this.bordaPizza, this.bebidaPizza, this.sobremesaPizza);
    }
}

class Pizza {
    constructor(saborPizza, bordaPizza, bebidaPizza, sobremesaPizza) {
        this.saborPizza = saborPizza;
        this.bordaPizza = bordaPizza;
        this.bebidaPizza = bebidaPizza;
        this.sobremesaPizza = sobremesaPizza;
    }

    mostrarDetalhes() {
        console.log(`Sabor da pizza ${this.saborPizza.sabor}, borda recheada no sabor de ${this.bordaPizza.borda}, bebida ${this.bebidaPizza.bebida} e sobremesa de ${this.sobremesaPizza.sobremesa}.`);
    }
}

// EXEMPLO DE USO

const builder = new PizzaBuilder();

const pizzaForno = builder
    .adicionarSaborPizza('4 queijos')
    .adicionarBordaPizza('Cheddar')
    .adicionarBebidaPizza('Refrigerante')
    .adicionarSobremesaPizza('Baby ninho')
    .pedido();

const pizzaGeladeira = builder
    .adicionarSaborPizza('calabresa')
    .adicionarBordaPizza('cream cheese')
    .adicionarBebidaPizza('Toddynho')
    .adicionarSobremesaPizza('torta de limão')
    .pedido();

pizzaForno.mostrarDetalhes();
pizzaGeladeira.mostrarDetalhes();
