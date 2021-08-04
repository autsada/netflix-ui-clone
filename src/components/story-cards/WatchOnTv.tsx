import React from 'react'

import StoryCardText from '../shared/StoryCardText'

interface Props {

}

const WatchOnTv: React.FC<Props> = () => {
  return <div className="story-card animation-card watchOnTv">
    <div className="animation-card-container">
      <StoryCardText className='story-card-text-animation' title='Enjoy on your TV.' subtitle='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' />

      <div className="story-card-img-container">
        <div className="story-card-animation-container">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className="story-card-img" />

          <div className="story-card-animation">
            <video className="story-card-video" autoPlay playsInline muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
            <div className="story-card-animation-text"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
}

export default WatchOnTv