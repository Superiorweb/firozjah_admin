import React, {Component} from 'react';
import csS from "../Css/AddAdmin.module.css";
import undo from '../icon/undo.png'
import cart from '../icon/shopping-cart.png'
import contract from '../icon/contract.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import eye from "../icon/eye.png";

export default class History extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        تاریخچه | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
                <div className="row mr-0 ml-0 justify-content-center">
                    <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                        <div className="w-100 text-center">
                            <h4>
                                تاریخچه تغییرات
                            </h4>
                            <hr/>
                        </div>
                        <div className="w-100 pl-3">
                            <NavLink  activeClassName="activecat" to="/firojahadmin/Suppliers">
                            <button className={cspa.btnUndocustomer+" btn"}>
                                <img style={{width:"10%",top:"-3px"}} className="mx-2 position-relative" src={undo} alt=" "/>
                                بازگشت
                            </button>
                            </NavLink>
                        </div>

                        <div className="row pt-4 w-100 mb-3">
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
                            <div className="col-md-6 col-12 mt-2 p-0">
                            </div>
                        </div>

                        <div className="row mr-0 ml-0">
                            <div className="table-responsive">
                                <table className="table table-light table-striped table-hover table-bordered table-responsive overflow-hidden">
                                    <thead>
                                    <tr>
                                        <th scope="col">ردیف</th>
                                        <th scope="col">تاریخ اعمال تغییرات</th>
                                        <th scope="col">نام فروشنده</th>
                                        <th scope="col">نام خانوادگی فروشنده</th>
                                        <th scope="col">نام پدر</th>
                                        <th scope="col">تاریخ تولد</th>
                                        <th scope="col">کد ملی</th>
                                        <th scope="col">شماره شناسنامه</th>
                                        <th scope="col">شماره همراه</th>
                                        <th scope="col">شماره ثابت</th>
                                        <th scope="col">پست الکترونیکی</th>
                                        <th scope="col">شماره حساب</th>
                                        <th scope="col">استان</th>
                                        <th scope="col">شهر</th>
                                        <th scope="col">ادرس</th>
                                        <th scope="col">کدپستی</th>
                                        <th scope="col">مشاهده</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td className="text-center">54156</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-left">WWW.EXM.COM</td>
                                        <td className="text-center">546456</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td className="text-center">546456</td>
                                        <td className="p-3" style={{width: "7%"}}>
                                            <img className="w-100" src={eye} alt=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td className="text-center">54156</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-left">WWW.EXM.COM</td>
                                        <td className="text-center">546456</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td className="text-center">546456</td>
                                        <td className="p-3" style={{width: "7%"}}>
                                            <img className="w-100" src={eye} alt=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td className="text-center">54156</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-center">09905611987</td>
                                        <td className="text-left">WWW.EXM.COM</td>
                                        <td className="text-center">546456</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td>متن نمونه</td>
                                        <td className="text-center">546456</td>
                                        <td className="p-3" style={{width: "7%"}}>
                                            <img className="w-100" src={eye} alt=""/>
                                        </td>
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