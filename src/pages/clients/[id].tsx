import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import avatar from '@/../public/avatar.png'

const SingleClientPage: NextPage = () => {
    const router = useRouter()

    const { name, email } = router.query

    return (
        <>
            <Head>
                <title>{ name }`s Page</title>
            </Head>
            <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 30 }}>
                    <Image
                        src={avatar}
                        alt='Users logo'
                        width={120}
                        height={120}
                        priority
                    />
                    <div>
                        <h2 style={{ marginTop: 10 }}>Общая инормация</h2>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Имя клиента</span>: { name }
                        </p>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Электронная почта</span>: { email }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleClientPage
