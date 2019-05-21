import React from 'react'

export default class ButtonLogin extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedin : false
        }
    }
   
    handleClick(){
        this.setState(prevState=>{
            isLoggedin : !prevState.isLoggedin
        })
    }

    render(){
        return(
            let buttontext = this.state.isLoggedin ? 'LOG IN' : 'LOG OUT';
            <div>
                 <button onClick={handleClick}>{buttontext}</button>
            </div>
        )
    }
}