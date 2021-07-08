import React from 'react';
import Layout from "../components/Frontend/Layout/Layout";
import About from "../components/Frontend/Pages/About";
import Facts from "../components/Frontend/Pages/Facts";
import Skills from "../components/Frontend/Pages/Skills";
import Resume from "../components/Frontend/Pages/Resume";
import Portfolio from "../components/Frontend/Pages/Portfolio";
import SiteHeader from "../components/Frontend/Header/SiteHeader";

const Home = () => {
    return (
        <>
            <SiteHeader/>
            <Layout>

                {/*Hero Section*/}
                <section
                    id="hero"
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                        backgroundImage: `url('/img/hero.png')`
                    }}>

                    <div className="hero-container" data-aos="fade-in">
                        <h1>Md Juyel Rana</h1>
                        <p>I'm a Full Stack Developer</p>
                    </div>
                </section>
                {/*End Hero */}


                <main id="main">

                    {/*About Section*/}
                    <About/>
                    {/*End About Section*/}


                    {/*Facts Section*/}
                    <Facts/>
                    {/*End Facts Section*/}

                    {/*Skills Section*/}
                    <Skills/>
                    {/*End Skills Section*/}

                    {/*Resume Section*/}
                    <Resume/>
                    {/*End Resume Section*/}

                    {/*Portfolio Section*/}
                    <Portfolio/>
                    {/*End Portfolio Section*/}

                    {/*Services Section*/}
                    <section id="services" className="services">
                        <div className="container">

                            <div className="section-title">
                                <h2>Services</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                    quidem. Sit sint
                                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                                    alias
                                    ea. Quia
                                    fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="bi bi-briefcase"/></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas
                                        molestias excepturi
                                        sint occaecati cupiditate non provident</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bi bi-card-checklist"/></div>
                                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi
                                        ut aliquip ex ea
                                        commodo consequat tarad limino ata</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="bi bi-bar-chart"/></div>
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore
                                        eu fugiat nulla pariatur</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="bi bi-binoculars"/></div>
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa
                                        qui officia
                                        deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bi bi-brightness-high"/></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos
                                        ducimus
                                        qui blanditiis
                                        praesentium voluptatum deleniti atque</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                                    <div className="icon"><i className="bi bi-calendar4-week"/></div>
                                    <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio.
                                        Nam
                                        libero tempore,
                                        cum soluta nobis est eligendi</p>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/*End Services Section*/}

                    {/*Testimonials Section*/}
                    <section id="testimonials" className="testimonials section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Testimonials</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                    quidem. Sit sint
                                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                                    alias
                                    ea. Quia
                                    fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="testimonials-slider swiper-container" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                                suscipit
                                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                                                Maecen
                                                aliquam,
                                                risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                            </p>
                                            <img src="/img/testimonials/testimonials-1.jpg"
                                                 className="testimonial-img" alt=""/>
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                    {/*End testimonial item*/}

                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem
                                                cillum quid
                                                cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat
                                                irure amet
                                                legam anim culpa.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                            </p>
                                            <img src="/img/testimonials/testimonials-2.jpg"
                                                 className="testimonial-img" alt=""/>
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                        </div>
                                    </div>
                                    {/*End testimonial item*/}

                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum
                                                nulla
                                                quem veniam
                                                duis minim tempor labore quem eram duis noster aute amet eram fore quis
                                                sint
                                                minim.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                            </p>
                                            <img src="/img/testimonials/testimonials-3.jpg"
                                                 className="testimonial-img" alt=""/>
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                        </div>
                                    </div>
                                    {/*End testimonial item*/}

                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export
                                                minim fugiat
                                                minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore
                                                quem dolore
                                                labore illum veniam.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                            </p>
                                            <img src="/img/testimonials/testimonials-4.jpg"
                                                 className="testimonial-img" alt=""/>
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                        </div>
                                    </div>
                                    {/*End testimonial item*/}

                                    <div className="swiper-slide">
                                        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam
                                                tempor
                                                noster
                                                veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                                                esse veniam
                                                culpa fore nisi cillum quid.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                            </p>
                                            <img src="/img/testimonials/testimonials-5.jpg"
                                                 className="testimonial-img" alt=""/>
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                        </div>
                                    </div>
                                    {/*End testimonial item*/}

                                </div>
                                <div className="swiper-pagination"></div>
                            </div>

                        </div>
                    </section>
                    {/*End Testimonials Section*/}

                    {/*Contact Section*/}
                    <section id="contact" className="contact">
                        <div className="container">

                            <div className="section-title">
                                <h2>Contact</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                    quidem. Sit sint
                                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                                    alias
                                    ea. Quia
                                    fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row" data-aos="fade-in">

                                <div className="col-lg-5 d-flex align-items-stretch">
                                    <div className="info">
                                        <div className="address">
                                            <i className="bi bi-geo-alt"/>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>

                                        <div className="email">
                                            <i className="bi bi-envelope"/>
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>

                                        <div className="phone">
                                            <i className="bi bi-phone"/>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                            frameBorder="0"
                                            style={{
                                                border: 0,
                                                width: '100%',
                                                height: '290px'
                                            }}
                                            allowFullScreen/>
                                    </div>

                                </div>

                                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                    <form action="forms/contact.php" method="post" role="form"
                                          className="php-email-form">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="name">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="name"
                                                       required/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="name">Your Email</label>
                                                <input type="email" className="form-control" name="email" id="email"
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject"
                                                   required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Message</label>
                                            <textarea className="form-control" name="message" rows="10" required/>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/*End Contact Section*/}

                </main>
                {/*End #main*/}

            </Layout>
        </>
    );
};

export default Home;
