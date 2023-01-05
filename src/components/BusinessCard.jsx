import Header from './Header'
import Bio from './Bio'
import Buttons from './Buttons'
import About from './About'
import Interets from './Interests'
import Footer from './Footer'



function BusinessCard() {
    return(
        <div className="cardbox">
            <Header />
            <Bio />
            <Buttons />
            <About />
            <Interets />            
            <Footer />
        </div>
    )
}

export default BusinessCard