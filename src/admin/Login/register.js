import React, {Component} from 'react'
import bg from '../image/Sing In_ recovery.jpg'
import '../Css/login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export default class Register extends Component{
    render() {
        return(
            <div>
                <img style={{height:"100vh"}} className="w-100 position-absolute" alt=" " src={bg}/>
                <div style={{height:"100vh"}} className="d-flex w-100 justify-content-center align-items-center position-relative">
                    <div className="cardforlogin">
                        <p className="text-white mb-4">متن نمونه</p>
                        <input placeholder="نام کاربری" type="text"/>
                        <input placeholder="ادرس ایمیل" type="email"/>
                        <Link to="/firojahadmin/Registerpass">
                        <button className="py-2 btnpasslog mt-5 btn text-white">ارسال صفحه بازیابی رمز عبور</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
