import React from 'react'

interface Props {
  className?: string
  title: string
  subtitle: string
}

const StoryCardText: React.FC<Props> = ({ children, className, title, subtitle }) => {
  return <div className={`story-card-text ${className ? className : ''}`}>
    <h1 className="story-card-title">{title}</h1>
    <h2 className="story-card-subtitle">{subtitle}</h2>

    {children && children}
    {/* <h3 className="story-card-disclaimer"></h3> */}
  </div>
}

export default StoryCardText