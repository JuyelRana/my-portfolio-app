import React from 'react';

const Facts = () => {
    return (
        <>
            <section id="facts" className="facts">
                <div className="container">

                    <div className="section-title">
                        <h2>Facts</h2>
                        <p>I am a Full-Stack developer with 4+ years of experience in both web and mobile application
                            development. In that time,
                            I have working experience with many companies, agents, or clients.</p>
                    </div>

                    <div className="row no-gutters">

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile"/>
                                <span data-purecounter-start="0" data-purecounter-end="50"
                                      data-purecounter-duration="0.5"
                                      className="purecounter"></span>
                                <p><strong>Happy Clients</strong></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                             data-aos-delay="100">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"/>
                                <span data-purecounter-start="0" data-purecounter-end="100"
                                      data-purecounter-duration="1"
                                      className="purecounter"></span>
                                <p><strong>Projects</strong> I have done</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                             data-aos-delay="200">
                            <div className="count-box">
                                <i className="bi bi-headset"/>
                                <span data-purecounter-start="0" data-purecounter-end="1453"
                                      data-purecounter-duration="1"
                                      className="purecounter"></span>
                                <p><strong>Hours Of Support</strong></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                             data-aos-delay="300">
                            <div className="count-box">
                                <i className="bi bi-people"/>
                                <span data-purecounter-start="0" data-purecounter-end="32"
                                      data-purecounter-duration="1"
                                      className="purecounter"></span>
                                <p><strong>Hard Working</strong> tough projects</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Facts;
