import React, {Component} from 'react';
import csS from "../Css/AddAdmin.module.css";
import csSC from "../Css/Catgoryes.module.css";
import exel from '../icon/excel.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import refresh from "../icon/refresh.png";
import eye from "../icon/eye.png";
import cart from "../icon/shopping-cart.png";
import {NavLink} from "react-router-dom";


export default class AdminWork extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        مدیران | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                              مدیران
                        </h4>
                        <hr/>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-9">

                            <div className="row">
                                <div className="col-12 col-xl-6 mt-2 px-1">
                                    <button className="btn font-weight-bold btn-outline-success w-100">
                                        خروجی اکسل همه مدیران
                                        <img style={{width:"10%"}} className="mx-5" src={exel} alt=" "/>
                                    </button>
                                </div>
                                <div className="col-12 col-xl-6 mt-2 px-1">
                                    <button className="btn font-weight-bold btn-outline-success w-100">
                                        خروجی اکسل مدیران تأیید شده
                                        <img style={{width:"10%"}} className="mx-5" src={exel} alt=" "/>
                                    </button>
                                </div>
                                <div style={{paddingRight: "4px"}}  className="col-xl-3 col-sm-6 col-12 mt-2">
                                    <button className="btn d-flex justify-content-between align-items-center btn-outline-primary w-100">
                                        همه مدیران
                                        <span className="badge bg-white border text-dark">4</span>
                                    </button>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mt-2">
                                    <button className="btn d-flex justify-content-between align-items-center btn-outline-primary w-100">
                                        تأیید شده
                                        <span className="badge bg-white border text-dark">4</span>
                                    </button>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mt-2">
                                    <button className="btn d-flex justify-content-between align-items-center btn-outline-secondary w-100">
                                        در انتظار تأیید
                                        <span className="badge bg-white border text-dark">4</span>
                                    </button>
                                </div>
                                <div style={{paddingLeft: "4px"}}  className="col-xl-3 col-sm-6 col-12 mt-2">
                                    <button  className="btn d-flex justify-content-between align-items-center btn-outline-danger w-100">
                                        رد شده
                                        <span className="badge bg-white border text-dark">4</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-4">
                        <div className="col-md-6 col-12 align-items-center d-flex">
                            <label className="mx-2">
                                تعداد نمایش
                            </label>
                            <select className="form-control w-25" id="exampleFormControlSelect1">
                                <option selected disabled>30</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>

                        </div>
                        <div className="col-md-6 col-12 mt-2">
                            <div className={cspa.searchinput+" input-group mb-3 float-left"}>
                                <input type="text" className="form-control w-25" placeholder="جستجو"
                                       aria-label="Username"
                                       aria-describedby="basic-addon1"/>
                                <div className={cspa.inputappend+" input-group-prepend"}>
                                    <button className="btn btn-success w-100">
                                        <img src={search} className={cspa.iconsearch}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mr-0 ml-0">
                        <div className="table-responsive">
                            <table className="table table-light table-striped table-hover table-bordered table-responsive overflow-hidden">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ثبت‌کننده</th>
                                    <th scope="col">عملیات</th>
                                    <th scope="col"> وضعیت</th>
                                    <th scope="col">سطح دسترسی</th>
                                    <th scope="col">نام و نام خانوادگی</th>
                                    <th scope="col">نام پدر</th>
                                    <th scope="col">جنسیت</th>
                                    <th scope="col">وضعیت تأهل</th>
                                    <th scope="col">شماره ملی</th>
                                    <th scope="col">تلفن همراه</th>
                                    <th scope="col">تلفن ثابت</th>
                                    <th scope="col">ایمیل</th>
                                    <th scope="col">تاریخ تولد</th>
                                    <th scope="col">مدرک تحصیلی</th>
                                    <th scope="col">رشته تحصیلی</th>
                                    <th scope="col">ادرس</th>
                                    <th scope="col">کدپستی</th>
                                    <th scope="col">تاریخ ثبت</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className={csSC.tdrefrsh }>
                                        <a className={csSC.refreshbtn+" btn d-lg-flex btnrefresh"}>
                                            <img src={refresh} alt="" className={csSC.refreshicon}/>
                                            بررسی مجدد
                                        </a>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="/firojahadmin/addadmin">
                                        <a className="d-flex w-100 justify-content-center">
                                            <img src={eye} alt="" className="w-50"/>
                                        </a>
                                        </NavLink>
                                    </td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>

                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className={csSC.tdrefrsh }>
                                        <a className={csSC.refreshbtn+" btn d-lg-flex btnrefresh"}>
                                            <img src={refresh} alt="" className={csSC.refreshicon}/>
                                            بررسی مجدد
                                        </a>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="/firojahadmin/addadmin">
                                            <a className="d-flex w-100 justify-content-center">
                                                <img src={eye} alt="" className="w-50"/>
                                            </a>
                                        </NavLink>
                                    </td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>

                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className={csSC.tdrefrsh }>
                                        <a className={csSC.refreshbtn+" btn d-lg-flex btnrefresh"}>
                                            <img src={refresh} alt="" className={csSC.refreshicon}/>
                                            بررسی مجدد
                                        </a>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="/firojahadmin/addadmin">
                                            <a className="d-flex w-100 justify-content-center">
                                                <img src={eye} alt="" className="w-50"/>
                                            </a>
                                        </NavLink>
                                    </td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link bg-primary" href="#" aria-label="Previous">
                                        <span className="text-white" aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link border-0" href="#">1</a></li>
                                <li className="page-item"><a className="page-link border-0" href="#">2</a></li>
                                <li className="page-item"><a className="page-link border-0" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link bg-primary" href="#" aria-label="Next">
                                        <span className="text-white" aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
            </Dashboard>
        )
    }
}