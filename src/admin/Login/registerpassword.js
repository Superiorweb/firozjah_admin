import React, {Component} from 'react'
import bg from '../image/Sing In_ newspass.jpg'
import '../Css/login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export default class Registerpassword extends Component{
    render() {
        return(
            <div>
            <img style={{height:"100vh"}} className="w-100 position-absolute" alt=" " src={bg}/>
        <div style={{height:"100vh"}} className="d-flex w-100 justify-content-center align-items-center position-relative">
            <div className="cardforlogin">
                <p className="text-white mb-4 text-center">تغییر رمز عبور برای نام کاربری</p>
                <p className="text-white mb-4 text-center">mohamad_mobin</p>
                <input placeholder="رمز عبور جدید" type="text"/>
                <button className="py-2 mt-5 btn text-white">ورود</button>
                <p> رمز عبور خود را فراموش کرده اید ؟</p>
            </div>
        </div>
        </div>
        )
    }
}
