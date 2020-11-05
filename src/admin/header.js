import React, {Component} from 'react'
import logo from "./image/logo-1.gif";
import logout from './icon/logout.png'
import csA from './Css/AddAdmin.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

function headertoggel(){
    const head = document.querySelector('#header')
    if (head.classList.contains('d-block')){
        head.classList.add('d-none')
        head.classList.remove('d-block')
    }else {
        head.classList.remove('d-none')
        head.classList.add('d-block')
    }
}

export default function Header() {
    return (
        <div className="row mr-0 ml-0">
            <div className="col-lg-2 col-12 ">
                <img src={logo} alt=" " className="w-100 h-100"/>
            </div>
            <div className="col-lg-10 px-5 pb-3 pb-lg-0 mt-2 mt-lg-0 px-lg-2 font-weight-bolder col-12 d-flex">
                <div className="d-flex d-lg-none justify-content-center align-items-center">
                    <p onClick={headertoggel} style={{cursor: "pointer"}} className="m-0">menu</p>
                </div>
                <div className="d-flex justify-content-end align-items-center w-100 logout">
                    <img src={logout} alt="" className="mx-2"/>
                    خروج
                </div>
            </div>
            <div id="header" className="col-12 mt-5 d-block d-lg-none">
                <header className="w-100 d-flex justify-content-center align-items-center">
                    <ul className={csA.headerul}>
                        <li>
                            <NavLink to="/adminpanel" activeClassName="activemenu">
                                پیشخوان
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/setting" activeClassName="activemenu">
                                تنظیمات
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/addadmin" activeClassName="activemenu">
                                ثبت مدیران
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/adminwork" activeClassName="activemenu">
                                مدیران
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Users" activeClassName="activemenu">
                                کاربران
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Customer" activeClassName="activemenu">
                                مشتریان
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Suppliers" activeClassName="activemenu">
                                تامین کنندگان
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Catgoryes" activeClassName="activemenu">
                                دسته بندی
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq" activeClassName="activemenu">
                                منو Header
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Productlist" activeClassName="activemenu">
                                محصولات
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/AddProduct" activeClassName="activemenu">
                                افزودن محصول
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Sells" activeClassName="activemenu">
                                کالا های فروخته شده
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Reference" activeClassName="activemenu">
                                کالا های برگشتی
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Transaction" activeClassName="activemenu">
                                تراکنش مالی
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Support" activeClassName="activemenu">
                                پشتیبانی
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/ConnectUs" activeClassName="activemenu">
                                ارتباط با ما
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Photography" activeClassName="activemenu">
                                درخواست عکاسی
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Questions" activeClassName="activemenu">
                                سوالات متداول
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/AddPage" activeClassName="activemenu">
                                برگه ها
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/firojahadmin/Footer" activeClassName="activemenu">
                                منو footer
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq" activeClassName="activemenu">
                                بک اپ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq" activeClassName="activemenu">
                                webmail
                            </NavLink>
                        </li>

                    </ul>
                </header>
            </div>
        </div>
    )
}