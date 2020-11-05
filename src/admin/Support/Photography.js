import React, {Component} from 'react';
import csS from "../Css/AddAdmin.module.css";
import exel from '../icon/excel.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import csp from "../Css/Product.module.css";
import remove from "../icon/remove.png";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";


export default class Photography extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        درخواست عکاسی | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            درخواست عکاسی
                        </h4>
                        <hr/>
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
                                <th scope="col">ردیف</th>
                                <th scope="col">نام و نام خانوادگی</th>
                                <th scope="col">نام شرکت / فروشگاه</th>
                                <th scope="col">شماره همراه</th>
                                <th scope="col">آدرس</th>
                                <th scope="col">تاریخ سفارش</th>
                                <th scope="col">توضیحات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td className="text-center">09905611987</td>
                                <td>متن نمونه</td>
                                <td className="text-center">1399/8/6</td>
                                <td>متن نمونه</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td className="text-center">09905611987</td>
                                <td>متن نمونه</td>
                                <td className="text-center">1399/8/6</td>
                                <td>متن نمونه</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td className="text-center">09905611987</td>
                                <td>متن نمونه</td>
                                <td className="text-center">1399/8/6</td>
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