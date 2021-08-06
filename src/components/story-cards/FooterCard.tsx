import React from 'react'

import FooterLink from '../shared/FooterLink'
import LanguageSelect from '../shared/LanguageSelect'

interface Props {

}

const FooterCard: React.FC<Props> = () => {
  return <div className='story-card footer-card story-card-no-border'>
    <div className='footer-wrapper'>
      <div className="footer">
        <p className="footer-top">
          Question? Call <a className='footer-top-a' href='tel:1-800-012-298'>1-800-012-298</a>
        </p>
        <ul className="footer-links">
          <FooterLink href='https://help.netflix.com/support/412' subject='FAQ' />
          <FooterLink href='https://help.netflix.com' subject='Help Center' />
          <FooterLink href='/youraccount' subject='Account' />
          <FooterLink href='https://media.netflix.com' subject='Media Center' />
          <FooterLink href='https://ir.netflix.com' subject='Investor Relations' />
          <FooterLink href='https://jobs.netflix.com/jobs' subject='Jobs' />
          <FooterLink href='/redeem' subject='Redeem Gift Cards' />
          <FooterLink href='/gift-cards' subject='Buy Gift Cards' />
          <FooterLink href='/watch' subject='Ways to Watch' />
          <FooterLink href='https://help.netflix.com/legal/termofuse' subject='Terms of Use' />
          <FooterLink href='https://help.netflix.com/legal/privacy' subject='Privacy' />
          <FooterLink href='#' subject='Cookie Preferences' />
          <FooterLink href='https://help.netflix.com/legal/corpinfo' subject='Corporate Information' />
          <FooterLink href='https://help.netflix.com/contactus' subject='Contact Us' />
          <FooterLink href='https://fast.com' subject='Speed Test' />
          <FooterLink href='https://help.netflix.com/legal/notices' subject='Legal Notices' />
          <FooterLink href='https://www.netflix.com/th-en/browse/genre/839338' subject='Only on Netflix' />
        </ul>
        <LanguageSelect />
        <p className="footer-country">Netflix Thailand</p>
      </div>
    </div>
  </div>
}

export default FooterCard