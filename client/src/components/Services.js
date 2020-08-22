import React from 'react'
import '../css/Services.css'

function Services() {
return (
    <section className="page-section" id="services">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-white text-uppercase">Why StreamBoat?</h2>
            <h3 className="section-subheading text-muted">Just some of the awesome benefits:</h3>
        </div>
        <br />
        <div className="row text-center">
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-users fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3 text-white">Branding</h4>
                <p className="text-muted">Be able to have your fans find and experience your created content in new ways!.</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-briefcase fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3 text-white">Business Endevours</h4>
                <p className="text-muted">Be one of the many artists who get offered small deals to play at their local venues!</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-wrench fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3 text-white">Constant Improvment</h4>
                <p className="text-muted">Here at StreamBoat we are dedicated to providing a great user experience. In order to fulfill that we are here providing constant maintance and updates.</p>
            </div>
        </div>
    </div>
</section>
)
}

export default Services;