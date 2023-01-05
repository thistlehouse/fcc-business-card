import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Buttons() {
    return (
        <div className="info--buttons">
            <button className="info--button info--email_button">
                <div className="info--email_icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="info--email_button_text info--button_text">
                    Email
                </div>
            </button>

            <button className="info--button info--linkedin_button ">
                <div className="info--linkedin_icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="info--linkedin_text info--button_text">
                    Linkedin
                </div>
            </button>
        </div>
    )
}

export default Buttons


