import React, {Component} from 'react';
import csS from "../Css/AddAdmin.module.css";
import exel from '../icon/excel.png'
import cart from '../icon/shopping-cart.png'
import contract from '../icon/contract.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";


export default class Customer extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        مشتریان | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            مشتریان
                        </h4>
                        <hr/>
                    </div>
                    <div className="w-100 pl-3">
                        <button className={cspa.btnExcelcustomer+" btn btn-outline-success float-left"}>
                            خروجی Excel همه مشتریان
                            <img style={{width:"10%"}} className="mx-1" src={exel} alt=" "/>
                        </button>
                    </div>

                    <div className="row mt-5 pt-5 w-100">
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
                            <div className={cspa.searchinput+" input-group mb-3 float-left"}>
                                <input type="text" className="form-control w-25" placeholder="جستجو"
                                       aria-label="Username"
                                       aria-describedby="basic-addon1"/>
                                <div className={cspa.inputappend+" input-group-prepend p-0"}>
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
                                    <th scope="col">نام مشتری</th>
                                    <th scope="col">شماره همراه</th>
                                    <th scope="col">شماره ثابت</th>
                                    <th scope="col">پروفایل</th>
                                    <th scope="col">سبد خرید</th>
                                    <th scope="col">تاریخ سفارش</th>
                                    <th scope="col">کدپستی</th>
                                    <th scope="col">ادرس</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">54165</td>
                                    <td className="text-center">09905611987</td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="/firojahadmin/customeSetting">
                                            <a className="d-flex w-100 justify-content-center">
                                                <img src={contract} alt="" className="w-25"/>
                                            </a>
                                        </NavLink>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <a className="d-flex w-100 justify-content-center">
                                            <img src={cart} alt="" className="w-25"/>
                                        </a>
                                    </td>
                                    <td className="text-center">1399/8/6</td>
                                    <td className="text-center">546541</td>
                                    <td>متن نمونه</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">54165</td>
                                    <td className="text-center">09905611987</td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="/firojahadmin/customeSetting">
                                            <a className="d-flex w-100 justify-content-center">
                                                <img src={contract} alt="" className="w-25"/>
                                            </a>
                                        </NavLink>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <a className="d-flex w-100 justify-content-center">
                                            <img src={cart} alt="" className="w-25"/>
                                        </a>
                                    </td>
                                    <td className="text-center">1399/8/6</td>
                                    <td className="text-center">546541</td>
                                    <td>متن نمونه</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td className="text-center">54165</td>
                                    <td className="text-center">09905611987</td>
                                    <td style={{width:"10%"}}>
                                        <NavLink to="/firojahadmin/customeSetting">
                                        <a className="d-flex w-100 justify-content-center">
                                            <img src={contract} alt="" className="w-25"/>
                                        </a>
                                        </NavLink>
                                    </td>
                                    <td style={{width:"10%"}}>
                                        <a className="d-flex w-100 justify-content-center">
                                            <img src={cart} alt="" className="w-25"/>
                                        </a>
                                    </td>
                                    <td className="text-center">1399/8/6</td>
                                    <td className="text-center">546541</td>
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