import React from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((playVideo) => !playVideo);
    if(playVideo){
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return(
    <div className='video'>
      <video ref={vidRef} src={meal} type="video/mp4" loop controls={false} muted/>
      <div className="video-overlay flex-center">
        <div className="video-overlay-circle flex-center" onClick={handleVideo}>
          {playVideo 
            ? <BsPauseFill color='#fff' fontSize={30}/>
            : <BsFillPlayFill color='#fff' fontSize={30}/>
          }
        </div>
      </div>
    </div>
  );
}
export default Intro;
