import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Row, Container, Col, input, Form } from 'react-bootstrap';
import en from '../locales/enContact';
import ru from '../locales/ruContact';
import ge from '../locales/geContact';
import Link from 'next/link';
import { useTitle } from '../components/title';
import Head from 'next/head';
import Layout from '../components/Layout';
import Script from 'next/script';
export default function IndexPage() {
    const [showBanner, setBanner] = useState(true);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;
    useTitle(t.titlet);
    return (
        <div>
            <Head>
                {useEffect(() => {
                    import('react-facebook-pixel')
                        .then(x => x.default)
                        .then(ReactPixel => {
                            ReactPixel.init('819167662644146');
                            ReactPixel.pageView();

                            router.events.on('routeChangeComplete', () => {
                                ReactPixel.pageView();
                            });
                        });
                }, [router.events])}
                <title>{t.titlet}</title>
                <link rel='icon' href='/favicon/favicon.ico' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta property='og:title' content={t.titlet} />
                <meta name='description' content={t.metad}></meta>
                <meta property='og:image' content='https://imageholder.netlify.app/imgs/contact.jpg' />
                <meta name='facebook-domain-verification' content='lj973bqb1is3jcy6uh3xa972y05kuu' />
                <Script async src='https://www.googletagmanager.com/gtag/js?id=G-H58RBQJ53W'></Script>
                <Script>
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H58RBQJ53W');
        `}
                </Script>
            </Head>
            <Layout>
                <div className='hero'>
                    <div>
                        <div className='contact__section'>
                            <Container>
                                <Row className='justify-content-between'>
                                    <Col className='mt-5' xs='12' lg='6' md='6' sm='6' xl='6' xxl='6'>
                                        <h2 className='mt-60 mb-60'>{t.lets}</h2>
                                        <div className='contact__info'>
                                            <Row>
                                                <Col
                                                    xs='6'
                                                    lg='6'
                                                    md='6'
                                                    sm='6'
                                                    xl='3'
                                                    xxl='3'
                                                    className=' contact__number'
                                                >
                                                    <h3>{t.telnum}</h3>
                                                    <h5>+995 32 2 11 11 44</h5>
                                                </Col>
                                                <Col xs='3' className='contact__number'>
                                                    <h3>{t.vw}</h3>
                                                    {/* ზუკასი */}
                                                    <h5 className='contact__number_vw'>+995 511 11 44 33</h5>
                                                    {/* ანის */}
                                                    <h5 className='contact__number_vw'>+995 511 11 44 33</h5>
                                                </Col>
                                                <Col
                                                    xs='6'
                                                    lg='6'
                                                    md='6'
                                                    sm='6'
                                                    xl='3'
                                                    xxl='3'
                                                    className='contact__number'
                                                >
                                                    <h3>{t.email}</h3>
                                                    <h5>sales@apart.ge</h5>
                                                </Col>
                                                <Col
                                                    xs='6'
                                                    lg='6'
                                                    md='6'
                                                    sm='6'
                                                    xl='3'
                                                    xxl='3'
                                                    className=' contact__number'
                                                >
                                                    <h3>{t.location}</h3>
                                                    <h5>{t.locPl}</h5>
                                                </Col>
                                                <Col
                                                    xs='6'
                                                    lg='6'
                                                    md='6'
                                                    sm='6'
                                                    xl='3'
                                                    xxl='3'
                                                    className='marginer-30 contact__number'
                                                >
                                                    <a href='https://www.facebook.com/apartdevelopment'>
                                                        <h5>Facebook</h5>
                                                    </a>
                                                </Col>
                                                <Col
                                                    xs='6'
                                                    lg='6'
                                                    md='6'
                                                    sm='6'
                                                    xl='3'
                                                    xxl='3'
                                                    className=' contact__number d-flex align-items-end'
                                                >
                                                    <a href='https://www.instagram.com/apartdevelopment/'>
                                                        <h5>Instagram</h5>
                                                    </a>
                                                </Col>
                                                <Col
                                                    xs='6'
                                                    lg='6'
                                                    md='6'
                                                    sm='6'
                                                    xl='3'
                                                    xxl='3'
                                                    className=' contact__number d-flex align-items-end'
                                                >
                                                    <a href='https://www.youtube.com/channel/UCJgX6dfa84r7FkWIBof3z7A'>
                                                        <h5>Youtube</h5>
                                                    </a>
                                                </Col>
                                                <Col
                                                    xs='3'
                                                    className=' contact__number d-flex align-items-end'
                                                >
                                                    <a href='https://www.linkedin.com/company/apart-development/'>
                                                        <h5>Linkedin</h5>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </div>
                                        <form className=''>
                                            <div className='row'>
                                                <div className='col-5 mt-60 col-12'>
                                                    <p className='section1-form-text'>{t.contactInfo}</p>
                                                    <h4 className='section-1-form-subtext'>{t.aparttype}</h4>
                                                    <div className='row'>
                                                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6'>
                                                            <form className=''>
                                                                <div>
                                                                    <div className='form-check form-check-inline'>
                                                                        <input
                                                                            name='group1'
                                                                            type='checkbox'
                                                                            className='form-check-input'
                                                                        />
                                                                        <label
                                                                            title=''
                                                                            className='form-check-label'
                                                                        >
                                                                            {t.b1}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6'>
                                                            <form className=''>
                                                                <div>
                                                                    <div className='form-check form-check-inline'>
                                                                        <input
                                                                            name='group1'
                                                                            type='checkbox'
                                                                            className='form-check-input'
                                                                        />
                                                                        <label
                                                                            title=''
                                                                            className='form-check-label'
                                                                        >
                                                                            {t.b2}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6'>
                                                            <form className=''>
                                                                <div>
                                                                    <div className='form-check form-check-inline'>
                                                                        <input
                                                                            name='group1'
                                                                            type='checkbox'
                                                                            className='form-check-input'
                                                                        />
                                                                        <label
                                                                            title=''
                                                                            className='form-check-label'
                                                                        >
                                                                            {t.b3}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6'>
                                                            <form className=''>
                                                                <div>
                                                                    <div className='form-check form-check-inline'>
                                                                        <input
                                                                            name='group1'
                                                                            type='checkbox'
                                                                            className='form-check-input'
                                                                        />
                                                                        <label
                                                                            title=''
                                                                            className='form-check-label'
                                                                        >
                                                                            {t.b4}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className='mb-60 col'>
                                                            <div
                                                                xs='12'
                                                                className='mb-md-0 mb-5 home--inputs'
                                                            >
                                                                <form
                                                                    id='contact-form'
                                                                    name='contact-form'
                                                                    action='https://api.web3forms.com/submit'
                                                                    method='POST'
                                                                    className=''
                                                                >
                                                                    <div className='col-12'>
                                                                        <div className='md-form mb-0 contact-placeholder-text'>
                                                                            <input
                                                                                type='hidden'
                                                                                name='access_key'
                                                                                value='b6497681-c3af-4de3-aadc-3245d46562dd'
                                                                            />
                                                                            <input
                                                                                type='hidden'
                                                                                name='redirect'
                                                                                value='https://apart.ge/thank-you'
                                                                            />
                                                                            <input
                                                                                name='name'
                                                                                placeholder={t.name}
                                                                                type='text'
                                                                                id='name'
                                                                                required
                                                                                className='form-control input__main form-control'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-12'>
                                                                        <div className='md-form mb-0 contact-placeholder-text'>
                                                                            <input
                                                                                name='email'
                                                                                placeholder={t.email}
                                                                                type='mail'
                                                                                id='email'
                                                                                required
                                                                                className='form-control input__main form-control'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-12'>
                                                                        <div className='md-form mb-0 contact-placeholder-text'>
                                                                            <input
                                                                                name='number'
                                                                                placeholder={t.telnum}
                                                                                type='phone'
                                                                                id='email'
                                                                                required
                                                                                className='form-control input__main form-control'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='text-center text-md-left home--get-contacted'>
                                                                        <button
                                                                            type='submit'
                                                                            className='btn-send btn btn-primary'
                                                                        >
                                                                            {t.getContacted}
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </Col>
                                    <Col
                                        className=' d-flex align-items-end'
                                        xs='12'
                                        lg='6'
                                        md='6'
                                        sm='6'
                                        xl='6'
                                        xxl='6'
                                    >
                                        <iframe
                                            src='https://snazzymaps.com/embed/408105'
                                            width='100%'
                                            height='500'
                                            className='mb-60'
                                            // style="border:none;"
                                        ></iframe>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
