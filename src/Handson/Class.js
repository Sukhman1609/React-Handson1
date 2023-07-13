import React, { Component } from "react";
import "../App.css"
class Class extends Component{
    render(){
        return(
            <>
            <div className='class'>
        <h1>This is created using Class Based Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
            </>
        )
    }
}
export default Class;