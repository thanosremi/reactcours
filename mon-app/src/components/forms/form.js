import React from 'react';
import {Input} from './input'
import {Button} from './button'
export class FormWrapper extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isDisabled: true
        }
    }

    inputReceivedData(e){
        console.log('toto')
        console.log(e)
    }

    render(){
        const {isDisabled} = this.state
        return (
        <form>
            <Input type="text" name="rechercher" placeholder="saisissez votre recherche..." className="recherche" onChange={(e) => this.inputReceivedData(e)}/>
            <Button value="valider" className="button" isDisabled={isDisabled} />
        </form>)
    }
}