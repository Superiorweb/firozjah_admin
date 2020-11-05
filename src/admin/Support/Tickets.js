import React, {Component} from 'react';
import csS from "../Css/Support.module.css";
import file from '../icon/file.png'
import exel from '../icon/excel.png'
import CKEditor from 'ckeditor4-react';
import Dashboard from "../Dashboard/Dashboard";


export default class Tickets extends Component {
    render() {
        return (
            <Dashboard>
            <div className="row mr-0 ml-0 justify-content-center">
                <div className="col-12 col-md-11 mt-5 mb-0 pb-4 bg-white pt-3">
                    <div className="w-100 text-center">
                        <h4>
                            تیکت شماره 84406
                        </h4>
                        <hr/>
                    </div>
                </div>
                <div className="col-12 col-md-11 mb-5 px-2 px-md-5 bg-white">
                    <div className="table-responsive">
                        <table className="table table-light table-striped table-hover table-bordered table-responsive overflow-hidden">
                            <thead>
                            <tr>
                                <th scope="col">ردیف</th>
                                <th scope="col">شماره تیکت</th>
                                <th scope="col">موضوع</th>
                                <th scope="col">شماره همراه</th>
                                <th scope="col">دسته‌بندی </th>
                                <th scope="col">زیردسته</th>
                                <th scope="col">زمان</th>
                                <th scope="col">وضعیت</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td className="text-center">85458</td>
                                <td>متن نمونه</td>
                                <td className="text-center">09905611987</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td className="text-center">1399/8/6</td>
                                <td>متن نمونه</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td className="text-center">85458</td>
                                <td>متن نمونه</td>
                                <td className="text-center">09905611987</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td className="text-center">1399/8/6</td>
                                <td>متن نمونه</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td className="text-center">85458</td>
                                <td>متن نمونه</td>
                                <td className="text-center">09905611987</td>
                                <td>متن نمونه</td>
                                <td>متن نمونه</td>
                                <td className="text-center">1399/8/6</td>
                                <td>متن نمونه</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*پیام جدید*/}

                    <div className="card w-100 text-white mb-3">
                        <div className={csS.headercartTick+" card-header font-weight-bolder text-dark"}>پیام کاربر</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>


                    {/* فایل پیوست شده توسط کاربر */}

                    <div className="card w-100 text-white mb-3">
                        <div className={csS.headercartTick+" card-header font-weight-bolder text-dark"}> فایل‌های پیوست شده توسط کاربر</div>
                        <div className="card-body text-dark">
                       <div className="row">
                           <div className="col-1 text-center">
                               <img className="w-75 mt-1 font-weight-bold" src={exel} alt=" "/>
                               <p className="mt-2">فایل اول</p>
                           </div>
                           <div className="col-1 text-center">
                               <img className="w-75 mt-1 font-weight-bold" src={exel} alt=" "/>
                               <p className="mt-2">فایل اول</p>
                           </div>
                       </div>
                        </div>
                    </div>


                    {/* پاسخ مدیر */}

                    <div className="card w-100 text-white mb-3">
                        <div className={csS.headercartTick+" card-header font-weight-bolder text-dark"}> پاسخ مدیر</div>
                        <div className="card-body text-dark">
                            <CKEditor
                                data="<p></p>"
                                config={{

                                    language: 'fa'

                                }}
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        {/* تیتر */}
                        <hr className="mt-5"/>
                        <h4 className={csS.titr+" w-25"}>
                            فایل‌های پیوست شده

                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-1 text-center">
                            <img className="w-75 mt-1 font-weight-bold" src={exel} alt=" "/>
                            <p className="mt-2">فایل اول</p>
                        </div>
                        <div className="col-1 text-center">
                            <img className="w-75 mt-1 font-weight-bold" src={exel} alt=" "/>
                            <p className="mt-2">فایل اول</p>
                        </div>

                        <div className="col-1 text-center">
                            <label for="uploadimg">
                            <img className="w-75 mt-1 font-weight-bold" src={file} alt=" "/>
                            <p className="mt-2 font-weight-bolder font-monospace">اپلود فایل</p>
                            </label>
                            <input id="uploadimg" style={{display:"none"}} type="file"/>
                        </div>
                        <div className="col-12 d-flex mb-4 justify-content-center">
                            <button className="w-25 mt-3 mb-5 btn btn-success">
                                ثبت
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </Dashboard>
        )
    }
}