import React from 'react';

export class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            value: "Click on me"
        }
    }

    recupValeur(e){
        console.log(e.target.value)
    }

    render(){
        return(
        <div>
            <input type="text" onChange={(e) => this.recupValeur(e)}/>
            <br/><br/>
            <button type="submit">Valider</button>
        </div>
        );
    }
}