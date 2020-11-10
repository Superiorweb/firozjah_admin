import React, {Component} from 'react';
import csS from "../Css/AddAdmin.module.css";
import DatePicker from "react-datepicker";
import csp from "../Css/Product.module.css";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";

const Input = ({onChange, placeholder, value, isSecure, id, onClick}) => (
    <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={"dateinputage form-control"}
        isSecure={isSecure}
        id={id}
        onClick={onClick}
    />
);

export default class AddAdmin extends Component {
    state = {
        dataend: new Date(),
    }
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        ثبت مدیران | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            ثبت مدیران
                        </h4>
                        <hr/>
                    </div>
                    <div>
                        {/* تیتر */}
                        <hr className="mt-5"/>
                        <h4 className={csS.titr+" text-center"}>
                            اطلاعات مدیر
                        </h4>
                    </div>

                    {/* فرم ها */}

                    <div className="row mb-4 g-3">
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                نام و نام خانوادگی
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                نام پدر
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                             جنسیت
                            </label>
                            <select className="form-control selectbig w-75" id="exampleFormControlSelect1">
                                <option selected disabled>انتخاب کنید ...</option>
                                <option>مرد</option>
                                <option>زن</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                وضعیت تأهل
                            </label>
                            <select className="form-control selectbig w-75" id="exampleFormControlSelect1">
                                <option selected disabled>انتخاب کنید ...</option>
                                <option>مجرد</option>
                                <option>متاهل</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                             شماره ملی
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                            شماره شناسنامه
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>

                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                              تلفن همراه
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">

                            <label className={csS.lablesform+" m-2"}>
                             تلفن ثابت
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                ایمیل
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label=""/>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center age">

                            <label className={csS.lablesform+" agedateadmin"}>
                              تاریخ تولد
                            </label>
                            <DatePicker customInput={<Input/>} selected={this.state.dataend} locale="fa"
                                        onChange={date => this.setState({dataend: date})}/>
                        </div>

                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                              مدرک تحصیلی
                            </label>
                            <select required className="form-control selectbig selection w-75" id="exampleFormControlSelect1">
                                <option selected disabled>انتخاب کنید ...</option>
                                <option>لیسانس</option>
                                <option>فوق لیسانس</option>
                                <option>دکترا</option>
                                <option>دیپلم</option>
                                <option>فوق دیپلم</option>
                                <option>سیکل</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                رشته تحصیلی
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 my-3 justify-content-lg-evenly justify-content-center d-flex align-items-start">
                            <label className={csS.lablesform+" m-2"}>
                                آدرس
                            </label>
                            <textarea required className={csS.areaaddress + " form-control"}
                                      id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-lg-6 col-12 justify-content-center justify-content-lg-evenly d-flex align-items-center flex-wrap">
                            <div className="d-flex align-items-center mt-1 mt-lg-0 w-100">
                                <label className={csS.lablesform+"  mx-2 my-3"}>
                                    کد پستی
                                </label>
                                <input type="text" className="form-control w-75" placeholder=" "
                                       aria-label="Last name"/>
                            </div>

                            <div className="d-flex align-items-center w-100 mt-4 mt-lg-0">
                                <label className={csS.lablesform+"  mx-2 my-3"}>
                                 اپلود مدارک
                                </label>
                                <input type="file" className="form-control w-75" placeholder=" "
                                       aria-label="Last name"/>
                            </div>


                        </div>

                        {/* فرم ها */}

                    </div>

                    {/* تیتر */}
                    <div>
                        <hr className="mt-5"/>
                        <h4 className={csS.titr}>
                            سطح دسترسی
                        </h4>
                    </div>

                    <div className="row justify-content-center mr-0 ml-0">

                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                مشتریان
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                            تنظیمات
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                              مدیران
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                            کاربران
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                تأمین‌کنندگان
                            </label>

                        </div>

                    </div>
                    <div className="row justify-content-center mr-0 ml-0">

                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                دسته‌بندی‌ها
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                مدیریت ایتم
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                               محصولات
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                کالای فروخته شده
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                کالاهای برگشتی
                            </label>

                        </div>

                    </div>
                    <div className="row justify-content-center mr-0 ml-0">

                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                تراکنش مالی
                            </label>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                پشتیبانی
                            </label>
                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                ارتباط با ما
                            </label>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                سوالات متداول
                            </label>
                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                تغییر رمز عبور
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                منو
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                برگه‌ها
                            </label>

                        </div>

                    </div>
                    <div>
                        <hr className="mt-5"/>
                        <h4 className={csS.titr}>
                            دسته‌بندی‌ها
                        </h4>
                    </div>

                    <div className="row justify-content-center mr-0 ml-0">

                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                آموزش
                            </label>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                               لوازم تحریر
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                صنایع دستی
                            </label>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                آلات موسیقی
                            </label>

                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                فرش
                                </label>
                                <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                            مبلمان
                            </label>
                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                محصولات مذهبی
                            </label>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                            مد پوشاک
                            </label>
                        </div>
                        <div className={csS.chenckboxing + " col-lg-2 col-6 mt-lg-0 mt-5"}>
                            <label className="d-flex d-lg-flex align-items-center">
                                <input className="m-1" type="checkbox"/>
                                دستمال و شوینده
                            </label>
                        </div>

                    </div>

                    <div className="justify-content-center d-flex mt-3 mb-5">
                        <button className="btn btn-success w-25 mt-5">
                            ثبت
                        </button>
                    </div>

                </div>
            </div>

            </Dashboard>
        )
    }
}