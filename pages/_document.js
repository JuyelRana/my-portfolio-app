import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                    <title>Md Juyel Rana | Personal Portfolio - Home</title>
                    <meta content="" name="description"/>
                    <meta content="" name="keywords"/>

                    <link href="/img/favicon.png" rel="icon"/>
                    <link href="/img/apple-touch-icon.png" rel="apple-touch-icon"/>

                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                        rel="stylesheet"/>

                    <link href="/vendor/aos/aos.css" rel="stylesheet"/>
                    <link href="/vendor/bootstrap/css/bootstrap.min.css"
                          rel="stylesheet"/>
                    <link href="/vendor/bootstrap-icons/bootstrap-icons.css"
                          rel="stylesheet"/>
                    <link href="/vendor/boxicons/css/boxicons.min.css"
                          rel="stylesheet"/>
                    <link
                        href="/vendor/glightbox/css/glightbox.min.css"
                        rel="stylesheet"/>

                    <link href="/vendor/fontawesome/css/all.css"
                          rel="stylesheet"/>

                    <link
                        href="/vendor/swiper/swiper-bundle.min.css"
                        rel="stylesheet"/>

                    <link href="/css/style.css"
                          rel="stylesheet"/>
                </Head>

                <body>

                <Main/>

                <NextScript/>

                {/*Vendor JS Files */}
                <script src="/vendor/aos/aos.js"/>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
                <script src="/vendor/fontawesome/js/all.js"/>
                <script src="/vendor/glightbox/js/glightbox.min.js"/>
                <script src="/vendor/isotope-layout/isotope.pkgd.min.js"/>
                <script src="/vendor/php-email-form/validate.js"/>
                <script src="/vendor/purecounter/purecounter.js"/>
                <script src="/vendor/swiper/swiper-bundle.min.js"/>
                <script src="/vendor/typed.js/typed.min.js"/>
                <script src="/vendor/waypoints/noframework.waypoints.js"/>

                {/*Template Main JS File */}
                <script src="/js/main.js"></script>

                </body>
            </Html>
        )
    }
}

export default MyDocument
