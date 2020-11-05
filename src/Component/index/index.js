import React, {Component} from 'react';
import Header from "../Header&Footer/Header";
import cvx from '../images/imageslide.png'
import cardimage from '../images/cardimage.png'
import st from '../css/style.module.css'
import leftads from '../images/leftads.png'
import rightads from '../images/rightads.png'
import brands from '../images/brands.png'
import bottomads from '../images/Bottomads.png'
import Footer from "../Header&Footer/Footer";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


export default class IndexBase extends Component {

    render() {
        return (
            <div style={{background: "#f2f2f2"}}>
                <Header/>

                <div>
                    <img className="w-100 h-25" src={cvx}/>
                </div>
                <div className="w-100 d-flex justify-content-center p-4">
                    <h3 className={st.headertitle}>پرفروش ترین ها</h3>
                </div>
                <div className="row mr-0 ml-0 px-1">

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        observer= {true}
                        observeParents= {true}
                        parallax={true}
                        pagination={{
                            nextButton:'#next',
                            prevButton:'#perv'
                        }}
                        scrollbar={{draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <div id="perv"   onPrevious={() => this.swipe(-1)} className="swiper-button-prev prevButton"></div>
                        <div id="next"     onNext={() => this.swipe(1)}
                             className="swiper-button-next nextButton "></div>
                        <SwiperSlide>
                            <div className={st.card + " card shadow pt-4"}>
                                <img className="card-img-top" src={cardimage} alt="Card image cap"/>
                                <div className="card-body text-center pt-4">
                                    <h5 className="card-title">Houwei p-10</h5>
                                    <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>
                                    <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={st.card + " card shadow pt-4"}>
                                <img className="card-img-top" src={cardimage} alt="Card image cap"/>
                                <div className="card-body text-center pt-4">
                                    <h5 className="card-title">Houwei p-10</h5>
                                    <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>
                                    <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={st.card + " card shadow pt-4"}>
                                <img className="card-img-top" src={cardimage} alt="Card image cap"/>
                                <div className="card-body text-center pt-4">
                                    <h5 className="card-title">Houwei p-10</h5>
                                    <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>
                                    <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={st.card + " card shadow pt-4"}>
                                <img className="card-img-top" src={cardimage} alt="Card image cap"/>
                                <div className="card-body text-center pt-4">
                                    <h5 className="card-title">Houwei p-10</h5>
                                    <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>
                                    <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={st.card + " card shadow pt-4"}>
                                <img className="card-img-top" src={cardimage} alt="Card image cap"/>
                                <div className="card-body text-center pt-4">
                                    <h5 className="card-title">Houwei p-10</h5>
                                    <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>
                                    <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>

                    {/*<div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-4 d-flex justify-content-center">*/}
                    {/*    <div className={st.card + " card shadow pt-4"}>*/}
                    {/*        <img className="card-img-top" src={cardimage} alt="Card image cap"/>*/}
                    {/*        <div className="card-body text-center pt-4">*/}
                    {/*            <h5 className="card-title">Houwei p-10</h5>*/}
                    {/*            <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>*/}
                    {/*            <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-4 d-flex justify-content-center">*/}
                    {/*    <div className={st.card + " card shadow pt-4"}>*/}
                    {/*        <img className="card-img-top" src={cardimage} alt="Card image cap"/>*/}
                    {/*        <div className="card-body text-center pt-4">*/}
                    {/*            <h5 className="card-title">Houwei p-10</h5>*/}
                    {/*            <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>*/}
                    {/*            <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-4 d-flex justify-content-center">*/}
                    {/*    <div className={st.card + " card shadow pt-4"}>*/}
                    {/*        <img className="card-img-top" src={cardimage} alt="Card image cap"/>*/}
                    {/*        <div className="card-body text-center pt-4">*/}
                    {/*            <h5 className="card-title">Houwei p-10</h5>*/}
                    {/*            <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>*/}
                    {/*            <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-4 d-flex justify-content-center">*/}
                    {/*    <div className={st.card + " card shadow pt-4"}>*/}
                    {/*        <img className="card-img-top" src={cardimage} alt="Card image cap"/>*/}
                    {/*        <div className="card-body text-center pt-4">*/}
                    {/*            <h5 className="card-title">Houwei p-10</h5>*/}
                    {/*            <p className={st.priceCart + " mt-3 mb-0"}> 19000000 تومان</p>*/}
                    {/*            <del className={st.LastpriceCart + " mt-3 mb-0"}> 20000000 تومان</del>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
                <div className="row mx-0 my-5">
                    <div className="col-lg-7 col-12 mt-lg-0 mt-4">
                        <img src={leftads} className="w-100 h-100" alt=""/>
                    </div>
                    <div className="col-lg-5 col-12 mt-lg-0 mt-4">
                        <img src={rightads} alt="" className="w-100 h-100"/>
                    </div>
                </div>
                <div className="row mx-0 px-3">
                    <div style={{borderRadius: "10px"}} className="col-12 bg-white px-0">
                        <img src={brands} className="w-100"/>
                    </div>
                </div>
                <div className="row mx-0 my-5 px-3">
                    <div className="col-12 px-0">
                        <img style={{borderRadius: "18px"}} src={bottomads} className="w-100"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}