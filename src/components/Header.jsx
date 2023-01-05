import '../App.css'

import photo from '../images/ffc-business-card-girl.png'

function Header() {
    return (
        <header className="info">
            <img src={ photo } className="info--photo" alt="" />            
        </header>
    )
}

export default Header