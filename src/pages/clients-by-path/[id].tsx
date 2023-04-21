import { NextPage } from 'next'
import Head from "next/head";
import Image from "next/image";
import avatar from "../../../public/avatar.png";

type Client = {
    id: string
    name: string
    email: string
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const clientsAsPaths = data.map((client: Client) => (
        {
            params: {
                id: String(client.id), name: client.name, email: client.email
            }
        })
    )

    return {
        paths: clientsAsPaths, fallback: false
    }
}

export async function getStaticProps({ params }: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${params.id}`)
    const client = await response.json()

    return {
        props: {
            client: client[0]
        }
    }
}


const PathClientPage: NextPage<any> = ({ client }) => {
    return (
        <>
            <Head>
                <title>{ client.name }</title>
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
                            <span style={{ fontWeight: 'bold' }}>Имя клиента</span>: { client.name }
                        </p>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Электронная почта</span>: { client.email }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PathClientPage
