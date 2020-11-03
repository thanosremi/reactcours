
import React from 'react';

export class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            value: "Click on me"
        }
    }

    recupValeur(event){
        console.log(event.target.value)
    }


    render(){
        return(
        <div>
            <input type="text" onChange={(event) => this.recupValeur(event)}/>
            <br/><br/>
            <button type="submit">Valider</button>
        </div>
        );
    }
}

const j = { 

}