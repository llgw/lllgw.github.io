import React, { Component } from 'react'
import './index.scss'
// import data from '../../json/index.json';
import imgd from './images/footer.png'
// import {NavLink , Route} from 'react-router-dom'
export default class Html extends Component {
    constructor(){
        super()
        this.state= {
            isblock:true,
            block:true,
            g:true
           

        }
    }
    onHandleChange = ({target}) =>{
        // console.log(target.name)
        // 赋值的时候用es6新特性
        this.setState({
            [target.name]: target.name === 'checkBox' ? target.checked : target.value
        })
    }
    
    bloackClick = ()=> {
      
        this.setState({
             isblock: !this.state.isblock,
             block:!this.state.block,
          
        })
        
      }
      bloackClick1 = ()=> {
      
        this.setState({
             isblock: !this.state.isblock,
             block:!this.state.block,
          
        })
        
      }
      bloackClick2 = ()=> {
      
        this.setState({
           
             g:!this.state.g
          
        })
        
      }
    render() {

        // const {arr} = data;

        return (
            <div className='s' >
                 
                <div className='flex' className={this.state.isblock ? 'block':' none'}>
                        <img src={ `${process.env.PUBLIC_URL}/zhihuimg/logo.png` } alt='book' />
                 <div  onClick={this.bloackClick}  className='sou' className={this.state.block ? 'sou':' sousou'}>

                            <div className='icon'> <i className='iconfont icon-search'></i></div>

                            <input type='text' onChange={this.onHandleChange} placeholder='搜索知乎内容'/>
                </div>
                    <img src={ `${process.env.PUBLIC_URL}/zhihuimg/xia.png` } alt='book' className='imgq'/>
                <div>
                        <ul className='ul'>
                            <li  onClick={this.bloackClick2}>
                            <img src={ `${process.env.PUBLIC_URL}/zhihuimg/sg.png` } alt='book' className='imgj'/>
                            </li>
                           <ul className='fa'>
                               {/* <NavLink to='/sou'> */}
                                    <li  className={this.state.g ? 'none':'ulul'}>
                                    <img src={ `${process.env.PUBLIC_URL}/zhihuimg/re.png` } alt='book' />
                                        <span>首页</span>
                                    </li>
                               {/* </NavLink> */}
                                {/* <NavLink to='self'> */}
                                    <li  className={this.state.g ? 'none':'ulul'}>
                                        <img src={ `${process.env.PUBLIC_URL}/zhihuimg/rx.png` } alt='book' />
                                        <span>我的主页</span>
                                    </li>
                                {/* </NavLink> */}
                                {/* <NavLink to='/bianji'> */}
                                        <li  className={this.state.g ? 'none':'ulul'}>
                                <img src={ `${process.env.PUBLIC_URL}/zhihuimg/sz.png` } alt='book' style={{marginLeft:'0px'}} />

                                        <div className='icon'> <i className='iconfont icon-ai240'></i></div>
                                        <span>腿粗账号</span>
                                    </li>
                                {/* </NavLink> */}
                            
                           </ul>

                        </ul>
                    </div>
                </div>


                <div className='flex yu'  className={this.state.block ? 'none':'block'} >
                     <div className='logo' onClick={this.bloackClick}>
                    <img src={ `${process.env.PUBLIC_URL}/zhihuimg/logo.png` } alt='book' />
                        </div>
                    <div  onClick={this.bloackClick1}  className='sousou'>

                            <div className='icon'> <i className='iconfont icon-search'></i></div>

                            <input type='text' placeholder='搜索知乎内容'/>
                    </div>

                    <div  onClick={this.bloackClick} className='nac'>取消搜索</div>


                    <div className='yuyu'>

                    <img  src={ `${process.env.PUBLIC_URL}/zhihuimg/热搜.png` } alt='book' />

                

                    </div>
                    
               
                </div>

                {/* 123 */}

                <div className='nei'>
                {/* {
                    arr.map((item,index) => {
                        return(
                            <div className='for' key={index}>
                            <div className='div1'>
                                <span className='span-l'>收藏了回答</span>
                                <span className='span-r'>{item.hours} 天前</span>
                            </div>
                            <p className='p'>{item.title}</p>
                            <div className='div2'>
                                <img src={imgd} alt=""/>
                                <span className='d2-s1'>{item.name}</span>
                                <span className='d2-s2'>{item.signature}</span>
                            </div>
                            <p className='p1'>{item.people}</p>
                            <div className='div3'>
                                {item.text} <span>App 内查看</span> 
                            </div>
                            <div className='div4'>
                                
                                <span className='z'>▲{item.agree}</span>
                                <span className='x'>▼</span>
                                <span className='l'>
                                   
                                    <span className='l2'>{item.mature}</span>
                                </span>
                               
                                <span className='f'>...</span>
                            </div>
                        </div>
                        )
                        
                    })
                   } */}
                </div>
               
                    
               

            </div>
        )
    }
}
