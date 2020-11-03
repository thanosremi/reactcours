import React from 'react';

export class Bouton3 extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            value: "Click on me"
        }
    }

    handleClickButton(){
        const value = "clicked!"
        this.setState({
            value: value
        })
    }

    render(){
        return(
        <div>
            <button onClick={() => this.handleClickButton()}>{this.state.value}</button>
        </div>
        );
    }
}