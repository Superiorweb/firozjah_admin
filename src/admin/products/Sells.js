import React, {Component} from 'react';
import csp from "../Css/Product.module.css";
import image from '../icon/image.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import DatePicker, {registerLocale} from "react-datepicker";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";


const Input = ({onChange, placeholder, value, isSecure, id, onClick}) => (
    <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={csp.inputdate + " dateinput pt-1 pb-1"}
        isSecure={isSecure}
        id={id}
        onClick={onClick}
    />
);


export default class Sells extends Component {
    state = {
        datastart: new Date(),
        dataend: new Date(),
    }

    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        کالاهای فروخته شده | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            کالاهای فروخته شده
                        </h4>
                        <hr/>
                    </div>
                </div>


                <div className="col-11 bg-white text-center">
                    <h3 style={{fontSize:"17px"}} className="mb-5 font-weight-normal">
                        مبالغ به تومان می‌باشد
                    </h3>

                    <div className="row justify-content-center">
                        <div className="col-12 mt-3 mt-md-0 col-md-3">
                            <NavLink activeClassName="activecat" to="/firojahadmin/Sells">
                            <button className="btn w-100 btn-outline-primary d-flex justify-content-between align-items-center">
                                همه سفارشات
                                <span className={csp.badgebtn + " badge text-dark mx-2 bg-light"}>
                             80
                         </span>
                            </button>
                            </NavLink>
                        </div>
                        <div className="col-12 mt-3 mt-md-0 col-md-3">
                            <NavLink activeClassName="activecat" to="/firojahadmin/Success">
                            <button className="btn w-100 btn-outline-primary d-flex justify-content-between align-items-center">
                                پرداخت موفق
                                <span className={csp.badgebtn + " badge text-dark mx-2 bg-light"}>
                             80
                         </span>
                            </button>
                            </NavLink>
                        </div>
                        <div className="col-12 mt-3 mt-md-0 col-md-3">
                            <NavLink activeClassName="activecat" to="/firojahadmin/Failed">
                            <button className="btn w-100 btn-outline-primary d-flex justify-content-between align-items-center">
                                پرداخت ناموفق
                                <span className={csp.badgebtn + " badge text-dark mx-2 bg-light"}>
                             80
                         </span>
                            </button>
                            </NavLink>
                        </div>
                        <div>
                            <div className="row justify-content-center">


                                <div className="col-12 col-md-7 col-sm-7 col-lg-4 d-flex align-items-center mt-5">
                                    <label className={csp.datelableB}>
                                        سفارشات از تاریخ
                                    </label>
                                    <DatePicker customInput={<Input/>} selected={this.state.dataend} locale="fa"
                                                onChange={date => this.setState({dataend: date})}/>
                                </div>
                                <div className="col-12 col-md-7 col-sm-7 col-lg-3 d-flex align-items-center mt-5">
                                    <label className={csp.datelable}>
                                        تا تاریخ
                                    </label>
                                    <DatePicker customInput={<Input/>} selected={this.state.dataend} locale="fa"
                                                onChange={date => this.setState({dataend: date})}/>
                                </div>
                                <div className="col-sm-6 col-12 col-lg-2 d-flex align-items-center mt-5">
                                    <button className="btn mr-2 w-100 btn-success">
                                        فیلتر
                                    </button>
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
                            <div className={cspa.searchinput + " input-group mb-3 float-left"}>
                                <input type="text" className="form-control w-25" placeholder="جستجو"
                                       aria-label="Username"
                                       aria-describedby="basic-addon1"/>
                                <div className={cspa.inputappend + " input-group-prepend"}>
                                    <button className="btn btn-success w-100">
                                        <img src={search} className={cspa.iconsearch}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0">
                        <div className={csp.sellslist + " col-12 px-0 mb-5"}>
                            <div className={csp.headertablelist + " w-100 d-flex text-center pt-2"}>
                                <p className="mb-1 w-100">
                                    کد سفارش :
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    کل مبلغ:
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    نمایش فاکتور
                                </p>
                            </div>
                            <div className={csp.headertablelisttwo + " w-100 d-flex text-center pt-2"}>
                                <p className="mb-1 w-100">
                                    کد سفارش :
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    کل مبلغ:
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    نمایش فاکتور
                                </p>
                            </div>
                            <div className="p-4 table-responsive">
                                <table
                                    className={csp.tablesells + " table table-light table-striped table-hover table-bordered table-responsive overflow-hidden"}>
                                    <thead>
                                    <tr>
                                        <th scope="col">ردیف</th>
                                        <th scope="col">تصویر</th>
                                        <th scope="col">کد سفارش</th>
                                        <th scope="col">کد کالا</th>
                                        <th scope="col">نام کالا</th>
                                        <th scope="col">تعداد</th>
                                        <th scope="col">فروشنده</th>
                                        <th scope="col">خریدار</th>
                                        <th scope="col">زمان</th>
                                        <th scope="col">شرح درخواست</th>
                                        <th scope="col">وضعیت</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td style={{width: "12%"}}>
                                            <div className="w-100 d-flex justify-content-center">
                                            <img className="w-50" src={image} alt=""/>
                                            </div>
                                        </td>
                                        <td className="text-center">4514</td>
                                        <td className="text-center">485</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">595</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">1399</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td style={{width: "12%"}}>
                                            <div className="w-100 d-flex justify-content-center">
                                                <img className="w-50" src={image} alt=""/>
                                            </div>
                                        </td>
                                        <td className="text-center">4514</td>
                                        <td className="text-center">485</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">595</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">1399</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td style={{width: "12%"}}>
                                            <div className="w-100 d-flex justify-content-center">
                                                <img className="w-50" src={image} alt=""/>
                                            </div>
                                        </td>
                                        <td className="text-center">4514</td>
                                        <td className="text-center">485</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">595</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">1399</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={csp.sellslist + " col-12 px-0 mb-5"}>
                            <div className={csp.headertablelist + " w-100 d-flex text-center pt-2"}>
                                <p className="mb-1 w-100">
                                    کد سفارش :
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    کل مبلغ:
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    نمایش فاکتور
                                </p>
                            </div>
                            <div className={csp.headertablelisttwo + " w-100 d-flex text-center pt-2"}>
                                <p className="mb-1 w-100">
                                    کد سفارش :
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    کل مبلغ:
                                    <span className="mx-3">
                                     1500
                                 </span>
                                </p>
                                <p className="mb-1 w-100">
                                    نمایش فاکتور
                                </p>
                            </div>
                            <div className="p-4 table-responsive">
                                <table
                                    className={csp.tablesells + " table table-light table-striped table-hover table-bordered table-responsive overflow-hidden"}>
                                    <thead>
                                    <tr>
                                        <th scope="col">ردیف</th>
                                        <th scope="col">تصویر</th>
                                        <th scope="col">کد سفارش</th>
                                        <th scope="col">کد کالا</th>
                                        <th scope="col">نام کالا</th>
                                        <th scope="col">تعداد</th>
                                        <th scope="col">فروشنده</th>
                                        <th scope="col">خریدار</th>
                                        <th scope="col">زمان</th>
                                        <th scope="col">شرح درخواست</th>
                                        <th scope="col">وضعیت</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td style={{width: "12%"}}>
                                            <div className="w-100 d-flex justify-content-center">
                                                <img className="w-50" src={image} alt=""/>
                                            </div>
                                        </td>
                                        <td className="text-center">4514</td>
                                        <td className="text-center">485</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">595</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">1399</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td style={{width: "12%"}}>
                                            <div className="w-100 d-flex justify-content-center">
                                                <img className="w-50" src={image} alt=""/>
                                            </div>
                                        </td>
                                        <td className="text-center">4514</td>
                                        <td className="text-center">485</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">595</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">1399</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td style={{width: "12%"}}>
                                            <div className="w-100 d-flex justify-content-center">
                                                <img className="w-50" src={image} alt=""/>
                                            </div>
                                        </td>
                                        <td className="text-center">4514</td>
                                        <td className="text-center">485</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">595</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                        <td className="text-center">1399</td>
                                        <td>نمونه متن</td>
                                        <td>نمونه متن</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    {/*pageing*/}


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