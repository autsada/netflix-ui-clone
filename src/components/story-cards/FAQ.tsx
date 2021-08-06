import React, { useState } from 'react'

import plusIcon from '../../plus.svg'
import { IFAQ } from './FAQCard'

interface Props {
  faq: IFAQ
}


const FAQ: React.FC<Props> = ({ faq }) => {
  const [openAnswer, setOpenAnswer] = useState(false)

  return <li className="faq-list-item">
    <button className="faq-question">
      <span>{faq.question}</span>
      <img className={`toggle-icon ${!openAnswer ? `icon-open` : `icon-closed`}`} src={plusIcon} alt="Open" onClick={() => setOpenAnswer(!openAnswer)} />
    </button>

    {openAnswer && <div className={`faq-answer`}>
      {faq.answer.length > 1 ? <span>{faq.answer.map((ans, i) => <>{ans} {i + 1 !== faq.answer.length && <><br /> <br /></>}</>)}</span> : <span>{faq.answer[0]}</span>}
    </div>}
  </li>
}

export default FAQ