import React, { Dispatch, SetStateAction } from 'react'

import StoryCardText from '../shared/StoryCardText'
import EmailForm from '../shared/EmailForm'

interface Props {
  formId: string
  setFormId: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
}

const HeroCard: React.FC<Props> = ({ email, setEmail, formId, setFormId }) => {
  return <div className='story-card hero-card'>
    <div className="story-card-background">
      <div className="background-img-wrapper">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/76b9c2a8-78c4-43b1-bfad-bf5fe3672547/TH-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className="background-img" />
        <div className="img-gradient" />
      </div>
    </div>

    <StoryCardText title='Unlimited movies, TV shows, and more.' subtitle='Watch anywhere. Cancel anytime.'>

      <EmailForm id='hero-card' email={email} setEmail={setEmail} formId={formId} setFormId={setFormId} />
    </StoryCardText>

    <div className="center-pixel"></div>
  </div>
}

export default HeroCard