import React from 'react';

function HeaderChat() {
    return (
        <section className="header-chat">
            <div className="h-list-header">
                <h6>Josephin Doe</h6>
                <a href="#!" className="h-back-user-list"><i className="feather icon-chevron-left"></i></a>
            </div>
            <div className="h-list-body">
                <div className="main-chat-cont scroll-div">
                    <div className="main-friend-chat">
                        <div className="media chat-messages">
                            <a className="media-left photo-table" href="#!">
                                <img className="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" /></a>
                            <div className="media-body chat-menu-content">
                                <div className="">
                                    <p className="chat-cont">hello tell me something</p>
                                    <p className="chat-cont">about yourself?</p>
                                </div>
                                <p className="chat-time">8:20 a.m.</p>
                            </div>
                        </div>
                        <div className="media chat-messages">
                            <div className="media-body chat-menu-reply">
                                <div className="">
                                    <p className="chat-cont">Ohh! very nice</p>
                                </div>
                                <p className="chat-time">8:22 a.m.</p>
                            </div>
                            <a className="media-right photo-table" href="#!"><img className="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image" /></a>
                        </div>
                        <div className="media chat-messages">
                            <a className="media-left photo-table" href="#!"><img className="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" /></a>
                            <div className="media-body chat-menu-content">
                                <div className="">
                                    <p className="chat-cont">can you help me?</p>
                                </div>
                                <p className="chat-time">8:20 a.m.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-list-footer">
                <div className="input-group">
                    <input type="file" className="chat-attach" style={{display:'none'}} />
                    <a href="#!" className="input-group-prepend btn btn-success btn-attach">
                        <i className="feather icon-paperclip"></i>
                    </a>
                    <input type="text" name="h-chat-text" className="form-control h-send-chat" placeholder="Write hear . . " />
                    <button type="submit" className="input-group-append btn-send btn btn-primary">
                        <i className="feather icon-message-circle"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeaderChat;
