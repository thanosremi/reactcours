import React from 'react';

export class Bouton2 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>
            <button>{this.props.value}</button>
        </div>
        );
    }
}