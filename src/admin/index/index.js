import React, {Component} from 'react'
import shop from '../icon/shop.png'
import management from '../icon/management.png'
import customer from '../icon/customer.png'
import cartshopping from '../icon/shopping-cart.png'
import product from '../icon/product.png'
import rejected from '../icon/rejected.png'
import servicecustomer from '../icon/customer-service.png'
import csi from '../Css/index.module.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Dashboard from "../Dashboard/Dashboard";
import {Helmet} from "react-helmet";
import kalahayfrokh from '../icon/kalahaye forokhte shode.png'
import user from '../icon/manager.png'

export default class Index extends Component {
    render() {
        const data = [
            {
                name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
                name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
                name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
            {
                name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
            },
            {
                name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
            },
            {
                name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
            },
            {
                name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
            },
        ];
        return (
            <Dashboard>
                <Helmet>
                    <title>
                        پیشخوان | فروشگاه اینترنتی فیروزجاه
                    </title>
                </Helmet>
            <div className="row mr-0 ml-0 justify-content-center mt-5">
                <div style={{fontSize: "1.4vw"}}
                     className="col-11 rounded-top bg-white text-center font-weight-bold pt-3">
                    پیشخوان
                    <hr/>
                </div>

                <div className="col-11 rounded-bottom pb-4 bg-white">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                        مدیران
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={management} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                            546
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                        کاربران
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={user} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                            546
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                        مشتریان
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={customer} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                          50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                        تأمين‌کنندگان
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={shop} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                            546
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                        محصولات
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={product} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                            546
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                        کالاهای فروخته شده
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={kalahayfrokh} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                            546
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                        کالاهای برگشتی
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={rejected} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                            546
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className={csi.card + " pt-2 border pb-2"}>
                                <div className="text-center">
                                    <h5 className="font-weight-bold">
                                   پشتیبانی
                                    </h5>
                                    <div className="row mt-4">
                                        <div className="col-6 text-center">
                                            <img className="w-50" src={servicecustomer} alt=""/>
                                        </div>
                                        <div className={csi.countcard + " col-6 text-center d-flex align-items-center"}>
                                            546
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-11 mt-5">
                    <div className="row">
                        <div className="col-lg-12 col-12 ">
                            <table className={csi.tbodydash + " table rounded table-hover table-light table-bordered"}>
                                <thead>
                                <tr>
                                    <th>
                                        زمان
                                    </th>
                                    <th>
                                        بازديدکنندگان
                                    </th>
                                    <th>
                                        بازديدها
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        آنلاين
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        900
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        امروز
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        900
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        دیروز
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        900
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        در هفته
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        900
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       365 روز گذشته
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        900
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                      بازدید کل
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        900
                                    </td>
                                </tr>

                                </tbody>
                            </table>

                        </div>
                        <div className="col-lg-12 d-lg-block d-none col-12  mb-3">
                            <div className="bg-white rounded pt-4">
                                <LineChart
                                    width={900}
                                    height={500}
                                    data={data}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                                </LineChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Dashboard>
        )
    }
}
