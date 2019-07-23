import React, { Component } from 'react'

export default class Work extends Component {
    
    render() {
        {console.log('work props', this.props)}
        return (
            <div>
                <p>work component</p>
            </div>
        )
    }
}
