import React, {Component} from 'react'
import csS from '../Css/setting.module.css'
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";

export default class Setting extends Component {
    state = {
        checkboxOne:"غیرفعال",
        checkboxTwo:"غیرفعال",
        checkboxThree:"غیرفعال"
    }

    checkactive = () => {
     if (this.state.checkboxOne === "غیرفعال"){
         this.setState({checkboxOne:"فعال"})
     }
    }

    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        تنظیمات | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            تنظیمات
                        </h4>
                        <hr/>
                    </div>


                    <div className="row mr-0 ml-0 justify-content-center">
                        <div className="col-12">
                            <ul className={csS.list_menu_setting + " list-group d-block d-lg-flex list-group-horizontal"}>
                                <li className="font-weight-bolder">عمومی</li>
                                <li className="font-weight-bolder">برند</li>
                                <li className="font-weight-bolder">بنر</li>
                                <li className="font-weight-bolder">رنگ</li>
                                <li className="font-weight-bolder">باکس بالا</li>
                                <li className="font-weight-bolder">تنطیمات همگانی</li>
                                <li className="font-weight-bolder">اسلاید</li>
                                <li className="font-weight-bolder">روش ارسال</li>
                                <li className="font-weight-bolder">پاپ‌آپ</li>
                                <li className="font-weight-bolder">صفحه‌ی لاگین</li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-4 col-12 mt-5">
                                    <div className={csS.cardsetting}>
                                        <div className={csS.cardtitle + " w-100 text-center mb-2 pt-2 pb-2"}>
                                            <h4 style={{fontSize: "18px"}}>لوگو</h4>
                                        </div>
                                        <div className="pt-3 pb-3 px-4">
                                            <div className={csS.center}>
                                                <label className="w-75">
                                                    وضعیت : غیرفعال
                                                </label>
                                                <input className={csS.checkboxcustom} type="checkbox" name=""/>
                                                <div className="input-group mb-2 mt-3">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup" placeholder=" "/>
                                                    <div className="input-group-prepend">

                                                        <button className="btn btn-success">انتخاب کنید</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mt-5">
                                    <div className={csS.cardsetting}>
                                        <div className={csS.cardtitle + " w-100 text-center mb-2 pt-2 pb-2"}>
                                            <h4 style={{fontSize: "18px"}}>اسلایدر شگفت‌انگیز</h4>
                                        </div>
                                        <div className="pt-3 pb-3 px-4">
                                            <div className={csS.center}>
                                                <label className="w-75">
                                                    وضعیت : {this.state.checkboxOne}
                                                </label>
                                                <input className={csS.checkboxcustom} type="checkbox" onClick={this.checkactive()}/>
                                                <div className="input-group mb-2 mt-3">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup" placeholder=" "/>
                                                    <div className="input-group-prepend">

                                                        <button className="btn btn-success">انتخاب کنید</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mt-5">
                                    <div className={csS.cardsetting}>
                                        <div className={csS.cardtitle + " w-100 text-center mb-2 pt-2 pb-2"}>
                                            <h4 style={{fontSize: "18px"}}>اسلایدر پیشنهاد لحظه‌ای</h4>
                                        </div>
                                        <div className="pt-3 pb-3 px-4">
                                            <div className={csS.center}>
                                                <label className="w-75">
                                                    وضعیت : غیرفعال
                                                </label>
                                                <input className={csS.checkboxcustom} type="checkbox" name=""/>
                                                <div className="input-group mb-2 mt-3">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup" placeholder=" "/>
                                                    <div className="input-group-prepend">

                                                        <button className="btn btn-success">انتخاب کنید</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                {/* تیتر */}
                            <hr className="mt-5" />
                            <h4 className={csS.titr +" "+csS.titrbiger }>
                                شبکه‌های اجتماعی
                            </h4>
                            </div>

                            {/* فرم ها */}

                            <div className="row g-3">
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-2 w-25">
                                        اینستاگرام
                                    </label>
                                    <input type="text" className="form-control" placeholder=" "
                                           aria-label="Last name"/>
                                </div>
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-2 w-25">
                                        فیسبوک
                                    </label>
                                    <input type="text" className="form-control" placeholder=" "
                                           aria-label="Last name"/>
                                </div>
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-2 w-25">
                                       گوگل پلاس
                                    </label>
                                    <input type="text" className="form-control" placeholder=" "
                                           aria-label="Last name"/>
                                </div>
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-2 w-25">
                                       توییتر
                                    </label>
                                    <input type="text" className="form-control" placeholder=" "
                                           aria-label="Last name"/>
                                </div>
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-2 w-25">
                                      تلگرام
                                    </label>
                                    <input type="text" className="form-control" placeholder=" "
                                           aria-label="Last name"/>
                                </div>
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-2 w-25">
                                      اپارات
                                    </label>
                                    <input type="text" className="form-control" placeholder=" "
                                           aria-label="Last name"/>
                                </div>
                            </div>


                            <div>
                                {/* تیتر */}
                                <hr className="mt-5" />
                                <h4 className={csS.titr}>
                                    اطلاعات تماس
                                </h4>
                            </div>

                            {/* فرم ها */}

                            <div className="row g-3">
                                <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center justify-content-lg-evenly flex-wrap">

                                    <label className="m-3 mx-1">
                                      شماره تماس 1
                                    </label>
                                    <input type="text" className="form-control w-75" placeholder=" "
                                           aria-label="Last name"/>



                                        <label className="m-3 mx-1">
                                            شماره تماس 2
                                        </label>
                                        <input type="text" className="form-control w-75" placeholder=" "
                                               aria-label="Last name"/>


                                </div>
                                <div className="col-lg-6 col-12 d-flex align-items-start flex-wrap flex-lg-nowrap justify-content-lg-evenly justify-content-center">
                                    <label className="mx-4 mt-2">
                                        ادرس
                                    </label>
                                    <textarea className="form-control h-100" id="exampleFormControlTextarea1" rows="3"></textarea>

                                </div>
                            </div>


                            <div className="pt-5 pt-lg-0">
                                {/* تیتر */}
                                <hr className="mt-5" />
                                <h4 className={csS.titr}>
                                    دانلود اپلیکیشن
                                </h4>
                            </div>

                            {/* فرم ها */}

                            <div className="row g-3">
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-4 w-25">
                                       اندروید
                                    </label>
                                    <input type="text" className="form-control" placeholder="لینک دانلود اپلیکیشن اندروید"
                                           aria-label="Last name"/>
                                </div>
                                <div className="col-lg-6 col-12 d-flex align-items-center">
                                    <label className="m-4 w-25">
                                     ای او اس
                                    </label>
                                    <input type="text" className="form-control" placeholder="لینک دانلود اپلیکیشن ای او اس "
                                           aria-label="Last name"/>
                                </div>
                            </div>

                            <div>
                                {/* تیتر */}
                                <hr className="mt-5" />
                                <h4 className={csS.titr}>
                                    مجوزهای درگاه
                                </h4>
                            </div>

                            {/* فرم ها */}

                            <div className="row g-3">
                                <div className="col-12 col-lg d-flex align-items-center">
                                    <textarea className="form-control h-100" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-12 col-lg d-flex align-items-center">
                                    <textarea className="form-control h-100" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-12 col-lg d-flex align-items-center">
                                    <textarea className="form-control h-100" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Dashboard>
        )
    }
}