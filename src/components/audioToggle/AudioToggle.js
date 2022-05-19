import React, {useState} from 'react';
import './AudioToggle.css';
import Music from '../../assets/Audio/music-1.mp3';
import {SiAudiomack} from 'react-icons/si';

const AudioToggle = () => {
  const [audio] = useState(new Audio(Music));
  const [isPlaying, setIsPlaying] = useState(false);
  // const [styling, setStyling] = useState('stroke-2')
  const playPause = () => {
    if (isPlaying){
      audio.pause()
      // setStyling('stroke-1')
    } else {
      audio.play()
      // setStyling('stroke-2')
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <div className='audioIconWrap'> 
      {
        isPlaying 
        ?
        // <div className="loader" onClick={playPause}>
        //   <span className={styling}></span>
        //   <span className={styling}></span>
        //   <span className={styling}></span>
        //   <span className={styling}></span>
        //   <span className={styling}></span>
        //   <span className={styling}></span>
        //   <span className={styling}></span>
        // </div>
        <div className="loader" onClick={playPause}>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
        </div>
        :
        <SiAudiomack className='audioIcon' onClick={playPause}/>
      }
    
    </div>
  )
}

export default AudioToggle