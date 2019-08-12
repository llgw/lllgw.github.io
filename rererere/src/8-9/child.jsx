import React, { Component } from 'react'
import store from './store'
export default class child extends Component {
    constructor(){
        super()
        // 1.获取仓库里的值
        this.state = store.getState()
        // 2.订阅，当仓库里发生改变的是时候，触发该方法
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div>
                <mark>子组件1</mark>
            {this.state.value}
            </div>
        )
    }
}
