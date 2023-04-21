import Head from 'next/head'
import styles from '@/pages/clients/Clients.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { NextPage } from 'next'

interface IProps {
    clientsList: Array<any>
}

export async function getStaticProps() {
    const { data: clientsList } = await axios.get('https://jsonplaceholder.typicode.com/users')

    return {
        props: {
            clientsList
        }
    }
}

const ClientsByPath: NextPage<IProps> = ({ clientsList }) => {
    return (
        <>
            <Head>
                <title>Out clients</title>
            </Head>
            <div>
                <h3>Here is the shorted list of out greatest clients.</h3>
                <div className={styles.clientsContainer}>
                    {
                        !!clientsList.length && clientsList.map((client: any) => {
                            return (
                                <Link href={`/clients/${client.id}?name=${client.name}&email=${client.email}`} key={client.id}>
                                    { client.id }. { client.name } | <span style={{ fontWeight: 'bold' }}>{ client.email }</span>
                                </Link>
                            )
                        })
                    }
                </div>
                {
                    clientsList.length === 0 && (
                        <div>
                            К сожалению, данные о клиентах не были найдены!
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ClientsByPath
