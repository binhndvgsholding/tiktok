import * as React from 'react';
import { useRef,useState,useEffect } from 'react';
import useElementOnScreen from './useElementOnScreen';
import './home.scss'
import { Link } from 'react-router-dom';
import { 
  FaRegPlayCircle,
  FaPlay,
  FaVolumeUp,
  FaHeart,
  FaCommentDots,
  FaShare,
  
} from "react-icons/fa";
const ContentVideo = () =>{

  const videoRef = useRef() ;
  const [playing , setPlaying] = useState(false) ;
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
  const isVisibile = useElementOnScreen(options, videoRef) ;
  const handleVideo = () =>{
    if(playing) {
      videoRef.current.pause();
      setPlaying(!playing)
    }else{
      videoRef.current.play()
      setPlaying(!playing)
    }
  }
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play();
        setPlaying(true) ;
        
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile]) ;
  
  return (
    <div className='recommend-list-item-container'>
    <Link to='/upload' className='avatar-anchor'>
        <div className='tiktok-uha12h-DivContainer'>
            <span className='tiktok-13abja1-SpanAvatarContainer-StyledAvatar'>
                <img 
                  alt='avatar-anchor' 
                  className='tiktok-1zpj2q-ImgAvatar'
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/135cb3f9d579d91ff6bc5b58a6ba7cfc~c5_100x100.jpeg?x-expires=1672970400&x-signature=U0mcj8Tf%2FdOwJqqCfK5%2FUd%2Be8B8%3D" 
                />
            </span>
        </div>
    </Link>
    <div className='tiktok-10gdph9-DivContentContainer'>
        <div className='tiktok-1hhj6ie-DivTextInfoContainer'>
            <div className='tiktok-1mnwhn0-DivAuthorContainer'>
                <Link to='/upload' className='avatar-anchor tiktok-k03g04'>
                    <div className='tiktok-uha12h-DivContainer'>

                    </div>  
                </Link>
                <Link to='/upload' className='tiktok-1lqhxf7-StyledAuthorAnchor'>
                    <h3 className='tiktok-debnpy-H3AuthorTitle'>
                        hungdocau
                    </h3>
                    <h4 className='tiktok-7uj1aq-H4AuthorName'>
                        Hưng Đồ Câu
                    </h4>
                </Link>
            </div>
            <button 
              type='button'
              className='tiktok-jubmfa-Button-StyledFollowButton'
            >
                Follow
            </button>
            <div className='tiktok-1ejylhp-DivContainer'>
                <span className='tiktok-j2a19r-SpanText'>
                  Cô dâu 
                </span>
                <Link to='/upload' className='tiktok-q3q1i1-StyledCommonLink'>
                      <strong className='tiktok-f9vo34-StrongText'>
                          @Lê Thị Khánh Huyền
                      </strong>
                </Link>
                <span className='tiktok-j2a19r-SpanText '>
                    trong veo cung chú rể Bụt ☺️☺️☺️ 
                </span>
                <Link to='/upload' className='tiktok-q3q1i1-StyledCommonLink'>
                      <strong className='tiktok-f9vo34-StrongText'>
                          #codauxinh
                      </strong>
                </Link>
                <span className='tiktok-j2a19r-SpanText'></span>
            </div>
            <h4 className='tiktok-zo4ukd-H4Link'>
                <Link className='tiktok-812w79-SvgIcon'>
                    <FaRegPlayCircle  className='tiktok-812w79-SvgIcon'/>
                    nhạc nền  - Hiwon Makeup & Academy
                </Link>
            </h4>
        </div>
        <div className='tiktok-kd7foj-DivVideoWrapper'>
            <div className='tiktok-1t973hv-DivVideoCardContainer'>
                <canvas className='tiktok-196h150-CanvasVideoCardPlaceholder'></canvas>
                <div className='tiktok-3g8031-DivVideoPlayerContainer'>
                    <div className='tiktok-yf3ohr-DivContainer'>
                        <img
                            className='tiktok-1itcwxg-ImgPoster'
                            alt="Cô dâu @Lê Thị Khánh Huyền trong veo cung chú rể Bụt ☺️☺️☺️ #codauxinh"
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/eb0ce8723d824833a4f82ec0dbaa7334_1672562179~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1672819200&x-signature=%2F9nJQHfnVv89S0LjVi6zblekgLM%3D" />
                        <div className='tiktok-13egybz-DivBasicPlayerWrapper'>
                            <div className='xgplayer-container'>
                                <video 
                                  loop
                                  ref={videoRef}
                                  onClick={handleVideo}
                                  src="https://v16-webapp.tiktok.com/577a8aa80cf634e5f16acb1606e718ec/63b67acb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oYYzpgK0jNDe6XXlBJeDQbnOCsAVImroQ3b7Pu/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2390&bt=1195&cs=0&ds=3&ft=4b~OyM3a8Zmo0rkUf64jVxgbjpWrKsdm&mime_type=video_mp4&qs=0&rc=MzU5ZWc0O2Q1NmUzZWU2OUBpM2VpdTc6Zm1oaDMzZjgzM0AyXzRhY2ItXy0xLS41YF8uYSNxby5xcjRnYW1gLS1kL2Nzcw%3D%3D&l=202301050122128031B6F770DC300217AB&btag=80000"></video>
                            </div>
                        </div>
                    </div>
                    <div className='tiktok-mlcjt3-DivPlayIconContainer-StyledDivPlayIconContainer'>
                        <FaPlay/>
                    </div>
                    <div className='tiktok-q09c19-DivVoiceControlContainer'>
                        <div className='tiktok-105iyqb-DivMuteIconContainer'>
                            <FaVolumeUp />
                        </div>
                    </div>
                    <div className='tiktok-fxqf0v-DivVideoControlBottom'></div>
                </div>
            </div>
            <div className='tiktok-wc6k4c-DivActionItemContainer'>
                <button className='tiktok-1ok4pbl-ButtonActionItem'>
                    <span className='tiktok-12vi4up-SpanIconWrapper'>
                        <FaHeart className=''/>
                    </span>
                    <strong className='tiktok-14xas1m-StrongText '>171.3K</strong>
                </button>
                <button className='tiktok-1ok4pbl-ButtonActionItem'>
                    <span className='tiktok-12vi4up-SpanIconWrapper'>
                        <FaCommentDots className=''/>
                    </span>
                    <strong className='tiktok-14xas1m-StrongText '>490</strong>
                </button>
                <button className='tiktok-1ok4pbl-ButtonActionItem'>
                    <span className='tiktok-12vi4up-SpanIconWrapper'>
                        <FaShare className=''/>
                    </span>
                    <strong className='tiktok-14xas1m-StrongText '>490</strong>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
export default function Home() {

  return (
    <section className='tiktok-content'>
        <ContentVideo />     
        <ContentVideo/>     
        <ContentVideo />     
        <ContentVideo />     
        <ContentVideo />     
    </section>
  );
}