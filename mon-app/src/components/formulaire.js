import React from 'react';

export class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            value: "Click on me"
        }
    }

    recupValeur(){
        const value = ""
        this.setState({
            value: this.props.value
        })
    }

    render(){
        return(
        <div>
            <input type="text" onChange={() => this.recupValeur()}/>
            <br/><br/>
            <input type="text" onChange={() => this.recupValeur()}/>
            <br/><br/>
            <input type="text" onChange={() => this.recupValeur()}/>
            <br/><br/>
            <input type="text" onChange={() => this.recupValeur()}/>
            <br/><br/>
            <button type="submit">Valider</button>
        </div>
        );
    }
}