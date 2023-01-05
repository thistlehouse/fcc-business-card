import '../App.css'

function Bio() {
    return (
        <section className="info">
            <h2 className="info--name">Laura Smith</h2>
            <h5 className="info--job">Frontend Developer</h5>
            <h6 className="info--website">
                <a href="#">laurasmith.website</a>
            </h6>
        </section>
    )
}

export default Bio