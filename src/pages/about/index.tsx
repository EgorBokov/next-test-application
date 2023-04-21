import { NextPage } from 'next'
import Head from 'next/head'

const AboutPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>About us</title>
                <meta name='description' content='We are a huge compoany provides CRM systems. Contact us!'/>
            </Head>
            <div>
                <h2>
                    О нас
                </h2>
                <p>
                    В данном разделе вы можете ознакомиться с основной информацией о нас!
                </p>
            </div>
        </>
    )
}

export default AboutPage
