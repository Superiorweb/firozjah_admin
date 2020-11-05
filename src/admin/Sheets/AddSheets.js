import React, {Component} from 'react';
import csp from "../Css/Product.module.css";
import cspa from "../Css/Page.module.css";
import remove from '../icon/remove.png'
import plus from '../icon/check-mark.png'
import CKEditor from 'ckeditor4-react';
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";

export default class AddSheets extends Component {
    render() {
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        برگه‌ها | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-11 mt-4 mb-4 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            افزودن برگه
                        </h4>
                        <hr/>
                    </div>

                    <div className="w-100 d-flex mt-5 justify-content-center align-items-center">
                        <label className="ml-5">
                         عنوان
                        </label>
                       <input className="w-100 form-control" type="text"/>
                    </div>
                    <div className="w-100 d-flex mt-4 justify-content-center align-items-center">
                        <label className="ml-5">
                            آدرس
                        </label>
                        <input className="w-100 form-control" type="text"/>
                    </div>
                    <div className="w-100 d-flex mt-4">
                        <label style={{visibility:"hidden"}} className="ml-5 d-md-block d-none">
                         متن
                        </label>
                        <div className="w-100">
                        <CKEditor
                            data="<p></p>"
                            config={{

                                language: 'fa'

                            }}
                        />
                        </div>
                    </div>
                    <div className="w-100 d-flex mt-4 justify-content-center justify-content-md-end align-items-center">
                     <button className="w-25 btn btn-success">
                         ثبت
                     </button>
                    </div>
                </div>
            </div>
            </Dashboard>
        )
    }
}