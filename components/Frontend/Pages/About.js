import React from 'react';

const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>
                            I like to build awesome software. For more than five years I am working on this developing
                            sector. In this period I have developed many web and mobile applications using many
                            environments
                            and programming languages. I love my profession and I am always looking for the improvements
                            and progressions in my career.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="/img/profile_img.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">

                            <h3>My Core Tech:</h3>

                            <div className="row mt-3">
                                <div className="col-lg-12">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"/> <strong>Frontend:</strong>
                                            <span>
                                                React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex)
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Backend:</strong>
                                            <span>
                                                PHP (Laravel, Codeigniter), Node Js (Express Js)
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Apps Development:</strong>
                                            <span>
                                                Native (Java, Android, Swift), Cross Platform (React Native, Ionic)
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Api Development:</strong>
                                            <span>
                                                Rest Api (Laravel), GraphQL
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Database:</strong>
                                            <span>
                                                MySQL, MongoDB, Firebase
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>DevOps:</strong>
                                            <span>
                                                Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins
                                            </span>
                                        </li>
                                        <li><i className="bi bi-chevron-right"/> <strong>Scrum Agile
                                            Methodology:</strong>
                                            <span>
                                                Git, Bitbucket, Github, Gitlab, Trello, Jira, ClickUp
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <p>
                                Very passionate about learning new technologies, breaking down complex problems, and
                                learning from other developers and I always keep myself updated with the latest
                                platforms, frameworks, libraries, and technologies.
                            </p>

                            {/*<h3>Personal Details</h3>*/}

                            {/*<div className="row">*/}
                            {/*    <div className="col-lg-6">*/}
                            {/*        <ul>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>Birthday:</strong>*/}
                            {/*                <span>10 September 1995</span></li>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>Website:</strong>*/}
                            {/*                <span>http://mjuyelrana.com</span></li>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>Phone:</strong>*/}
                            {/*                <span>+8801726903951</span></li>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>City:</strong>*/}
                            {/*                <span>Dhaka, Bangladesh</span></li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-lg-6">*/}
                            {/*        <ul>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>Age:</strong>*/}
                            {/*                <span>{new Date().getFullYear() - new Date('1995-09-10').getFullYear()}</span>*/}
                            {/*            </li>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>Degree:</strong>*/}
                            {/*                <span>Bsc & Msc in Computer Science and Engineering</span>*/}
                            {/*            </li>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>Email:</strong>*/}
                            {/*                <span>mjuyelrana@gmail.com</span>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="row">*/}
                            {/*    <div className="col-lg-12">*/}
                            {/*        <ul>*/}
                            {/*            <li><i className="bi bi-chevron-right"/> <strong>Address:</strong>*/}
                            {/*                <span style={{*/}
                            {/*                    'font-size': '14px'*/}
                            {/*                }}>*/}
                            {/*                    HOUSE# 4/A RAFIQ HOUSING(4th Floor),ROAD# 10, SHEKERTEK, ADBAR, MOHAMMADPUR, DHAKA-1207*/}
                            {/*                </span>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;
