import React from 'react';

const Service = () => {
    return (
        <>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        {/*<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum*/}
                        {/*    quidem. Sit sint*/}
                        {/*    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit*/}
                        {/*    alias*/}
                        {/*    ea. Quia*/}
                        {/*    fugiat sit in iste officiis commodi quidem hic quas.</p>*/}
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><i className="fas fa-globe"/></div>
                            <h4 className="title"><a href="">Web Development</a></h4>
                            <p className="description">
                                For Web Development I use frontend technologies React Js (Next Js, Redux, Flux, Material
                                UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), backend PHP (Laravel, Codeigniter), Node Js
                                (Express Js), and database MySQL, MongoDB, Firebase.
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="fas fa-mobile-alt"/></div>
                            <h4 className="title"><a href="">Apps Development</a></h4>
                            <p className="description">
                                For Development I use Native (Java, Android, Swift), Cross Platform (React Native,
                                Ionic), Rest API (Laravel), GraphQL, Node Js
                                (Express Js), and database technologies MySQL, MongoDB, Firebase.
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="fas fa-cloud"/></div>
                            <h4 className="title"><a href="">Developer Operations (DevOps)</a></h4>
                            <p className="description">
                                For developer operations, auto deployment, server setup, load balancing etc I use
                                Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins,
                                Git, Bitbucket, Github, Gitlab.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Service;
