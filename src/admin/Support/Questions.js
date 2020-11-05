import React, {Component} from 'react';
import scroll from '../icon/scroll.png'
import CKEditor from 'ckeditor4-react';
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import csp from "../Css/Product.module.css";
import remove from "../icon/remove.png";
import csSu from '../Css/Support.module.css'
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";

export default class Questions extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        سوالات متداول | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
                <div>

                    {/*اضافه کردن سوال*/}

                    <div className="row mr-0 ml-0 justify-content-center">
                        <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                            <div className="w-100 text-center">
                                <h4>
                                    ثبت سوال جدید
                                </h4>
                                <hr/>
                            </div>


                            <div className="row justify-content-center">
                                <div className="col-md-5 col-12">
                                    <form className="d-flex">
                                        <p className="w-100">
                                            نوع
                                        </p>
                                        <label className="w-100">
                                            <input name="option" className="mx-2" type="radio"/>
                                            دسته اصلی
                                        </label>
                                        <label className="w-100">
                                            <input name="option" className="mx-2" type="radio"/>
                                            زیرمجموعه
                                        </label>
                                    </form>
                                </div>
                                <div className="col-md-5 col-12 d-flex align-items-center">
                                    <label className="w-25">
                                        موضوع
                                    </label>
                                    <select className="form-control w-100 selectbig selection">
                                        <option>14</option>
                                        <option>14</option>
                                        <option>14</option>
                                        <option>14</option>
                                        <option>14</option>
                                    </select>
                                </div>


                                {/* عنوان */}
                                <div className="col-md-10 col-12 d-flex align-items-center my-4 pr-0">
                                    <label className="mx-3 text-right">
                                        عنوان
                                    </label>

                                    <input type="text" className="w-100 form-control rounded"/>

                                </div>

                                <div className="col-md-10 col-12">
                                    <CKEditor
                                        data="<p></p>"
                                        config={{

                                            language: 'fa'

                                        }}
                                    />
                                </div>
                                <div className="col-10 d-flex justify-content-end mt-4">
                                    <button className="btn btn-success w-25">
                                        ثبت
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>


                    {/*لیست پیام ها*/}


                    <div className="row mr-0 ml-0 justify-content-center">
                        <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                            <div className="w-100 text-center">
                                <h4>
                                    لیست سوالات متداول
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
                                    <div className={cspa.searchinput + " input-group mb-3 float-left"}>
                                        <input type="text" className="form-control w-25" placeholder="جست وجو"
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
                                            <th scope="col">موضوع</th>
                                            <th scope="col">عنوان مثال</th>
                                            <th scope="col">تنظیمات</th>
                                            <th scope="col">مرتب کردن</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>دسته اصلی</td>
                                            <td>برای ثبت نام در مرکز فروشندگان به چه چیز هایی نیاز دارم</td>
                                            <td className="w-25"><a
                                                className="d-flex justify-content-center align-items-center">
                                                <button className="btn btn-danger mx-1">حذف</button>
                                                <button className="btn btn-success mx-1">ویرایش</button>
                                            </a></td>
                                            <td className="w-25">
                                                <a className="d-flex w-100 justify-content-center">
                                                <img src={scroll} className={csSu.iconsorts}/>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>دسته اصلی</td>
                                            <td>برای ثبت نام در مرکز فروشندگان به چه چیز هایی نیاز دارم</td>
                                            <td className="w-25"><a
                                                className="d-flex justify-content-center align-items-center">
                                                <button className="btn btn-danger mx-1">حذف</button>
                                                <button className="btn btn-success mx-1">ویرایش</button>
                                            </a></td>
                                            <td className="w-25">
                                                <a className="d-flex w-100 justify-content-center">
                                                    <img src={scroll} className={csSu.iconsorts}/>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>دسته اصلی</td>
                                            <td>برای ثبت نام در مرکز فروشندگان به چه چیز هایی نیاز دارم</td>
                                            <td className="w-25"><a
                                                className="d-flex justify-content-center align-items-center">
                                                <button className="btn btn-danger mx-1">حذف</button>
                                                <button className="btn btn-success mx-1">ویرایش</button>
                                            </a></td>
                                            <td className="w-25">
                                                <a className="d-flex w-100 justify-content-center">
                                                    <img src={scroll} className={csSu.iconsorts}/>
                                                </a>
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
                </div>
            </Dashboard>
        )
    }
}