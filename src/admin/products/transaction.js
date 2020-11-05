import React, {Component} from 'react';
import csp from "../Css/Product.module.css";
import excel from '../icon/excel.png';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import {Link, NavLink} from "react-router-dom";


const Input = ({onChange, placeholder, value, isSecure, id, onClick}) => (
    <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={csp.inputdate+" dateinput"}
        isSecure={isSecure}
        id={id}
        onClick={onClick}
    />
);


export default class Transaction extends Component {
    state={
        datastart:new Date(),
        dataend:new Date(),
    }
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        تراکنش مالی | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            تراکنش مالی
                        </h4>
                        <hr/>
                    </div>
                </div>

                <div className="col-11 bg-white text-center">
                    <div className="row justify-content-center">
                        <div className="col-9 bg-white text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-3 col-sm-6 col-12 mt-4 m-md-0">
                                    <NavLink activeClassName="activecat" to="/firojahadmin/Daryafti">
                                        <button className="btn w-100 font-weight-bolder btn-outline-primary d-flex justify-content-between align-items-center">
                                            دریافتی
                                            <span className={csp.badgebtn+" badge text-dark mx-2 bg-light"}>
                             80
                         </span>
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="col-md-3 col-sm-6 col-12 mt-4 m-md-0">
                                    <NavLink activeClassName="activecat" to="/firojahadmin/Transaction">
                                        <button className="btn w-100 font-weight-bolder btn-outline-primary d-flex justify-content-between align-items-center">
                                            واریزی
                                            <span className={csp.badgebtn+" badge text-dark mx-2 bg-light"}>
                             80
                         </span>
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="col-md-3 col-sm-6 col-12 mt-4 m-md-0">
                                    <button className="btn w-100 font-weight-bolder btn-outline-primary d-flex justify-content-between align-items-center">
                                        خروجی اکسل دریافتی
                                        <span  className={csp.badgebtn+" "+csp.badgebtnexcal+" badge text-dark mx-2 bg-light"}>
                           <a className="w-25">
                           <img className="w-100" src={excel}/>
                           </a>
                         </span>
                                    </button>
                                </div>
                                <div className="col-md-3 col-sm-6 col-12 mt-4 m-md-0">
                                    <button className="btn w-100 font-weight-bolder btn-outline-primary d-flex justify-content-between align-items-center">
                                        خروجی اکسل واریزی
                                        <span  className={csp.badgebtn+" "+csp.badgebtnexcal+" badge text-dark mx-2 bg-light"}>
                           <a className="w-25">
                           <img className="w-100" src={excel}/>
                           </a>
                         </span>
                                    </button>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="row mr-0 ml-0 align-items-center">
                                        <div className="col-lg-6 col-xl-5 col-md-6 col-12 flex-wrap flex-md-nowrap justify-content-center justify-content-md-evenly  px-0 d-flex align-items-center">
                                            <label className="w-50">
                                                دریافت گزارش از تاریخ
                                            </label>
                                            <DatePicker customInput={<Input />} selected={this.state.datastart} locale="fa" onChange={date => this.setState({datastart:date})} />
                                            {/*<input type="text" className="form-control w-100"/>*/}
                                        </div>
                                        <div className="col-lg-6 col-xl-4 col-md-6 col-12 px-0 flex-wrap flex-md-nowrap d-flex justify-content-center justify-content-md-evenly align-items-center">
                                            <label className="w-50">
                                                تا تاریخ
                                            </label>
                                            <DatePicker customInput={<Input />} selected={this.state.dataend} locale="fa" onChange={date => this.setState({dataend:date})} />

                                            {/*<input type="text" className="form-control w-100"/>*/}
                                        </div>
                                        <div className="col-md-6 col-xl-3 col-lg-6 col-12 mt-3 mt-xl-0">
                                            <button className="btn mr-2 w-100 font-weight-bold btn-success">
                                                فیلتر
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1">

                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-11 bg-white">
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
                                    <th scope="col">ردیف</th>
                                    <th scope="col">نوع تراکنش</th>
                                    <th scope="col">زمان ارسال کالا</th>
                                    <th scope="col">به شماره حساب</th>
                                    <th scope="col">دریافت کننده</th>
                                    <th scope="col">درگاه</th>
                                    <th scope="col">مبلغ تراکنش (تومان)</th>
                                    <th scope="col">زمان تراکنش</th>
                                    <th scope="col">شناسه ارجاع</th>
                                    <th scope="col">کد سفارش</th>
                                    <th scope="col">پورسانت فیروزجاه</th>
                                    <th scope="col">وضعیت تراکنش</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">5664</td>
                                    <td className="text-center">5466646464112146341</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">5496</td>
                                    <td className="text-center">5496</td>
                                    <td className="text-center">64156</td>
                                    <td className="text-center">64156</td>
                                    <td className="text-center">64156</td>
                                    <td>متن نمونه</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">5664</td>
                                    <td className="text-center">5466646464112146341</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">5496</td>
                                    <td className="text-center">5496</td>
                                    <td className="text-center">64156</td>
                                    <td className="text-center">64156</td>
                                    <td className="text-center">64156</td>
                                    <td>متن نمونه</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">5664</td>
                                    <td className="text-center">5466646464112146341</td>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">5496</td>
                                    <td className="text-center">5496</td>
                                    <td className="text-center">64156</td>
                                    <td className="text-center">64156</td>
                                    <td className="text-center">64156</td>
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