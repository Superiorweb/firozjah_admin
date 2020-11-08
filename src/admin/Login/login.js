import React, {Component} from 'react'
import bg from '../image/Sing In.jpg'
import '../Css/login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export default class Login extends Component{
    render() {
        return(
            <div>
                <img style={{height:"100vh"}} className="w-100 position-absolute" alt=" " src={bg}/>
                <div style={{height:"100vh"}} className="d-flex w-100 justify-content-center align-items-center position-relative">
                    <div className="cardforlogin">
                        {/*<p className="text-white mb-4">متن نمونه</p>*/}
                        <input placeholder="نام کاربری" type="text"/>
                        <input placeholder="رمز عبور" type="email"/>
                        <button className="py-2 mt-5 btn text-white">ورود</button>
                        <Link to="/firojahadmin/Register">
                        <p className="text-white text-center w-100 mt-3"> رمز عبور خود را فراموش کرده اید ؟</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
