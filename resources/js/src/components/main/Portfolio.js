import React from 'react'
import p1 from './../../../public/img/portfolio/1.jpg';
import p2 from './../../../public/img/portfolio/2.jpg';
import p3 from './../../../public/img/portfolio/3.jpg';
import p4 from './../../../public/img/portfolio/4.jpg';
import p5 from './../../../public/img/portfolio/5.jpg';
import p6 from './../../../public/img/portfolio/6.jpg';
import p7 from './../../../public/img/portfolio/7.jpg';
import p8 from './../../../public/img/portfolio/8.jpg';

function Portfolio() {
    return (
        <section id="portfolio" className="wow fadeInUp">
            <div className="container">

                <div className="section-header">
                    <h2>Our Portfolio</h2>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </div>

            </div>

            <div className="container-fluid">
                <div className="row no-gutters">

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                            <a href={p1} className="portfolio-popup">
                                <img src={p1} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-info">
                                        <h2 className="wow fadeInUp">Portfolio Item 1</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">

                        <div className="portfolio-item wow fadeInUp">
                            <a href={p2} className="portfolio-popup" >
                                <img src={p2} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-info">
                                        <h2 className="wow fadeInUp">Portfolio Item 2</h2>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                        <a href={p3} className="portfolio-popup">
                            <img src={p3} alt="" />
                            <div className="portfolio-overlay">
                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 3</h2></div>
                            </div>
                        </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                        <a href={p4} className="portfolio-popup">
                            <img src={p4} alt="" />
                            <div className="portfolio-overlay">
                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 4</h2></div>
                            </div>
                        </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                        <a href={p5} className="portfolio-popup">
                            <img src={p5} alt="" />
                            <div className="portfolio-overlay">
                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 5</h2></div>
                            </div>
                        </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                        <a href={p6} className="portfolio-popup">
                            <img src={p6} alt="" />
                            <div className="portfolio-overlay">
                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 6</h2></div>
                            </div>
                        </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                        <a href={p7} className="portfolio-popup">
                            <img src={p7} alt="" />
                            <div className="portfolio-overlay">
                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 7</h2></div>
                            </div>
                        </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                        <a href={p8} className="portfolio-popup">
                            <img src={p8} alt="" />
                            <div className="portfolio-overlay">
                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 8</h2></div>
                            </div>
                        </a>
                    </div>
                </div>

                </div>

            </div>

        </section>
    )
}

export default Portfolio
