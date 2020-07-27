import React, { Component } from 'react'
import Search from './Search'

export default class List extends Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({ searchText: event.target.value})
    }   

    render() {
        return (
            <div>
                <Search onClick={this.onClick}/>
            </div>
        )
    }
}
