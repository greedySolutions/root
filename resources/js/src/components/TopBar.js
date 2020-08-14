import React from 'react'

function TopBar() {
    return (
        <section id="topbar" className="d-none d-lg-block">

            <div className="container clearfix">

                <div className="contact-info float-left">
                    <i className="fa fa-envelope-o"></i> <a href="mailto:contact@example.com">support@greedysolutions.com</a>
                    <i className="fa fa-phone"></i> +012346543
                </div>

                <div className="social-links float-right">
                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

            </div>

        </section>
    )
}

export default TopBar
