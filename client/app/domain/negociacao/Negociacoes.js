class Negociacoes {

    constructor() {
        this._negociacoes = [];
    }

    get volumeTotal() {
        // return this._negociacoes
        //     .reduce(function (total, negociacao) {
        //         return total + negociacao.volume
        //     }, 0);
        return this._negociacoes
            .reduce((total, negociacao) =>
                total + negociacao.volume, 0);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray() {
        return [].concat(this._negociacoes);
    }
}