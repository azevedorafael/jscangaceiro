class Negociacao {

    constructor(_data, _quantidade, _valor) {

        // this._data = new Date(data.getTime());
        // this._quantidade = quantidade;
        // this._valor = valor;
        // código abaixo diminui o número de instruções, se comparado acima

        // Object.assign(this, {
        //     _data: new Date(data.getTime()),
        //     _quantidade,// =  _quantidade: _quantidade,
        //     _valor
        // });

        //código acima mais legível abaixo
        Object.assign(this, { _quantidade, _valor });
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    get data() {
        //programação defensiva contra mudanças indevidas na propriedade (mutabilidade)
        return new Date(this._data.getTime());
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this._quantidade * this._valor;
    }
}
