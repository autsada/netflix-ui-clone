import React from 'react'

import StoryCardText from '../shared/StoryCardText'

interface Props {

}

const WatchOnDevice: React.FC<Props> = () => {
  return <div className="story-card animation-card watchOnDevice">
    <div className="animation-card-container">
      <StoryCardText className='story-card-text-animation' title='Watch everywhere.' subtitle='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' />

      {/* <div className="story-card-img-container">
      <div className="story-card-animation-container">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className="story-card-img" />

        <div className="story-card-animation">
          <video className="story-card-video" autoPlay playsInline muted loop>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
          </video>
          <div className="story-card-animation-text"></div>
        </div>
      </div>

    </div> */}
    </div>
  </div>
}

export default WatchOnDevice