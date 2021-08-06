import LanguageSelect from './shared/LanguageSelect'

function Header() {

    return <div className="header-wrapper">
        <div className="header">
            <div className="logo-container" />
            <LanguageSelect />
            <div className="auth-link-container">
                <a href="/" className='auth-link btn-red'>Sign In</a>
            </div>
        </div>
    </div>
}

export default Header