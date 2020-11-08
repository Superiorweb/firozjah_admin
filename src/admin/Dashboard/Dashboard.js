import React, {Component} from 'react';
import csd from "../Css/Dashboard.module.css"
import dashboardimg from '../icon/shop.png'

// ایکون ها
import pishkhan from '../icon/pishkhan.png'
import setting from '../icon/setting.png'
import kalahayfrokh from '../icon/kalahaye forokhte shode.png'
import addamin from '../icon/manager.png'
import admin from '../icon/management.png'
import user from '../icon/manager.png'
import customer from '../icon/customer.png'
import tamin from '../icon/shop.png'
import menu from '../icon/add.png'
import adds from '../icon/add (1).png'
import trakonesh from '../icon/tarakonesh.png'
import profiles from '../icon/virayeshe profile.png'
import products from '../icon/product.png'
import shop from '../icon/shopping-cart.png'
import rejected from '../icon/rejected.png'
import connectus from '../icon/information.png'
import camera from '../icon/camera.png'
import email from '../icon/email.png'
import page from '../icon/files.png'
import database from '../icon/backup.png'
import footer from '../icon/footer.png'
import seeweb from '../icon/web-search-engine.png'
import support from '../icon/customer-service.png'
import logo from '../image/logo-1.gif'

import '../Css/global.css'
import Index from "../index";
import Setting from "../Setting/Setting";
import AddAdmin from "../AddAdmin/AddAdmin";
import AdminWork from "../AddAdmin/AdminWork";
import Users from "../AddAdmin/Users";
import UserSetting from "../AddAdmin/UserSetting";
import Customer from "../Customer/Customer";
import Suppliers from "../Customer/Suppliers";
import Catgoryes from "../Catgoryes/Catgoryes";
import Subcategory from "../Catgoryes/Subcategory";
import AddProduct from "../Catgoryes/AddProduct";
import Item from "../Catgoryes/Item";
import Productlist from "../products/Productlist";
import Sells from "../products/Sells";
import Reference from "../products/Reference";
import Transaction from "../products/transaction";
import Support from "../Support/Support";
import Tickets from "../Support/Tickets";
import ConnectUs from "../Support/ConnectUs";
import Photography from "../Support/Photography";
import Questions from "../Support/Questions";
import AddPage from "../Sheets/AddPage";
import AddSheets from "../Sheets/AddSheets";
import Footer from "../Footer/Footer";
import Header from "../header";
import {BrowserRouter as Router, Link, NavLink, Route} from "react-router-dom";
import {Switch} from "react-router";


export default class Dashboard extends Component {

    render() {
        return (
<section>
    <Header/>
    <div className="row mr-0 ml-0">
        <div className="col-md-2 px-0 col d-md-block d-none">
            <hr className="m-0 mb-3" />
            <NavLink to="/adminpanel" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={pishkhan} alt=""/>
                <a className="w-75 pr-3 pl-2">
                        پیشخوان
                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/setting" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={setting} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        تنظیمات

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/addadmin" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={addamin} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        ثبت مدیران

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/adminwork" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={admin} alt=""/>
                <a className="w-75 pr-3 pl-2">

                          مدیران

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Users" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={user} alt=""/>
                <a className="w-75 pr-3 pl-2">

                       کاربران

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Customer" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={customer} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        مشتریان

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Suppliers" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={shop} alt=""/>
                <a className="w-75 pr-3 pl-2">

                    تأمین‌کنندگان


                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Catgoryes" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={adds} alt=""/>
                <a className="w-75 pr-3 pl-2">

                    دسته‌بندی‌ها

                </a>
            </div>
            </NavLink>
            <NavLink to="/x" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={menu} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        منو Header

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Productlist" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={products} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        محصولات

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/AddProduct" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={customer} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        افزودن محصول

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Sells" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={kalahayfrokh} alt=""/>
                <a className="w-75 pr-3 pl-2">

                    کالاھای فروخته شده

                </a>
                <div className="badge bg-success rounded-pill">
                    5656
                </div>
            </div>
            </NavLink>

            <NavLink to="/firojahadmin/Reference" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={rejected} alt=""/>
                <a className="w-75 pr-3 pl-2">
                    کالاھای برگشتی
                </a>
            </div>
            </NavLink>

            <NavLink to="/firojahadmin/Daryafti" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={trakonesh} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        تراکنش مالی

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Support" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={support} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        پشتیبانی

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/ConnectUs" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={connectus} alt=""/>
                <a className="w-75 pr-3 pl-2">

                        ارتباط با ما

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Photography" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={camera} alt=""/>
                <a className="w-75 pr-3 pl-2">

                       درخواست عکاسی

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Questions" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={customer} alt=""/>
                <a className="w-75 pr-3 pl-2">

                     سوالات متداول

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/UserSetting" activeClassName="activemenu">
                <div className={csd.menuitem + " menuitemsright"}>
                    <img src={profiles} alt=""/>
                    <a className="w-75 pr-3 pl-2">

                        ویرایش پروفایل

                    </a>
                </div>
            </NavLink>
            <NavLink to="/firojahadmin/AddPage" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={page} alt=""/>
                <a className="w-75 pr-3 pl-2">

                    برگه‌ها

                </a>
            </div>
            </NavLink>
            <NavLink to="/firojahadmin/Footer" activeClassName="activemenu">
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={footer} alt=""/>
                <a className="w-75 pr-3 pl-2">

                       منو footer

                </a>
            </div>
            </NavLink>
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={database} alt=""/>
                <a className="w-75 pr-3 pl-2">
                    <a href="https://firozjah.com:2082/" >
                        بک‌آپ
                    </a>
                </a>
            </div>
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={email} alt=""/>
                <a className="w-75 pr-3 pl-2">
                    <a href="https://firozjah.com:2095/">
                       webmail
                    </a>
                </a>
            </div>
            <div className={csd.menuitem + " menuitemsright"}>
                <img src={seeweb} alt=""/>
                <a className="w-75 pr-3 pl-2">
                    <NavLink to="/faq" activeClassName="activemenu">
                        مشاهده وب‌سايت
                    </NavLink>
                </a>
            </div>

        </div>
        <div style={{background: "#b5dafc",overflow:"hidden"}} className="col-md-10 p-0 col-12">

            {this.props.children}

            {/* <Index/>*/}
            {/* <Setting/>*/}
            {/*</Switch>*/}
            {/*<AddAdmin/>*/}
            {/*<AdminWork/>*/}
            {/*<Users/>*/}
            {/*<UserSetting/>*/}
            {/*<Catgoryes/>*/}
            {/*<Suppliers/>*/}
            {/*<Subcategory/>*/}
            {/*<Customer/>*/}
            {/*<AddProduct/>*/}
            {/*<Item/>*/}
            {/*<Productlist/>*/}
            {/*<Sells/>*/}
            {/*<Reference/>*/}
            {/*<Transaction/>*/}
            {/*<Support/>*/}
            {/*<Tickets/>*/}
            {/*<ConnectUs/>*/}
            {/*<Photography/>*/}
            {/*<Questions/>*/}
            {/*<AddSheets/>*/}
            {/*<Footer/>*/}
            {/*<AddPage/>*/}
        </div>
    </div>
</section>

        )
    }

}
