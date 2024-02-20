import './Header.css'
import title from './Title.png'

function Header({links, selectedLink, onSelectLink}){

    return(
        <nav>
            <div className="leftIcons">
                <img src={title} alt="" class="logo" />
            </div>
            <ul className="navButtons">
                {links.map((link) => (
                    
                    <li key={link} className={selectedLink === link ? 'selected-Li' : 'unselected-Li'} onClick={() => onSelectLink(link)}>{link}</li>
                    
                ))}
            </ul>
            <div className="signUp">
                <button className="signup">Sign Up</button>
            </div>
        </nav>
    );
}

export default Header