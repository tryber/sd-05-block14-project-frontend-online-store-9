import React, { Component } from 'react';

export default class Pesquisa extends Component {
    constructor() {
        super()
        this.state={
            searchText:'',
        };
        this.newDate = this.newData.bind(this); 
        this.selctItem = this.selctItem.bind(this);
    }


    newData(element) {
        const { name, value } = element.target;
        this.setState({ [name]: value });
    }

    busca() {
        return (
            <div>
                <input 
                    data-testid="home-initial-message"
                    placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
                    name="searchTest"
                    tipe="text"
                    value={this.state.searchText}
                    onChange={this.newData} 
                >
                </input>
            </div>
        )
    }

    selctItem() {
        const onClick = this.props.onClick;
        onClick(this.state);
    }

    botao() {
        return (
        <button 
        data-testid="query-button"
        className="lupa"
        type="button"
        onClick={this.selctItem}
        >
        Pesquisar
        </button>
        )
    }

    render() {
        return (
            <div>
                {this.busca()}
                {this.botao()}
            </div>
        )
    }
}
