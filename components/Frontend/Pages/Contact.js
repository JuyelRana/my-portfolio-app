import React from 'react';

const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        {/*<p>*/}
                        {/*    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum*/}
                        {/*    quidem. Sit sint*/}
                        {/*    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit*/}
                        {/*    alias*/}
                        {/*    ea. Quia*/}
                        {/*    fugiat sit in iste officiis commodi quidem hic quas.*/}
                        {/*</p>*/}
                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"/>
                                    <h4>Location:</h4>
                                    <p>4/A Rafiq Housing(4th Floor), 10, Shekertek, Adbar, Mohammadpur, Dhaka-1207</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"/>
                                    <h4>Email:</h4>
                                    <p>mjuyelrana@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"/>
                                    <h4>Call:</h4>
                                    <p>+8801726903951</p>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4178165823178!2d90.35504431538928!3d23.768131594014612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a18d44cef7%3A0x63f83440d27381a!2sShekhertek%20Electric!5e0!3m2!1sen!2sbd!4v1625779945974!5m2!1sen!2sbd"
                                    frameBorder="0"
                                    style={{
                                        border: 0,
                                        width: '100%',
                                        height: '290px'
                                    }}
                                    loading="lazy"/>


                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="/forms/contact.php" method="post" role="form"
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
        </>
    );
};

export default Contact;
