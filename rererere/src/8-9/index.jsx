import React, { Component } from 'react'
import Child1 from './child'
import Child2 from './child2'
import store from './store';
import Dompand from './domPand'
export default class Html extends Component {
    constructor(){
        super()
        this.state={
            value:''
        }
    }
    
    render() {
        const {value} = this.state
        return (
            <div>
                <Child1/>
                <Child2/>
                <input type="text" name='value' value={value}
                    onChange={({target})=>{
                        this.setState({
                            [target.name]:target.value
                        })
                        // 每次输入的时候就派发一个动作到仓库里
                        store.dispatch({
                             type:'changeHtml',
                             value:target.value
                         })
                    }}
                    
                />
                <button onClick={this.onSubmit}>提交</button>
                <Dompand/>
            </div>
        )
    }
    onSubmit=()=>{
        // action 动作，他就是告诉仓库，要干什么
        const action = {
            type:'changeValue',
            value:this.state.value
        }
        // dispatch派发我们的动作到仓库里
        store.dispatch(action)
    }
}