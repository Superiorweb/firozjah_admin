import React, {Component} from 'react';
import csS from "../Css/AddAdmin.module.css";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import DatePicker from "react-datepicker";
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


export default class AdminSetting extends Component {
    state = {
        dataend: new Date(),
    }
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        ویرایش پروفایل | فروشگاه اینترنتی فیروزجاه

                    </title>
                </Helmet>
                <div className="row mr-0 ml-0 justify-content-center">
                    <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                        <div className="w-100 text-center">
                            <h4>
                                پروفایل مشتریان
                            </h4>
                            <hr/>
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
                                    شماره همراه
                                </label>
                                <input type="text" className="form-control w-75" placeholder=" "
                                       aria-label="Last name"/>
                            </div>
                            <div className="col-lg-6 col-12 justify-content-lg-evenly justify-content-center d-flex align-items-center">
                                <label className={csS.lablesform+" m-2"}>
                                    استان
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
                                   شهر
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
                                <div className="d-flex align-items-center mt-1 mt-lg-0 w-100">
                                    <label className={csS.lablesform+"  mx-2 my-3"}>
                                    شماره حساب
                                    </label>
                                    <input type="text" className="form-control w-75" placeholder=" "
                                           aria-label="Last name"/>
                                </div>
                                <div className="d-flex align-items-center w-100 mt-4 mt-lg-0">
                                    <label className={csS.lablesform+"  mx-2 my-3"}>
                                     نامه حساب
                                    </label>
                                    <input type="text" className="form-control w-75" placeholder=" "
                                           aria-label="Last name"/>
                                </div>


                            </div>

                            {/* فرم ها */}

                        </div>


                    </div>
                </div>
            </Dashboard>
        )
    }
}