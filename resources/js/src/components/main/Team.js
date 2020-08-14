import React from 'react'
import t1 from './../../../public/img/yasin.jpg'
import t2 from '../../../public/img/fazlul.jpg'
import t3 from '../../../public/img/tafhim.jpg'
// import t4 from '../../../public/img/team-4.jpg'

function Team() {
    return (

        <section id="team" className="wow fadeInUp">
        <div className="container">
            <div className="section-header">
            <h2>Our Team</h2>
            </div>
            <div className="row">

            <div className="col-lg-4 col-md-6">
                <div className="member">
                <div className="pic"><img src={t1} alt="" /></div>
                <div className="details">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                    <a href=""><i className="fa fa-twitter"></i></a>
                    <a href=""><i className="fa fa-facebook"></i></a>
                    <a href=""><i className="fa fa-google-plus"></i></a>
                    <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="member">
                <div className="pic"><img src={t2} alt="" /></div>
                <div className="details">
                    <h4>Sarah Jhinson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                    <a href=""><i className="fa fa-twitter"></i></a>
                    <a href=""><i className="fa fa-facebook"></i></a>
                    <a href=""><i className="fa fa-google-plus"></i></a>
                    <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="member">
                <div className="pic"><img src={t3} alt="" /></div>
                <div className="details">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                    <a href=""><i className="fa fa-twitter"></i></a>
                    <a href=""><i className="fa fa-facebook"></i></a>
                    <a href=""><i className="fa fa-google-plus"></i></a>
                    <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
                <div className="member">
                <div className="pic"><img src={t4} alt="" /></div>
                <div className="details">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                    <a href=""><i className="fa fa-twitter"></i></a>
                    <a href=""><i className="fa fa-facebook"></i></a>
                    <a href=""><i className="fa fa-google-plus"></i></a>
                    <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div> */}
            </div>

        </div>
        </section>
    )
}

export default Team
