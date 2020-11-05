import React, {Component} from 'react';
import plus from '../icon/plus.png'
import csc from '../Css/Catgoryes.module.css'
import remove from '../icon/remove.png'
import edit from '../icon/edit.png'
import scropl from '../icon/scroll.png'
import cspa from "../Css/Page.module.css";
import search from "../icon/loupe.png";
import Dashboard from "../Dashboard/Dashboard";
import {NavLink} from "react-router-dom";

export default class Item extends Component {

    state={
        customitem : [
            {id:1,value:" "},
            {id:1,value:" "},
            {id:1,value:" "},
            {id:1,value:" "},
            {id:1,value:" "},
            {id:1,value:" "},
            {id:1,value:" "},
        ],
    }

    addinput=()=>{
        const all = this.state.customitem;
        all.push({id:1,value:" "})
        this.setState({customitem:all})

    }

    render() {
        const camp = this.state.customitem.map((items)=>{
            return(
                <div className="col-lg-3 col-md-6 col-12 mt-4">
                    <div className="input-group w-100 d-flex align-items-center">
                        <input placeholder="گزینه‌های انتخابی" className="form-control rounded" />
                    </div>
                </div>
            )
        })
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

                    {/*فرم ها*/}

                    <div className="row mr-0 ml-0 justify-content-center">
                        <div className="col-12 col-lg-4">
                            <div className="input-group mt-5 w-100 d-flex align-items-center">
                                <label className="m-3  w-25">
                                    انتخاب دسته‌بندی
                                </label>
                                <select className="form-control rounded selectbig selection">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="input-group mt-5 w-100 d-flex align-items-center">
                                <label className="m-3  w-25">
                                    انتخاب زیردسته
                                </label>
                                <select className="form-control rounded selectbig selection">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 p-0">
                            <div className="input-group mt-5 w-100 d-flex align-items-center">
                                <label className="m-3  w-25">
                                    انتخاب محصول
                                </label>
                                <select className="form-control rounded selectbig selection">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex align-items-center w-100 mt-5 mt-md-5 justify-content-center">
                        <label className={csc.lablenameitem + " mx-4"}>
                            نام آیتم
                        </label>
                        <div className="input-group mb-3 w-100 float-left">
                            <input type="text" className="form-control w-25" placeholder=" " aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                    </div>


                    <div className="row mr-0 ml-0 justify-content-center">
                        <div className="col-12 col-lg-4">
                            <div className="input-group mt-4 w-100 d-flex align-items-center">
                                <label className="m-3  w-25">
                                    نوع منوی انتخابی
                                </label>
                                <select className="form-control rounded selectbig selection">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="input-group mt-4 w-100 d-flex align-items-center">
                                <label className="m-3 w-25">
                                   وضعیت
                                </label>
                                <select className="form-control rounded selectbig selection">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 p-0">
                            <div className="input-group mt-4 w-100 d-flex align-items-center">
                                <label className="m-3 w-25">
                                 متن
                                </label>
                                <select className="form-control rounded selectbig selection">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/*گزینه های انتخابی*/}

                    <div className="d-lg-flex text-center text-lg-right align-items-center">
                        <label className={csc.additem+" text-center"}>
                            گزینه‌های انتخابی
                        </label>
                        <div className="w-100">
                            <div id="laster" className="row mt-3">
                                {camp}
                                <div className="col-lg-3 col-md-6 col-12 mt-4">
                                <button onClick={this.addinput} className={csc.btnadditem+" btn w-100 text-white"}>
                                 <img src={plus} className="mx-2" />
                                    افزودن به گزینه‌ها
                                </button>
                                </div>
                            </div>

                        </div>

                        <div>

                        </div>
                    </div>


                    {/*نمایش*/}

                    <div className="row pt-3 mt-2">
                        <div className="col-12 d-flex justify-content-center mb-5 mt-3">
                            <button className="w-25 btn btn-success">
                                ثبت
                            </button>
                        </div>

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
                        <table
                            className="table table-light table-striped table-hover table-bordered table-responsive overflow-hidden">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">دسته‌بندی موضوعی</th>
                                <th scope="col">زیردسته</th>
                                <th scope="col">محصولات</th>
                                <th scope="col">نام آیتم</th>
                                <th scope="col">وضعیت</th>
                                <th scope="col">نوع منو</th>
                                <th scope="col">آیتم</th>
                                <th scope="col">گزینه‌ منو انتخابی</th>
                                <th scope="col">تنظیمات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>

                                <td>
                                    <div className="d-flex w-100">
                                    <button className="btn w-100">
                                        <img className={csc.icontable} src={remove} alt=""/>
                                    </button>
                                    <button className="btn w-100">
                                        <img className={csc.icontable} src={edit} alt=""/>
                                    </button>
                                    <button className="btn w-100">
                                        <img className={csc.icontable} src={scropl} alt=""/>
                                    </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>

                                <td>
                                    <div className="d-flex w-100">
                                        <button className="btn w-100">
                                            <img className={csc.icontable} src={remove} alt=""/>
                                        </button>
                                        <button className="btn w-100">
                                            <img className={csc.icontable} src={edit} alt=""/>
                                        </button>
                                        <button className="btn w-100">
                                            <img className={csc.icontable} src={scropl} alt=""/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>

                                <td className="w-25">
                                    <div className="d-flex w-100">
                                        <button className="btn w-100">
                                            <img className={csc.icontable} src={remove} alt=""/>
                                        </button>
                                        <button className="btn w-100">
                                            <img className={csc.icontable} src={edit} alt=""/>
                                        </button>
                                        <button className="btn w-100">
                                            <img className={csc.icontable} src={scropl} alt=""/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

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