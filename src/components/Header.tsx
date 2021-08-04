
function Header() {

    return <div className="header-wrapper">
        <div className="header">
            {/* <div className="logo-container">
        <img className='logo' src={logo} alt="NetFlix" />
      </div> */}
            <div className="logo-container" />
            <div className="lang-selection-container">
                <div className="lang-selection">
                    {/* <label htmlFor="lang-switcher" className='lang-label'>Select Language</label> */}
                    <div className="lang-arrow">
                        <select name="" id="lang-select" className='lang-select'>
                            <option value="" >English</option>
                            <option value="">Thai</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="auth-link-container">
                <a href="#" className='auth-link btn-red'>Sign In</a>
            </div>
        </div>
    </div>
}

export default Header