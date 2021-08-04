import React from 'react'

import StoryCardText from '../shared/StoryCardText'

interface Props {

}

const DownloadAndWatch: React.FC<Props> = () => {
  return <div className="story-card animation-card downloadAndWatch flipped">
    <div className="animation-card-container">
      <StoryCardText className='story-card-text-animation' title='Download your shows to watch offline.' subtitle='Save your favorites easily and always have something to watch.' />

      <div className="story-card-img-container">
        <div className="story-card-animation-container">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className="story-card-img" />

          <div className="story-card-animation">
            <div className="story-card-animation-image">
              <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
            </div>
            <div className="story-card-animation-text">
              <div className="text-0">Stranger Things</div>
              <div className="text-1">Downloading...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default DownloadAndWatch