import React from 'react'

import StoryCardText from '../shared/StoryCardText'

interface Props {

}

const ForKids: React.FC<Props> = () => {
  return <div className="story-card animation-card forKids flipped">
    <div className="animation-card-container">
      <StoryCardText className='story-card-text-animation' title='Create profiles for kids.' subtitle='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' />

      <div className="story-card-img-container">
        <div className="story-card-animation-container">
          <img src="https://occ-0-2339-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" className="story-card-img" />

          <div className="story-card-animation">
            <div className="story-card-animation-text">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default ForKids