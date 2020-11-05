import React, {Component} from 'react';
import csS from "../Css/Support.module.css";
import search from '../icon/loupe.png'
import sort from '../icon/scroll.png'
import arrowup from '../icon/caret-down.png'
import Dashboard from "../Dashboard/Dashboard";
import cspa from "../Css/Page.module.css";
import {Helmet} from "react-helmet";

export default class Footer extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        منو footer | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                    footer
                        </h4>
                        <hr/>
                    </div>

                    <div className="text-center">
                        {/* تیتر */}
                        <hr className="mt-5"/>
                        <h4 className={csS.titr}>
                            فهرست 1
                        </h4>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-3 d-flex align-items-center">
                            <label className="mx-2">
                                عنوان
                            </label>
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-12 mt-4 mb-4 mb-lg-0 mt-lg-0 col-md-7 d-flex align-items-center">
                            <label className="mx-2">
                                لینک
                            </label>
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-12 pl-4 col-md-2">
                            <button className="btn-success w-100 btn">افزودن</button>
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
                            className="table table-light table-striped table-hover table-bordered overflow-auto table-responsive overflow-hidden">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">نام</th>
                                <th scope="col">لینک</th>
                                <th scope="col">تنظیمات</th>
                                <th scope="col">مرتب کردن</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                <td>
                                    <a className="d-flex w-100 justify-content-center align-items-center">
                                    <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                    <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                    </a>
                                </td>
                                <td className="w-25">
                                    <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                        <img style={{width:"15%"}} src={sort}/>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                <td>
                                    <a className="d-flex w-100 justify-content-center align-items-center">
                                        <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                        <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                    </a>
                                </td>
                                <td className="w-25">
                                    <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                        <img style={{width:"15%"}} src={sort}/>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                <td>
                                    <a className="d-flex w-100 justify-content-center align-items-center">
                                        <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                        <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                    </a>
                                </td>
                                <td className="w-25">
                                    <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                        <img style={{width:"15%"}} src={sort}/>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
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



                    {/*فهرست 2*/}


                    <div className="text-center">
                        {/* تیتر */}
                        <hr className="mt-5"/>
                        <h4 className={csS.titr}>
                            فهرست 2
                        </h4>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-3 d-flex align-items-center">
                            <label className="mx-2">
                                عنوان
                            </label>
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-12 mt-4 mb-4 mb-lg-0 mt-lg-0 col-md-7 d-flex align-items-center">
                            <label className="mx-2">
                                لینک
                            </label>
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-12 pl-4 col-md-2">
                            <button className="btn-success w-100 btn">افزودن</button>
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
                                className="table table-light table-striped table-hover table-bordered overflow-auto table-responsive overflow-hidden">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">نام</th>
                                    <th scope="col">لینک</th>
                                    <th scope="col">تنظیمات</th>
                                    <th scope="col">مرتب کردن</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                    <td>
                                        <a className="d-flex w-100 justify-content-center align-items-center">
                                            <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                            <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                        </a>
                                    </td>
                                    <td className="w-25">
                                        <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                            <img style={{width:"15%"}} src={sort}/>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                    <td>
                                        <a className="d-flex w-100 justify-content-center align-items-center">
                                            <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                            <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                        </a>
                                    </td>
                                    <td className="w-25">
                                        <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                            <img style={{width:"15%"}} src={sort}/>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                    <td>
                                        <a className="d-flex w-100 justify-content-center align-items-center">
                                            <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                            <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                        </a>
                                    </td>
                                    <td className="w-25">
                                        <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                            <img style={{width:"15%"}} src={sort}/>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
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


                    {/*فهرست 3*/}


                    <div className="text-center">
                        {/* تیتر */}
                        <hr className="mt-5"/>
                        <h4 className={csS.titr}>
                            فهرست 3
                        </h4>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-3 d-flex align-items-center">
                            <label className="mx-2">
                                عنوان
                            </label>
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-12 mt-4 mb-4 mb-lg-0 mt-lg-0 col-md-7 d-flex align-items-center">
                            <label className="mx-2">
                                لینک
                            </label>
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-12 pl-4 col-md-2">
                            <button className="btn-success w-100 btn">افزودن</button>
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
                                className="table table-light table-striped table-hover table-bordered overflow-auto table-responsive overflow-hidden">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">نام</th>
                                    <th scope="col">لینک</th>
                                    <th scope="col">تنظیمات</th>
                                    <th scope="col">مرتب کردن</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                    <td>
                                        <a className="d-flex w-100 justify-content-center align-items-center">
                                            <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                            <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                        </a>
                                    </td>
                                    <td className="w-25">
                                        <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                            <img style={{width:"15%"}} src={sort}/>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                    <td>
                                        <a className="d-flex w-100 justify-content-center align-items-center">
                                            <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                            <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                        </a>
                                    </td>
                                    <td className="w-25">
                                        <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                            <img style={{width:"15%"}} src={sort}/>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>متن نمونه</td>
                                    <td>https://react-bootstrap.github.io/components/overlays/#popovers</td>
                                    <td>
                                        <a className="d-flex w-100 justify-content-center align-items-center">
                                            <button style={{borderRadius:"15px"}} className="btn btn-danger mx-1">حذف</button>
                                            <button style={{borderRadius:"15px"}} className="btn btn-primary mx-1">ویرایش</button>
                                        </a>
                                    </td>
                                    <td className="w-25">
                                        <a className="d-flex w-100 justify-content-center align-items-center" href="#">
                                            <img style={{width:"15%"}} src={sort}/>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
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