import { Link } from 'react-router-dom'
import { 
    FaHome,
    FaUserFriends,
    FaVideo,
    FaRegCheckCircle,
    FaRegPlayCircle
} from "react-icons/fa";
import './Sidebar.scss'
function Sidebar(){
    return (
        <nav className='tiktok-r0hg2a-DivSideNavContainer'>
           <div className='tiktok-1a4urrd-DivWrapper '>
                <div className='tiktok-DivScrollContainer-StyledScroll'>
                    <div className='tiktok-1inll25-DivMainNavContainer'>
                        <div>
                            <Link to='/upload' className='tiktok-1s4a8it-StyledTmpLink'>
                                <FaHome className='icon-sidebar' />
                                <h2 className='tiktok-lhjwdg-H2MainNavText'>For You</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to='/upload' className='tiktok-1s4a8it-StyledTmpLink'>
                                <FaUserFriends className='icon-sidebar' />
                                <h2 className='tiktok-lhjwdg-H2MainNavText'>Following</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to='/upload' className='tiktok-1s4a8it-StyledTmpLink'>
                                <FaVideo className='icon-sidebar' />
                                <h2 className='tiktok-lhjwdg-H2MainNavText'>LIVE</h2>
                            </Link>
                        </div>
                    </div>
                    <div className ='tiktok-he1edq-DivUserContainer'>
                        <p className='suggest-accounts'>Suggested accounts</p>
                        <div className= 'tiktok-1mo2fkg-DivUserLinkContainer'>
                            <Link to="/upload" className='suggest-user-avatar'>
                                <div className='tiktok-n1lhfn-DivContainer-StyledUserAvatar'>
                                    <span className='tiktok-13abja1-SpanAvatarContainer-StyledAvatar'>
                                        <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1672909200&x-signature=xTQCpKUwCcND7VPL90RPSOinOKI%3D' className='tiktok-1zpj2q-ImgAvatar e1e9er4e1' />
                                    </span>
                                </div>
                            </Link>
                            <Link to="/upload" className='tiktok-1g0yu4c-StyledUserContentLink'>
                                <div className='tiktok-yt7cul-DivUserTitleWrapper' >
                                    <h4 className='suggest-user-title'>theanh28entertainment</h4>
                                    <div className='suggest-user-bluev'>
                                        <FaRegCheckCircle className='tiktok-shsbhf-StyledVerifyBadge'/>
                                    </div>
                                </div>
                                <p className='suggest-user-desc'>Theanh28</p>
                            </Link>
                        </div>
                        <div className= 'tiktok-1mo2fkg-DivUserLinkContainer'>
                            <Link to="/upload" className='suggest-user-avatar'>
                                <div className='tiktok-n1lhfn-DivContainer-StyledUserAvatar'>
                                    <span className='tiktok-13abja1-SpanAvatarContainer-StyledAvatar'>
                                        <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1672909200&x-signature=xTQCpKUwCcND7VPL90RPSOinOKI%3D' className='tiktok-1zpj2q-ImgAvatar e1e9er4e1' />
                                    </span>
                                </div>
                            </Link>
                            <Link to="/upload" className='tiktok-1g0yu4c-StyledUserContentLink'>
                                <div className='tiktok-yt7cul-DivUserTitleWrapper' >
                                    <h4 className='suggest-user-title'>theanh28entertainment</h4>
                                    <div className='suggest-user-bluev'>
                                        <FaRegCheckCircle className='tiktok-shsbhf-StyledVerifyBadge'/>
                                    </div>
                                </div>
                                <p className='suggest-user-desc'>Theanh28 </p>
                            </Link>
                        </div>
                    </div>
                    <div className='tiktok-he1edq-DivUserContainer'>
                        <p className='following-accounts'>
                            Following accounts
                        </p>
                        <p className='tiktok-1qkr43s-PFollowEmptyHint'>
                            Accounts you follow will appear here 
                        </p>
                    </div>
                    <div className='tiktok-jvyzjv-DivDiscoverContainer'>
                        <p className='nav-discover-title'>
                            Discover
                        </p>
                        <div className='nav-discover-list'>
                            <Link to='/upload' className='nav-discover-href'>
                                <div className='tiktok-1avbtpl-DivDiscoverItemContainer'>
                                   <FaRegPlayCircle className='tiktok-1hy6k9f-StyledNumber' /> 
                                   <p className='tiktok-e841qv-PText'>suthatla</p>
                                </div>
                            </Link>
                            <Link to='/upload' className='nav-discover-href'>
                                <div className='tiktok-1avbtpl-DivDiscoverItemContainer'>
                                   <FaRegPlayCircle className='tiktok-1hy6k9f-StyledNumber' /> 
                                   <p className='tiktok-e841qv-PText'>suthatla</p>
                                </div>
                            </Link>
                            <Link to='/upload' className='nav-discover-href'>
                                <div className='tiktok-1avbtpl-DivDiscoverItemContainer'>
                                   <FaRegPlayCircle className='tiktok-1hy6k9f-StyledNumber' /> 
                                   <p className='tiktok-e841qv-PText'>suthatla</p>
                                </div>
                            </Link>
                            <Link to='/upload' className='nav-discover-href'>
                                <div className='tiktok-1avbtpl-DivDiscoverItemContainer'>
                                   <FaRegPlayCircle className='tiktok-1hy6k9f-StyledNumber' /> 
                                   <p className='tiktok-e841qv-PText'>suthatla</p>
                                </div>
                            </Link>
                            <Link to='/upload' className='nav-discover-href'>
                                <div className='tiktok-1avbtpl-DivDiscoverItemContainer'>
                                   <FaRegPlayCircle className='tiktok-1hy6k9f-StyledNumber' /> 
                                   <p className='tiktok-e841qv-PText'>suthatla</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div> 
        </nav>
    )
}

export default Sidebar