import React, {Component} from 'react';
import csS from "../Css/Catgoryes.module.css";
import exel from '../icon/excel.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import refresh from "../icon/refresh.png";
import user from '../icon/manager.png'
import contact from '../icon/contract.png'
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";

export default class Suppliers extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        تأمين‌کنندگان | فروشگاه اینترنتی فیروزجاه

                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            تأمین‌کنندگان
                        </h4>
                        <hr/>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-9">

                            <div className="row">
                                <div className="col-12 col-xl-6 mt-2 px-1">
                                    <button className="btn d-flex justify-content-between align-items-center font-weight-bold btn-outline-success w-100">
                                        خروجی اکسل قرارداد حقیقی
                                        <img style={{width:"10%"}} className="mx-5" src={exel} alt=" "/>
                                    </button>
                                </div>
                                <div className="col-12 col-xl-6 mt-2 px-1">
                                    <button className="btn d-flex justify-content-between align-items-center font-weight-bold btn-outline-success w-100">
                                        خروجی اکسل قرارداد حقیقی
                                        <img style={{width:"10%"}} className="mx-5" src={exel} alt=" "/>
                                    </button>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mt-2">
                                    <button className="btn d-flex justify-content-between align-items-center btn-outline-primary w-100">
                                        تمامی قراردادها
                                        <span className="badge bg-white border  text-dark">4</span>
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
                                <div className="col-xl-3 col-sm-6 col-12 mt-2">
                                    <button className="btn d-flex justify-content-between align-items-center btn-outline-danger w-100">
                                     رد شده
                                        <span className="badge bg-white border text-dark">4</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-4">
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
                                    <th scope="col">فروشنده / تأمین‌کننده</th>
                                    <th scope="col">شماره همراه</th>
                                    <th scope="col">شماره ثابت</th>
                                    <th scope="col"> وضعیت</th>
                                    <th scope="col">عملیات</th>
                                    <th scope="col">پروفایل</th>
                                    <th scope="col">قرارداد</th>
                                    <th scope="col">نوع قرارداد</th>
                                    <th scope="col">تاریخ قرارداد</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">849641</td>
                                    <td className="text-center">849641</td>
                                    <td className="text-center"><p className="text-success font-weight-bolder m-0"> تایید شده</p></td>
                                    <td className={csS.tdrefrsh }>
                                        <a className={csS.refreshbtn+" btn d-lg-flex btnrefresh"}>
                                            <img src={refresh} alt="" className={csS.refreshicon}/>
                                            بررسی مجدد
                                        </a>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="Subssting">

                                        <a className="w-100 d-flex justify-content-center align-items-center">
                                            <img src={user} className="w-50"/>
                                        </a>

                                        </NavLink>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink  activeClassName="activecat" to="/firojahadmin/History">
                                            <a className="w-100 d-flex justify-content-center align-items-center">
                                                <img src={contact} className="w-50"/>
                                            </a>
                                        </NavLink>
                                    </td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">56941</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">849641</td>
                                    <td className="text-center">849641</td>
                                    <td className="text-center"><p className="text-success font-weight-bolder m-0"> تایید شده</p></td>
                                    <td className={csS.tdrefrsh }>
                                        <a className={csS.refreshbtn+" btn d-lg-flex btnrefresh"}>
                                            <img src={refresh} alt="" className={csS.refreshicon}/>
                                            بررسی مجدد
                                        </a>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="Subssting">

                                            <a className="w-100 d-flex justify-content-center align-items-center">
                                                <img src={user} className="w-50"/>
                                            </a>

                                        </NavLink>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink  activeClassName="activecat" to="/firojahadmin/History">
                                            <a className="w-100 d-flex justify-content-center align-items-center">
                                                <img src={contact} className="w-50"/>
                                            </a>
                                        </NavLink>
                                    </td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">56941</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">849641</td>
                                    <td className="text-center">849641</td>
                                    <td className="text-center"><p className="text-success font-weight-bolder m-0"> تایید شده</p></td>
                                    <td className={csS.tdrefrsh }>
                                        <a className={csS.refreshbtn+" btn d-lg-flex btnrefresh"}>
                                            <img src={refresh} alt="" className={csS.refreshicon}/>
                                            بررسی مجدد
                                        </a>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="Subssting">

                                            <a className="w-100 d-flex justify-content-center align-items-center">
                                                <img src={user} className="w-50"/>
                                            </a>

                                        </NavLink>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <NavLink  activeClassName="activecat" to="/firojahadmin/History">
                                            <a className="w-100 d-flex justify-content-center align-items-center">
                                                <img src={contact} className="w-50"/>
                                            </a>
                                        </NavLink>
                                    </td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">56941</td>
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