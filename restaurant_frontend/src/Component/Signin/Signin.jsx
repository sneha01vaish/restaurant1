import React from 'react'
import style from "./signin.module.css"
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className={style.head}>
        <form className={style.form}>
            <h1>Signin</h1>
            <hr style={{height:"2px",width:"200px",border:"none",backgroundColor:"rgb(129, 192, 132)",marginTop:"10px"}}/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Signin</button>
            <button id={style.btn}><Link to={"/"} style={{color:"rgb(54, 83, 55)",textDecoration:"none",fontSize:"23px"}}>Register</Link></button>
        </form>
        </div >
    )
}

export default Signin