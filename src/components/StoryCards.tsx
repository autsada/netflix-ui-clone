import { useState } from 'react'

import HeroCard from './story-cards/HeroCard'
import WatchOnTv from './story-cards/WatchOnTv'
import DownloadAndWatch from './story-cards/DownloadAndWatch'
import WatchOnDevice from './story-cards/WatchOnDevice';
import ForKids from './story-cards/ForKids';
import FAQCard from './story-cards/FAQCard';
import FooterCard from './story-cards/FooterCard';

function StoryCards() {
    const [formId, setFormId] = useState('')
    const [email, setEmail] = useState('')

    return <div className="story-cards">
        <HeroCard email={email} setEmail={setEmail} formId={formId} setFormId={setFormId} />
        <WatchOnTv />
        <DownloadAndWatch />
        <WatchOnDevice />
        <ForKids />
        <FAQCard email={email} setEmail={setEmail} formId={formId} setFormId={setFormId} />
        <FooterCard />
    </div>
}

export default StoryCards