import React, { Component } from 'react'

export default class MyButtonClass extends Component {
    constructor(props) {
        super(props);
        this.state = {text:'some text'};
      }
    render() {
        return (
            <>
                <div>{this.state.text}</div>
                <button onClick={() => this.setState({text:'BUTTON'})}>
                    {this.props.children}
                </button>
            </>
        )
    }
}
