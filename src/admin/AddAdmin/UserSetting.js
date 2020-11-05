import React, {Component} from 'react';
import csS from "../Css/AddAdmin.module.css";
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";

export default class UserSetting extends Component {
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
                ویرایش پروفایل
                        </h4>
                        <hr/>
                    </div>


                    {/* فرم ها */}

                    <div className="row mb-4 g-3">
                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                               نام و نام خانوادگی
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                               شماره همراه
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>

                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                ایمیل
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>

                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                    استان
                            </label>
                            <select className="form-control w-75 selectbig" id="exampleFormControlSelect1">
                                <option selected disabled>انتخاب کنید ...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                             شهر
                            </label>
                            <select className="form-control w-75 selectbig" id="exampleFormControlSelect1">
                                <option selected disabled>انتخاب کنید ...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-center">
                            <label className={csS.lablesform+" m-2"}>
                                کد پستی
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>
                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-start">
                            <label className={csS.lablesform+" mx-2"}>
                             ادرس
                            </label>
                            <textarea required className={csS.areaaddress + " form-control"}
                                      id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-lg-6 col-12 flex-lg-nowrap flex-lg-wrap justify-content-center justify-content-lg-evenly d-flex align-items-start">
                            <label className={csS.lablesform+" m-2"}>
                                نام کاربری
                            </label>
                            <input type="text" className="form-control w-75" placeholder=" "
                                   aria-label="Last name"/>
                        </div>

                    </div>


                </div>
            </div>
            </Dashboard>
        )
    }
}