import React from 'react';
import Image from 'next/image'
import {portfolios} from "../../../constants/dummy";

const Portfolio = () => {
    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        {/*<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum*/}
                        {/*    quidem. Sit sint*/}
                        {/*    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias*/}
                        {/*    ea. Quia*/}
                        {/*    fugiat sit in iste officiis commodi quidem hic quas.</p>*/}
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-web">Web</li>
                                <li data-filter=".filter-app">App</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        {
                            portfolios?.map((product, index) => (
                                <div className={`col-lg-4 col-md-6 portfolio-item filter-${product.type}`}
                                     key={product.id}>
                                    <div className="portfolio-wrap">

                                        <Image
                                            width={800}
                                            height={600}
                                            src={product.image}
                                            className="img-fluid"
                                            alt={product.name}/>

                                        <div className="portfolio-links">

                                            <a href={product.image}
                                               data-gallery="portfolioGallery"
                                               className="portfolio-lightbox" title={product.name}>
                                                <i className="bx bx-plus"/>
                                            </a>

                                            <a
                                                target="_blank"
                                                href={product.url}
                                                title={product.name}>
                                                <i className="bx bx-link"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default Portfolio;
