import React from 'react';

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>As a full-stack developer, my tech skills in client-side (Frontend) and server-side (Backend)
                            need to develop. I am expert in the following stack.</p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6" data-aos="fade-up">

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">98%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="98"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">React JS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Android, Java <i className="val">92%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="92"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">HTML, CSS, Bootstrap <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Vue JS <i className="val">72%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="72"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Figma, Photoshop, Gravit Designer, Adobe XD <i
                                    className="val">62%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="62"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                            <div className="progress">
                                <span className="skill">PHP <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Laravel <i className="val">98%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="98"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CodeIgniter <i className="val">78%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="78"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Mysql/MariaDB <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Unix OS (Linux, Mac)<i className="val">98%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="98"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                            {/*Digital Ocean Server*/}
                            <div className="progress">
                                <span className="skill">Digital Ocean, AWS Server<i className="val">78%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="78"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Skills;
