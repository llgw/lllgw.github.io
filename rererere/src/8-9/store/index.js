// 1.引入创建仓库的方法
import {createStore} from 'redux'

// 2.引入reducers
import reducers from './reducers'

// 3.暴露出去
export default createStore(reducers)