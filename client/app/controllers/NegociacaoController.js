class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        // cancela a submissão do formulário
        event.preventDefault();

        // let data = new Date(this._inputData.value.split('-'));
        //mesma soluçõa usando spread operator
        // let data = converter.paraData(this._inputData.value);
        // console.log(this._inputData.value);

        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        let	diaMesAno	=	DateConverter.paraTexto(negociacao.data);
        console.log(diaMesAno);

    }
}