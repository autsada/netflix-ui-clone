import React from 'react'

interface Props {

}

const LanguageSelect: React.FC<Props> = () => {
  return <div className="lang-selection-container">
    <div className="lang-selection">
      <div className="lang-arrow">
        <select name="" id="lang-select" className='lang-select'>
          <option value="" >English</option>
          <option value="">Thai</option>
        </select>
      </div>
    </div>
  </div>
}

export default LanguageSelect