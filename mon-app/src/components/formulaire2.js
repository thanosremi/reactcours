import React from 'react';
import { Bouton4 } from './bouton4';
import { Input } from './input';

export class Form2 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>
            <Input type="text"/>
            <br/><br/>
            <Bouton4 type="submit"></Bouton4>
        </div>
        );
    }
}