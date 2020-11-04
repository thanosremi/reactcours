import React from 'react';

export class Input extends React.Component{
    constructor(props){
        super(props)
    }

    recupValeur(e){
        console.log(e.target.value)
    }

    render(){
        return(
        <div>
            <input type={this.props.type} onChange={(e) => this.recupValeur(e)}/>
        </div>
        );
    }
}