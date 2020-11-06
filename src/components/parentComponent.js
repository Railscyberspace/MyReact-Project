import React, { Component } from 'react'
import childComponent from './childComponent'

class parentComponent extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName)
    {
        alert(`Hello ${ this.state.parentName } from ${ childName }`)
    }
    render()
    {
        return (
            <div>
                <childComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default parentComponent
