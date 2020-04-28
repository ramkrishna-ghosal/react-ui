import React from 'react';

function Header() {
    return (
        <header className="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
            <div className="m-header">
                <a className="mobile-menu" id="mobile-collapse1" href=""><span></span></a>
                <a href="index.html" className="b-brand">
                    <div className="b-bg">
                        A
    </div>
                    <span className="b-title">Admin</span>
                </a>
            </div>
            <a className="mobile-menu" id="mobile-header" href="">
                <i className="feather icon-more-horizontal"></i>
            </a>
            <div className="collapse navbar-collapse">
                <a href="#!" className="mob-toggler"></a>
                <ul className="navbar-nav mr-auto">
                    <li>
                        <div className="page-header">
                            <div className="page-header">
                                <div className="page-block">
                                    <div className="row align-items-center">
                                        <div className="col-md-12">
                                            <div className="page-header-title" style={{textAlign: 'left'}}>
                                                <h5>Home</h5>
                                            </div>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><a><i className="fa fa-home" aria-hidden="true"></i></a></li>
                                                <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="main-search">
                            <div className="input-group">
                                <input type="text" id="m-search" className="form-control" placeholder="Search . . ." />
                                <a href="#!" className="input-group-append search-close">
                                    <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                                </a>
                                <span className="input-group-append search-btn btn btn-primary">
                                    <i className="fa fa-search" aria-hidden="true" style={{ color: 'black' }}></i>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <a className="dropdown-togglee" href="#" data-toggle="dropdown"><i className="fa fa-bell-o" aria-hidden="true"></i></a>
                            <div className="dropdown-menu dropdown-menu-right notification">
                                <div className="noti-head">
                                    <h6 className="d-inline-block m-b-0">Notifications</h6>

                                </div>
                                <ul className="noti-body">
                                    <li className="n-title">
                                        <p className="m-b-0">NEW</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                            <div className="media-body">
                                                <p><strong>John Doe</strong><span className="n-time text-muted"><i className="fa fa-clock-o m-r-10"></i>5 min</span></p>
                                                <p>New ticket Added</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="n-title">
                                        <p className="m-b-0">EARLIER</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                            <div className="media-body">
                                                <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="fa fa-clock-o m-r-10"></i>10 min</span></p>
                                                <p>Prchace New Theme and make payment</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="noti-footer">
                                    <a href="">show all</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a className=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                    <li>
                        <div className="dropdown drp-user">
                            <a href="#" className="dropdown-togglee" data-toggle="dropdown">
                                <i className="fa fa-cog" aria-hidden="true"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right profile-notification">
                                <div className="pro-head">
                                    <img src="../assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                                    <span>Amin</span>
                                    <a href="auth-signin.html" className="dud-logout" title="Logout">
                                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <ul className="pro-body">
                                    <li><a href="#!" className="dropdown-item"><i className="fa fa-cog"></i> Settings</a></li>
                                    <li><a href="#!" className="dropdown-item"><i className="fa fa-user"></i> Profile</a></li>
                                    <li><a href="message.html" className="dropdown-item"><i className="fa fa-envelope-o"></i> My Messages</a></li>

                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
