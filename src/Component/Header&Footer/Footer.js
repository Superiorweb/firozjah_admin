import React, {Component} from 'react';
import st from "../css/Footer.module.css";
import googleplay from '../images/googleplay.png'
import bazar from '../images/bazar.png'
import iconfooters from '../images/iconfooters.png'

export default class Footer extends Component {

    render() {
        return (
            <div style={{background: "#e3e3e3"}} className="row mx-0 pt-5">
                <div className="col-lg-7 col-12">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <ul className={st.footerUi}>
                                <li className="mt-2 pr-1">
                                    منطقه ازاد
                                </li>
                                <li className="mt-2 pr-1">
                                    منطقه
                                </li>
                                <li className="mt-2 pr-1">
                                    درباره ی ما
                                </li>
                                <li className="mt-2 pr-1">
                                    ارتباط با ما
                                </li>
                                <li className="mt-2 pr-1">
                                    حریم خصوصی
                                </li>
                                <li className="mt-2 pr-1">
                                    سوالات متداول
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className={st.footerUi}>
                                <li className="mt-2 pr-1">
                                    خدمات مشتریان
                                </li>
                                <li className="mt-2 pr-1">
                                    منطقه
                                </li>
                                <li className="mt-2 pr-1">
                                    درباره ی ما
                                </li>
                                <li className="mt-2 pr-1">
                                    ارتباط با ما
                                </li>
                                <li className="mt-2 pr-1">
                                    حریم خصوصی
                                </li>
                                <li className="mt-2 pr-1">
                                    سوالات متداول
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className={st.footerUi}>
                                <li className="mt-2 pr-1">
                                    خدمات پس از فروش
                                </li>
                                <li className="mt-2 pr-1">
                                    منطقه
                                </li>
                                <li className="mt-2 pr-1">
                                    درباره ی ما
                                </li>
                                <li className="mt-2 pr-1">
                                    ارتباط با ما
                                </li>
                                <li className="mt-2 pr-1">
                                    حریم خصوصی
                                </li>
                                <li className="mt-2 pr-1">
                                    سوالات متداول
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-12 mt-4 mt-lg-0">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <img src={googleplay} alt="" className="w-100"/>
                        </div>
                        <div className="col-4">
                            <img src={bazar} alt="" className="w-100"/>
                        </div>
                        <div className="col-8 mt-4">
                            <img src={iconfooters} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>


                <div style={{background: "#f1f1f1"}} className="col-12 mt-3 px-0">
                    <div className={st.footeralert+" m-0 py-1 px-3"}>

                        <p className="position-absolute m-0">
                            مزایای منطقه ازاد
                        </p>
                        <p className="text-center w-100 m-0">
                            تضمین بهترین قیمت + بیمه سفارشات + تحویل فوری
                        </p>
                    </div>
                </div>
                <div style={{background: "#f1f1f1"}} className="col-12 py-1 px-0">
                    <div className={st.footeralerttwo+" m-0 py-1 px-3"}>
                        <p className="text-center w-100 m-0">
                            استفاده از مطالب فروشگاه منطقه آزاد با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت منطقه آزاد میباشد
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}