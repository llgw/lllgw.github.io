// 1.默认值
const defaultState = {
    value:'来自store的一句话',
    htlm:''
}
// 2.创建一个纯函数 reducers
const reducer = (state=defaultState,action)=>{
    console.log(action)
    // 2.laction动作对象就是组件里使用dispatch方法传过来的
    switch(action.type){
        case 'changeValue':
            // 2.2尽管可以修改state值，但是这样回忆副作用，而且官方不提倡直接修改，因为state在官方定义里是只读的
            // 所有返回一个新的值，是开发规范，creatStore方法底层给我讲新旧值做了处理
            return  {value:action.value}
        case'changeHtml':
        // 我们的state是只读的，所以深拷贝一份去修改
        const newState = JSON.parse(JSON.stringify(state))
        newState.html=action.value
        return newState
    }
    // console.log(action)
    // 2.2返回一个默认值
    return state
}

// 3暴露出去
export default reducer