import React from 'react';

export class Button extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
    const { value, className, isDisabled } = this.props;
    return <input type="submit" className={className} disabled={isDisabled} value={value} />
    }
}