import React from 'react';

function SideBar() {
    return (
        <nav className="pcoded-navbar menupos-fixed">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <a href="index.html" className="b-brand">
                        <div className="b-bg">
                            A
          </div>
                        <span className="b-title">Admin</span>
                    </a>
                    <a className="mobile-menu" id="mobile-collapse" href="#!"
                    ><span></span
                    ></a>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>

                        <li className="nav-item pcoded-hasmenuu">
                            <a href="#!" className="nav-link"><span className="pcoded-micon"><i className="fa fa-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                            <ul className="pcoded-submenu">
                                <li className=""><a href="" className="">Analytics</a></li>
                                <li className=""><a href="" className="">Sales</a></li>
                                <li className=""><a href="" className="">Crypto</a></li>
                                <li className=""><a href="" className="">Project</a></li>
                                <li className=""><a href="" className="">Helpdesk</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;
