import '../App.css'
import { 
    faTwitter, 
    faFacebookF, 
    faInstagram,  
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className="footer">
            <div className="brand-box icon-color">
                <FontAwesomeIcon className="fa-lg" icon={faTwitter} />
            </div>

            <div className="brand-box icon-color face">
                <FontAwesomeIcon className="fa-xl" icon={faFacebookF} />
            </div>

            <div className="brand-box icon-color">
                <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
            </div>

            <div className="brand-box icon-color">
                <FontAwesomeIcon className="fa-lg" icon={faGithub} />
            </div>
            
        </footer>
    )
}

export default Footer