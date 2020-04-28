import React from 'react';

function HeaderUserList() {
    return (
        <section className="header-user-list">
            <a href="#!" className="h-close-text"><i className="feather icon-x"></i></a>
            <ul className="nav nav-tabs" id="chatTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active text-uppercase" id="chat-tab" data-toggle="tab" href="" role="tab" aria-controls="chat" aria-selected="true"><i className="feather icon-message-circle mr-2"></i>Chat</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-uppercase" id="user-tab" data-toggle="tab" href="" role="tab" aria-controls="user" aria-selected="false"><i className="feather icon-users mr-2"></i>User</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-uppercase" id="setting-tab" data-toggle="tab" href="" role="tab" aria-controls="setting" aria-selected="false"><i className="feather icon-settings mr-2"></i>Setting</a>
                </li>
            </ul>
            <div className="tab-content" id="chatTabContent">
                <div className="tab-pane fade show active" id="chat" role="tabpanel" aria-labelledby="chat-tab">
                    <div className="h-list-header">
                        <div className="input-group">
                            <input type="text" id="search-friends" className="form-control" placeholder="Search Friend . . ." />
                        </div>
                    </div>
                    <div className="h-list-body">
                        <div className="main-friend-cont scroll-div">
                            <div className="main-friend-list">
                                <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image " />
                                        <div className="live-status">3</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                        <div className="live-status">1</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                        <div className="live-status">1</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-4.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image " />
                                        <div className="live-status">3</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                        <div className="live-status">1</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                        <div className="live-status">1</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-4.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image " />
                                        <div className="live-status">3</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                        <div className="live-status">1</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="user" role="tabpanel" aria-labelledby="user-tab">
                    <div className="h-list-body">
                        <div className="main-friend-cont scroll-div">
                            <div className="main-friend-list">
                                <div className="media px-3 d-flex align-items-center mt-3">
                                    <a className="media-left m-r-15" href="#!">
                                        <div className="hei-50 wid-50 bg-primary img-radius d-flex text-white f-22 align-items-center justify-content-center"><i className="icon feather icon-users"></i></div>
                                    </a>
                                    <div className="media-body">
                                        <p className="chat-header f-w-600 mb-0">New Group</p>
                                    </div>
                                </div>
                                <div className="media p-3 d-flex align-items-center">
                                    <a className="media-left m-r-15" href="#!">
                                        <div className="hei-50 wid-50 bg-primary img-radius d-flex text-white f-22 align-items-center justify-content-center"><i className="icon feather icon-user-plus"></i></div>
                                    </a>
                                    <div className="media-body">
                                        <p className="chat-header f-w-600 mb-0">New Contact</p>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image " /></a>
                                    <div className="media-body">
                                        <p className="chat-header">Josephin Doe<small className="d-block">i am not what happened . .</small></p>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Lary Doe<small className="d-block">Avalable</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Alice<small className="d-block">hear using Elite able</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                    <a className="media-left" href="#!">
                                        <div className="hei-50 wid-50 img-radius bg-success d-flex text-white f-22 align-items-center justify-content-center">A</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Alia<small className="d-block text-muted">Avalable</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-4.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Suzen<small className="d-block text-muted">Avalable</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                    <a className="media-left" href="#!">
                                        <div className="hei-50 wid-50 bg-danger img-radius d-flex text-white f-22 align-items-center justify-content-center">JD</div>
                                    </a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Josephin Doe<small className="d-block text-muted">Don't send me image</small></h6>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                    <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" /></a>
                                    <div className="media-body">
                                        <h6 className="chat-header">Lary Doe<small className="d-block text-muted">not send free msg</small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                    <div className="p-4 main-friend-cont scroll-div">
                        <h6 className="mt-2"><i className="feather icon-monitor mr-2"></i>Desktop settings</h6>
                        <hr />
                        <div className="form-group mb-0">
                            <div className="switch switch-primary d-inline m-r-10">
                                <input type="checkbox" id="cn-p-1" defaultChecked />
                                <label htmlFor="cn-p-1" className="cr"></label>
                            </div>
                            <label className="f-w-600">Allow desktop notification</label>
                        </div>
                        <p className="text-muted ml-5">you get lettest content at a time when data will updated</p>
                        <div className="form-group mb-0">
                            <div className="switch switch-primary d-inline m-r-10">
                                <input type="checkbox" id="cn-p-5" />
                                <label htmlFor="cn-p-5" className="cr"></label>
                            </div>
                            <label className="f-w-600">Store Cookie</label>
                        </div>
                        <h6 className="mb-0 mt-5"><i className="feather icon-layout mr-2"></i>Application settings</h6>
                        <hr />
                        <div className="form-group mb-0">
                            <div className="switch switch-primary d-inline m-r-10">
                                <input type="checkbox" id="cn-p-3" defaultChecked />
                                <label htmlFor="cn-p-3" className="cr"></label>
                            </div>
                            <label className="f-w-600">Backup Storage</label>
                        </div>
                        <p className="text-muted mb-0 ml-5">Automaticaly take backup as par schedule</p>
                        <div className="form-group mb-4">
                            <div className="switch switch-primary d-inline m-r-10">
                                <input type="checkbox" id="cn-p-4" defaultChecked />
                                <label htmlFor="cn-p-4" className="cr"></label>
                            </div>
                            <label className="f-w-600">Allow guest to print file</label>
                        </div>
                        <h6 className="mb-0 mt-5"><i className="feather icon-globe mr-2"></i>System settings</h6>
                        <hr />
                        <div className="form-group mb-0">
                            <div className="switch switch-primary d-inline m-r-10">
                                <input type="checkbox" id="cn-p-2" />
                                <label htmlFor="cn-p-2" className="cr"></label>
                            </div>
                            <label className="f-w-600">View other user chat</label>
                        </div>
                        <p className="text-muted ml-5">Allow to show public user message</p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderUserList;
