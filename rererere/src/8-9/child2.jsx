import React, { Component } from 'react'
import store from './store'
export default class child extends Component {
    constructor(){
        super()
        this.state=store.getState()
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div>
                <mark>子组件2</mark>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
