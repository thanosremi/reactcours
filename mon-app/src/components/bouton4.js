import React from 'react';

export class Bouton4 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>
            <button type={this.props.type}>Valider</button>
        </div>
        );
    }
}