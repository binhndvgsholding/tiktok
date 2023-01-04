import { Link } from 'react-router-dom'
import { 
    FaSearch, 
    FaPlus, 
    FaPaperPlane,
    FaRegCommentAlt
} from "react-icons/fa";
import './Header.scss'
function Header(){
    return (
        <header  className="header-top" >
            <div className='tiktok-logo'>
                <Link to="/">
                    <img className='logo' alt='logo'src='/img/1200px-TikTok_logo.svg.png' />
                </Link>
            </div>
            <div className='tiktok-thiumz-DivSearchFormContainer '>
                <div className='tiktok-1h3oqen-DivHeaderCenterContainer'>
                    <form className='fromSearch'>
                                <input
                                    type="search"
                                    className='searchInput' 
                                    placeholder="Search accounts and videos"
                                    
                                />
                                <span className='tiktok-hck1rr-SpanSpliter'></span>
                                <button className='search-button' type='submit'>
                                    <FaSearch className='icon-search' />
                                </button>
                    </form> 
                </div>
                   
            </div>
            <div  className='tiktok-ba55d9-DivHeaderRightContainer'>
                <div className='upload-icon'>
                    <Link  to='/upload'>
                        <div className='tiktok-1qup28j-DivUpload' >
                            <FaPlus />
                            <span className='tiktok-y3rt08-SpanUploadText'>Upload</span>
                        </div>
                    </Link>
                </div>
                <div className='top-dm-icon'>
                    <Link  to='/upload'>
                        <span className='tiktok-9oofjg-StyledIcon'><FaPaperPlane/></span>
                    </Link>
                </div>
                <div className='inbox-icon'>
                    <Link  to='/upload'>
                        <span className='tiktok-9oofjg-StyledIcon'><FaRegCommentAlt/></span>
                    </Link>
                </div>
                <div className='profile-icon'>
                    
                </div>
            </div>
        </header>
    )
}

export default Header