import React, {Component} from 'react';
import st from "../css/header.module.css"
import mantaghe from '../images/mantaghe.png'
import carticon from '../../admin/icon/shopping-cart.png'
import '../css/global.css'


export default class Header extends Component {

    render() {
        return (
            <section className="m-0 p-0">
                <hr className={st.hrtop}/>
                <div className={st.headertop+" row mr-0 ml-0 p-2 pb-2"}>
                    <div className="col-lg-2 col-12 mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                        <img src={mantaghe} alt="" className="w-75"/>
                    </div>
                    <div className="col-lg-8 col-12 mt-4 mt-lg-0 d-flex justify-content-center align-items-center">

                        <input className={st.search} placeholder="جسنجو"/>

                    </div>
                    <div className="col-lg-2 col-12 mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                        مشاهده سبد خرید

                        <div className={st.lenghtcarts}>
                            <div className={st.lenghtcart}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st.menurow +" row mx-0 py-2"}>
                    <div className={st.menu+" col-12"}>
                    <ul className={"d-flex px-lg-3 px-0"}>
                        <li className="mx-2 px-3">
                            <a href="#">
                                گوشی موبایل
                            </a>
                        </li>
                        <li className="mx-2 px-3">
                            <a href="#">
                            تبلت
                            </a>
                        </li>
                        <li className="mx-2 px-3">
                            <a href="#">
                            لپ تاپ
                            </a>
                        </li>
                        <li className="mx-2 px-3">
                            <a href="#">
                            کنسول بازی
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
        )
    }

}