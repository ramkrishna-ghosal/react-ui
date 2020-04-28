import React, { Component } from 'react';
import VisitorSession from './VisitorSession/VisitorSession';

class Main extends Component {
    render() {
        return (
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <div className="main-body">
                                <div className="page-wrapper">

                                    {/* <div className="page-header">
                                        <div className="page-block">
                                            <div className="row align-items-center">
                                                <div className="col-md-12">
                                                    <div className="page-header-title">
                                                        <h5>Home</h5>
                                                    </div>
                                                    <ul className="breadcrumb">
                                                        <li className="breadcrumb-item"><a><i className="fa fa-home" aria-hidden="true"></i></a></li>
                                                        <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}


                                    <div className="row">
                                        <div className="col-xl-8 col-md-12">
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="card table-card">
                                                        <div className="row-table">
                                                            <div className="col-sm-6 card-body-big br">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-eye text-c-green mb-1 d-block" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>10k</h5>
                                                                        <span>Visitors</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 card-body-big">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-music text-c-red mb-1 d-block" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>100%</h5>
                                                                        <span>Volume</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row-table">
                                                            <div className="col-sm-6 card-body-big br">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-file-text-o text-c-blue mb-1 d-block" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>2000 +</h5>
                                                                        <span>Files</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 card-body-big">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-envelope-o text-c-yellow mb-1 d-block"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>120</h5>
                                                                        <span>Mails</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-6">
                                                    <div className="card table-card">
                                                        <div className="row-table">
                                                            <div className="col-sm-6 card-body-big br">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-share-alt text-c-purple mb-1 d-block"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>1000</h5>
                                                                        <span>Shares</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 card-body-big">
                                                                <div className="row ">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-wifi text-c-purple mb-1 d-block"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>600</h5>
                                                                        <span>Network</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row-table">
                                                            <div className="col-sm-6 card-body-big br">
                                                                <div className="row ">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-undo text-c-purple mb-1 d-block"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>3550</h5>
                                                                        <span>Returns</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 card-body-big">
                                                                <div className="row ">
                                                                    <div className="col-sm-4">
                                                                        <i className="fa fa-shopping-cart text-c-purple mb-1 d-blockz"></i>
                                                                    </div>
                                                                    <div className="col-sm-8 text-md-center">
                                                                        <h5>100%</h5>
                                                                        <span>Order</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h6 className="text-c-blue mb-3">Department wise annual recurring and profit </h6>
                                                            <div className="row">
                                                                <div className="col-auto mb-3">
                                                                    <h3>$687,578</h3>
                                                                    <h6><i className="fa fa-line-chart text-c-red mr-2"></i>Marketing Growth</h6>
                                                                    <span>Measure How Fast You're Growing in <br />current Market.<span className="text-c-blue">Learn More</span></span>
                                                                </div>
                                                                <div className="col mb-3">
                                                                    <h3>30%</h3>
                                                                    <h6><i className="fa fa-line-chart text-c-blue mr-2"></i>Annual profit/stakeholders</h6>
                                                                    <span>Ave 30% or more profite provide to investor as <br />Anual return.<span className="text-c-blue">Learn More</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="account-chart" style={{ height: '215px', width: '100%' }}></div>
                                                    </div>
                                                </div>


                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5>Sale report of year</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div id="type-chart" style={{ height: '170px' }}></div>
                                                            <div className="mt-3">
                                                                <span className="d-block mb-2"><i className="fa fa-circle f-10 m-r-15" style={{ color: '#67b7dc' }}></i>Desktop Computers<span className="float-right f-w-400">76.7%</span></span>
                                                                <span className="d-block mb-2"><i className="fa fa-circle f-10 m-r-15" style={{ color: '#8067dc' }}></i>Smartphones<span className="float-right f-w-400">15%</span></span>
                                                                <span className="d-block"><i className="fa fa-circle f-10 m-r-15" style={{ color: '#dc67ce;' }}></i>Tablets<span className="float-right f-w-400">30%</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <h6>Conversions <span className="text-muted">( purchased )</span></h6>
                                                                    <h4 className="m-0">0.85%<span className="text-c-blue ml-2"><i className="fa fa-long-arrow-up"></i>0.50%</span></h4>
                                                                </div>
                                                                <div id="coversions-chart1" style={{ height: '60px', width: '100%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5>Visits by Location</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div id="am-map-chart" style={{ height: '285px', width: '100%' }}></div>
                                                            <div className="row mb-2 mt-3">
                                                                <div className="col">
                                                                    <p className="m-0"><i className="fa fa-circle text-c-blue f-10 m-r-10"></i>USA</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="m-0">8.2 k</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="text-c-blue m-0"><i className="fa fa-long-arrow-up"></i>8%</p>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-2">
                                                                <div className="col">
                                                                    <p className="m-0"><i className="fa fa-circle text-c-red f-10 m-r-10"></i>India</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="m-0">7.2 k</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="text-c-red m-0"><i className="fa fa-long-arrow-up"></i>5%</p>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-2">
                                                                <div className="col">
                                                                    <p className="m-0"><i className="fa fa-circle text-c-green f-10 m-r-10"></i>China</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="m-0">9.2 k</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="text-c-green m-0"><i className="fa fa-long-arrow-up"></i>6%</p>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-2">
                                                                <div className="col">
                                                                    <p className="m-0"><i className="fa fa-circle text-c-yellow f-10 m-r-10"></i>Brazil</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="m-0">3.2 k</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="text-c-yellow m-0"><i className="fa fa-long-arrow-up"></i>4%</p>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-2">
                                                                <div className="col">
                                                                    <p className="m-0"><i className="fa fa-circle text-c-purple f-10 m-r-10"></i>Other</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="m-0">4.2 k</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p className="text-c-purple m-0"><i className="fa fa-long-arrow-up"></i>3%</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-12">
                                            <div className="row">

                                                <div className="col-xl-6 col-md-6">
                                                    <div className="card bg-primary text-white mrr-card">
                                                        <div className="card-body mb-3">
                                                            <span>Average Support Requests</span>
                                                        </div>
                                                        <div id="average-chart1" className="position-absolute bottom-chart" style={{ height: '145px', width: '100%' }}></div>
                                                        <div className="card-body">
                                                            <h3 className="mt-1 mb-1 text-white">20</h3>
                                                            <span>Solve: 15</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="card bg-success text-white mrr-card">
                                                        <div className="card-body mb-3">
                                                            <span>Quick Agent Response</span>
                                                        </div>
                                                        <div id="average-chart2" className="position-absolute bottom-chart" style={{ height: '145px', width: '100%' }}></div>
                                                        <div className="card-body">
                                                            <h3 className="mt-1 mb-1 text-white">30 min</h3>
                                                            <span>remain: 3</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h6 className="mb-3">Users by time of day [current 1236]</h6>
                                                            <div id="time-user" style={{ height: '460px', width: '100%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <span>Revenue</span>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <div className="btn-group">
                                                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">This month</button>
                                                                        <div className="dropdown-menu">
                                                                            <a className="dropdown-item" href="">1 Week</a>
                                                                            <a className="dropdown-item" href="">2 Month</a>
                                                                            <a className="dropdown-item" href="">4 Year</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress mt-4" style={{ height: '10px' }}>
                                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <span className="text-uppercase mt-2 d-block">EARNING</span>
                                                                    <h5 className="mb-0">$6.455</h5>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <span className="text-uppercase mt-2 d-block">EXPENSE</span>
                                                                    <h5 className="mb-0">$3.869</h5>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <span className="text-uppercase d-block">budget</span>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <span className="text-uppercase d-block">EARNING</span>
                                                                    <h5 className="mb-0">$5,569 of $1,000</h5>
                                                                </div>
                                                            </div>
                                                            <div className="progress mt-2" style={{ height: '10px' }}>
                                                                <div className="progress-bar bg-success rounded" role="progressbar" style={{ width: '50%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">40%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h6 className="mb-0"><i className="fa fa-long-arrow-down text-c-red"></i>$2,450<span className="float-right"><i className="fa fa-long-arrow-up text-c-green"></i>$5,420</span></h6>
                                                            <div className="progress mt-1" style={{ height: '6px' }}>
                                                                <div className="progress-bar bg-danger rounded" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="mt-1 d-block mb-3">This Year<span className="float-right">Previous Year</span></span>
                                                            <span className="mb-2 d-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
                                                            {/* <!-- <h6 className="text-c-red">Landing page design</h6> --> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                       <VisitorSession/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }

}

export default Main;
