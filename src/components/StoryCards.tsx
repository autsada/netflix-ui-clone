import HeroCard from './story-cards/HeroCard'
import WatchOnTv from './story-cards/WatchOnTv'
import DownloadAndWatch from './story-cards/DownloadAndWatch'
import WatchOnDevice from './story-cards/WatchOnDevice';

function StoryCards() {
    return <div className="story-cards">
        <HeroCard />
        <WatchOnTv />
        <DownloadAndWatch />
        <WatchOnDevice />
        <div className="story-card"></div>
        <div className="story-card"></div>
        <div className="story-card"></div>
    </div>
}

export default StoryCards