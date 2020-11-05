import React, {Component} from 'react';
import csS from "../Css/Catgoryes.module.css";
import sorts from '../icon/scroll.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import Dashboard from "../Dashboard/Dashboard";
import {NavLink} from "react-router-dom";

export default class Subcategory extends Component {
    render() {
        return (
            <Dashboard>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            دسته‌بندی‌ها
                        </h4>
                        <hr/>
                    </div>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-2 mt-2 col-sm-6 col-12">
                            <NavLink  activeClassName="activecat" to="/firojahadmin/Catgoryes">
                                <button className="btn w-100 font-weight-bold btn-outline-primary">
                                    دسته‌بندی‌
                                </button>
                            </NavLink>
                        </div>
                        <div className="col-xl-2 mt-2 col-sm-6 col-12">
                            <NavLink activeClassName="activecat"  to="/firojahadmin/Subcategory">
                                <button className="btn w-100 font-weight-bold btn-outline-primary">
                                    زیردسته
                                </button>
                            </NavLink>
                        </div>
                        <div className="col-xl-2 mt-2 col-sm-6 col-12">
                            <NavLink activeClassName="activecat" to="/firojahadmin/AddProduct">
                                <button className="btn w-100 font-weight-bold btn-outline-primary">
                                    محصولات
                                </button>
                            </NavLink>
                        </div>
                        <div className="col-xl-2 mt-2 col-sm-6 col-12">
                            <NavLink activeClassName="activecat"  to="/firojahadmin/Item">
                                <button className="btn w-100 font-weight-bold btn-outline-primary">
                                    آیتم
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-7 col-sm-8 col-12">
                            <div className="input-group mt-5 w-100 d-flex align-items-center">
                                <label className="m-3">
                                    انتخاب دسته‌بندی
                                </label>
                                <select className="form-control selection rounded selectbig">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-7 col-sm-8 col-12">
                            <div className="input-group mt-5 w-100 d-flex align-items-center">
                                <label className="m-3">
                                    افزودن زیردسته
                                </label>
                                <input type="text" className="form-control w-25 rounded" placeholder="مانند مد و پوشاک"
                                       aria-label="Username"
                                       aria-describedby="basic-addon1"/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-success font-weight-bold mx-2">ثبت</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-2 pt-4">
                        <div className="col-md-6 col-12 align-items-center d-flex">
                            <label className="mx-2">
                                تعداد نمایش
                            </label>
                            <select className="form-control w-25 " id="exampleFormControlSelect1">
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
                        <div className="table-responsive">
                            <table
                                className="table table-light table-striped table-hover table-bordered table-responsive overflow-hidden">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">دسته‌بندی موضوعی</th>
                                    <th scope="col">زیردسته</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">ثبت‌کننده</th>
                                    <th scope="col">تنظیمات</th>
                                    <th scope="col">مرتب کردن</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">236</td>
                                    <td>متن نمونه</td>
                                    <td>
                                        <div className="w-100 d-flex align-items-center justify-content-center mt-1">
                                            <a className="btn btn-danger rounded mx-1 w-25">
                                                حذف
                                            </a>
                                            <a className="btn btn-primary rounded mx-1 w-25">
                                                ویرایش
                                            </a>
                                        </div>
                                    </td>
                                    <td className="w-25">
                                        <div className="d-flex justify-content-center align-items-center w-100">
                                            <img className={csS.iconsorts} src={sorts} alt=""/>
                                        </div>


                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">236</td>
                                    <td>متن نمونه</td>
                                    <td>
                                        <div className="w-100 d-flex align-items-center justify-content-center mt-1">
                                            <a className="btn btn-danger rounded mx-1 w-25">
                                                حذف
                                            </a>
                                            <a className="btn btn-primary rounded mx-1 w-25">
                                                ویرایش
                                            </a>
                                        </div>
                                    </td>
                                    <td className="w-25">
                                        <div className="d-flex justify-content-center align-items-center w-100">
                                            <img className={csS.iconsorts} src={sorts} alt=""/>
                                        </div>


                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>متن نمونه</td>
                                    <td className="text-center">236</td>
                                    <td>متن نمونه</td>
                                    <td>
                                        <div className="w-100 d-flex align-items-center justify-content-center mt-1">
                                            <a className="btn btn-danger rounded mx-1 w-25">
                                                حذف
                                            </a>
                                            <a className="btn btn-primary rounded mx-1 w-25">
                                                ویرایش
                                            </a>
                                        </div>
                                    </td>
                                    <td className="w-25">
                                        <div className="d-flex justify-content-center align-items-center w-100">
                                            <img className={csS.iconsorts} src={sorts} alt=""/>
                                        </div>


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